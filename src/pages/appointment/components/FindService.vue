<template>
  <BaseModal title="Recherche de service" @close="$emit('close')" :footer="true">
    <div class="popup-subtitle">Service</div>
    
    <!-- Loading state -->
    <div v-if="isLoading" class="loading-state">
      Chargement des services...
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="error-state">
      {{ error }}
    </div>
    
    <!-- Empty state -->
    <div v-else-if="professionals.length === 0" class="empty-state">
      Aucun service trouvé
    </div>
    
    <!-- Results -->
    <div v-else class="service-list">
      <div
        v-for="(pro, index) in professionals"
        :key="pro.id || index"
        class="service-card clickable"
        @click="selectService(pro)"
      >
        <div class="service-title">{{ pro.name }}</div>
        <div class="service-row">
          <img :src="locationsIcon" class="icon" />
          <span>{{ pro.address }}</span>
        </div>
        <div class="service-row">
          <img :src="phoneIcon" class="icon" />
          <span>{{ pro.phone }}</span>
        </div>
        <div class="service-row">
          <img :src="clockIcon" class="icon" />
          <span>{{ pro.hours }}</span>
        </div>
        <div class="service-badges">
          <span
            class="badge"
            :class="pro.open ? 'badge-green' : 'badge-red'"
          >{{ pro.open ? 'OUVERT' : 'FERMÉ' }}</span>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseModal from '@/components/common/BaseModal.vue';

import phoneIcon from '@/assets/icons/phone.svg'
import locationsIcon from '@/assets/icons/location.svg'
import clockIcon from '@/assets/icons/clock.svg'

const props = defineProps({
    close: {
        type: Boolean,
        default: false
    },
    searchQuery: {
        type: String,
        default: ''
    }
});

// Reactive data for professionals
const professionals = ref([])
const isLoading = ref(false)
const error = ref('')

// Fetch services from API
async function fetchServices() {
  isLoading.value = true
  error.value = ''
  
  try {
    const token = localStorage.getItem('token')
    const searchParam = props.searchQuery ? `?search=${encodeURIComponent(props.searchQuery)}` : ''
    
    const response = await fetch(`http://localhost:8000/api/v1/services${searchParam}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      const services = data.data || data
      
      // Transform services to professionals format for display
      professionals.value = services.map(service => ({
        id: service.id,
        name: service.name,
        address: `Prix: ${service.price}€ - Durée: ${service.duration} min`,
        phone: service.description || 'Pas de description',
        hours: service.is_active ? 'Service disponible' : 'Service indisponible',
        open: service.is_active,
        service: service
      }))
    } else {
      error.value = 'Erreur lors de la récupération des services'
      console.error('Erreur API:', response.statusText)
    }
  } catch (err) {
    error.value = 'Erreur de connexion'
    console.error('Erreur:', err)
  } finally {
    isLoading.value = false
  }
}

// Define emits
const emit = defineEmits(['close', 'select-service'])

// Function to select a service
const selectService = (service) => {
  emit('select-service', service.service)
  emit('close')
}

onMounted(() => {
  fetchServices()
})
</script>

<style scoped>
/* RECHERCHE DE SERVICE */
.popup-subtitle {
  font-size: 13px;
  color: #888;
  margin-top: 13px;
  margin-bottom: 11px;
}
.service-list {
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 5px;
}
.service-card {
  background: #fff;
  border: 1px solid #E4E4E7;
  border-radius: 8px;
  padding: 14px 18px 11px 18px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.service-card.clickable {
  cursor: pointer;
  transition: all 0.2s ease;
}

.service-card.clickable:hover {
  background: #f8f9fa;
  border-color: #43A047;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.service-title {
  font-family: "League Spartan", Arial, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #43A047;
  margin-bottom: 4px;
}
.service-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #4B5563;
  margin-bottom: 0;
}
.icon {
  width: 15px;
  height: 15px;
}
.service-badges {
  margin-top: 7px;
}
.badge {
  display: inline-block;
  padding: 2px 13px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  font-family: "League Spartan", Arial, sans-serif;
  margin-right: 5px;
}
.badge-green {
  background: #E6F8EC;
  color: #43A047;
  border: 1px solid #43A04722;
}
.badge-red {
  background: #FFDBDB;
  color: #EF5350;
  border: 1px solid #EF535022;
}

.loading-state, .error-state, .empty-state {
  padding: 20px;
  text-align: center;
  color: #666;
  font-size: 14px;
}

.error-state {
  color: #EF5350;
}
.popup-actions {
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
}
.btn-cancel {
  background: none;
  border: none;
  color: #4B5563;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 18px;
  border-radius: 7px;
  cursor: pointer;
}
.btn-ajouter {
  background: #43A047;
  color: #fff;
  border: none;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 22px;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.16s;
}
</style>
