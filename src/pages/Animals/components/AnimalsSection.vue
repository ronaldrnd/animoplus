<template>
    <section class="border border-neutral-200 rounded-[10px] p-8 flex flex-col gap-8">

      <TitleDashboard title="Mes animaux" :has-button="true" btn-title="Ajouter un animal" :icon="animalIcon" @on-click-btn="showModal = true" />

      <hr />

      <Alert alert-description="Adoptez votre futur compagnon avec nos éleveurs partenaires !">
        <div class="flex flex-col gap-4">
          <p class="text-[#222]">
            Trouvez un éleveur près de chez vous et adoptez un animal en toute confiance.
          </p>
          <button
          @click="$emit('showFindBreeder')"
            class="bg-[#43A047] text-white px-4 py-3 rounded-[10px] flex items-center w-fit gap-2">
            <img :src="searchIcon" alt="icone recherche" />
            <span>Trouver un éleveur</span>
          </button>
        </div>
      </Alert>

      <!-- Section des animaux de compagnie -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center font-bold gap-4">
          <img :src="petIcon" alt="icone animal" />
          <h3>Animaux de Compagnie</h3>
        </div>

        <hr />

        <!-- Loading state -->
        <div v-if="isLoading" class="flex flex-col items-center">
          <p>Chargement des animaux...</p>
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="flex flex-col items-center text-red-600">
          <p>{{ error }}</p>
          <button @click="fetchUserAnimals" class="mt-2 text-blue-600 underline">Réessayer</button>
        </div>

        <!-- Si aucun animal enregistré -->
        <div v-else-if="animals.length < 1" class="flex flex-col items-center">
          <img :src="bigPaw" alt="patte" />
          <p>Aucun animal enregistré pour le moment</p>
        </div>

        <!-- Sinon on affiche les animaux -->
        <div v-else class="animal-cards">
          <div class="animal-card" v-for="animal in animals" :key="animal.id" @click="openAnimalDetail(animal)">
            <img :src="animal.photo || bigPaw" alt="photo animal" class="animal-image" />
            <p class="animal-name">{{ animal.nom }}</p>
            <p class="animal-details">{{ animal.espece?.nom }} - {{ animal.race?.nom }}</p>
          </div>
        </div>

      </div>
    </section>
    <AddAnimal v-if="showModal" @close="showModal = false" @animal-added="handleAnimalAdded" />
    <AnimalDetailModal 
      v-if="showDetailModal && selectedAnimal" 
      :animal="selectedAnimal" 
      @close="closeAnimalDetail"
      @animal-updated="handleAnimalUpdated"
      @animal-deleted="handleAnimalDeleted"
    />

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/stores/auth.js'

import TitleDashboard from '@/components/common/TitleDashboard.vue'
import Alert from '@/components/common/Alert.vue'

// Import des icônes
import animalIcon from '@/assets/icons/animal.svg'
import searchIcon from '@/assets/icons/breeder-search.svg'
import petIcon from '@/assets/icons/animalGreen.svg'
import bigPaw from '@/assets/icons/big-paw.svg'

// Import du composant modale
import AddAnimal from '@/pages/Animals/components/AddAnimal.vue'
import AnimalDetailModal from '@/pages/Animals/components/AnimalDetailModal.vue'

// État local pour afficher ou cacher la modale
const showModal = ref(false)

const animals = ref([])
const isLoading = ref(false)
const error = ref('')

// Animal detail modal state
const showDetailModal = ref(false)
const selectedAnimal = ref(null)

// Fetch user's animals from API
async function fetchUserAnimals() {
  if (!auth.user?.id) return
  
  isLoading.value = true
  error.value = ''
  
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8000/api/v1/animals/owner/${auth.user.id}?per_page=15`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      animals.value = data.data || data
    } else {
      console.error('Erreur lors de la récupération des animaux:', response.statusText)
      error.value = 'Erreur lors de la récupération des animaux'
    }
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Erreur de connexion'
  } finally {
    isLoading.value = false
  }
}

// Load animals when component mounts
onMounted(() => {
  fetchUserAnimals()
})

// Refresh animals list after adding a new animal
function handleAnimalAdded() {
  showModal.value = false
  fetchUserAnimals()
}

// Open animal detail modal
function openAnimalDetail(animal) {
  selectedAnimal.value = animal
  showDetailModal.value = true
}

// Close animal detail modal
function closeAnimalDetail() {
  showDetailModal.value = false
  selectedAnimal.value = null
}

// Handle animal update
function handleAnimalUpdated(updatedAnimal) {
  // Find and update the animal in the list
  const index = animals.value.findIndex(animal => animal.id === updatedAnimal.id)
  if (index !== -1) {
    animals.value[index] = updatedAnimal
  }
  closeAnimalDetail()
}

// Handle animal deletion
function handleAnimalDeleted(deletedAnimalId) {
  // Remove the animal from the list
  animals.value = animals.value.filter(animal => animal.id !== deletedAnimalId)
  closeAnimalDetail()
}

const emit = defineEmits(['showFindBreeder']);
</script>

<style scoped>
.animal-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.animal-card {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 200px;
  padding: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease;
}

.animal-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.animal-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
}

.animal-name {
  margin-top: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #333;
}

.animal-details {
  font-size: 11px;
  color: #666;
  margin-top: 4px;
}
</style>