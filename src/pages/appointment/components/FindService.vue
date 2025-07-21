<template>
  <BaseModal title="Recherche de service" @close="showModal = false" :footer="true">
    <div class="popup-subtitle">Service</div>
    <div class="service-list">
      <div
        v-for="(pro, index) in professionals"
        :key="index"
        class="service-card"
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
import { ref } from 'vue'
import BaseModal from '@/components/common/BaseModal.vue';

import phoneIcon from '@/assets/icons/phone.svg'
import locationsIcon from '@/assets/icons/location.svg'
import clockIcon from '@/assets/icons/clock.svg'


const props = defineProps({
    close: {
        type: Boolean,
        default: false
    }
});

// RECHERCHE DE SERVICE
const professionals = [
  {
    name: 'Dr. Martin Vétérinaire',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true,
  },
  {
    name: 'Clinique vétérinaire Centrale',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true,
  },
  {
    name: 'Urgence Vétérinaire de Nuit',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
    open: false,
  }
]
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
