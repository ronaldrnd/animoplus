<template>
  <section class="border border-neutral-200 rounded-[10px] p-8 flex flex-col gap-8">

    <TitleDashboard title="Mon profil" :has-text-btn="true" btn-title="Mettre à jour" :icon="editIcon"
      @on-click-btn="$emit('edit-profile')" />

    <hr />

    <!-- Informations utilisateur -->
    <div class="flex justify-between items-start mb-4">
      <!-- Loading state for profile -->
      <div v-if="isLoadingProfile" class="flex items-center gap-5">
        <div class="w-[130px] h-[130px] rounded-full bg-gray-200 animate-pulse"></div>
        <div class="flex flex-col gap-2">
          <div class="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
          <div class="h-4 bg-gray-200 rounded w-36 animate-pulse"></div>
          <div class="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
      </div>

      <!-- Profile data -->
      <div v-else class="flex gap-5">
        <img :src="userProfile.avatar || ProfileImg" alt="photo de profil" class="w-[130px] h-[130px] rounded-full object-cover" />

        <div class="flex flex-col gap-2">
          <h3 class="text-[20px] font-semibold text-neutral-700">{{ userProfile.name || 'Nom non disponible' }}</h3>
          <p class=" text-neutral-700">{{ userProfile.email || 'Email non disponible' }}</p>

          <!-- Infos personnelles -->
          <p class="flex items-start gap-2">
            <img :src="phoneIcon" alt="Téléphone" class="w-[16px]" />
            {{ userProfile.telephone || userProfile.phone || 'Téléphone non renseigné' }}
          </p>
          <p class="flex items-start gap-2">
            <img :src="locationIcon" alt="Localisation" class="w-[16px]" />
            {{ userProfile.adresse || userProfile.address || 'Adresse non renseignée' }}
          </p>
          <p class="flex items-start gap-2">
            <img :src="calendarIcon" alt="Date de naissance" class="w-[16px]" />
            {{ formatBirthDate(userProfile.date_naissance || userProfile.birth_date) || 'Date de naissance non renseignée' }}
          </p>
        </div>
      </div>

      <!-- Bouton Ajouter un animal -->
      <button v-if="isClient" @click="addAnimal"
        class="bg-accent-500 text-white px-4 py-3 rounded-[14px] shadow-md flex items-center gap-2">
        <img :src="animalIcon" alt="icone patte" class="w-fit" />
        Ajouter un animal
      </button>
      <button v-else 
        class="bg-accent-500 text-white px-4 py-3 rounded-[14px] shadow-md flex items-center gap-2">
        <img :src="animalIcon" alt="icone patte" class="w-fit" />
        Ajouter un service
      </button>
    </div>

    <Alert :alert-img="alertIcon" alert-description="Information confidentielle 2">
      <div class="flex flex-col gap-4">
        <p class="text-[#222]">
          Ces informations sont confidentielles et accessibles uniquement par vous et les spécialistes vétérinaires.
        </p>
      </div>
    </Alert>

    <!-- Section Animaux -->
    <div v-if="isClient" class="flex flex-col gap-4">
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
        <div class="animal-card" v-for="animal in animals" :key="animal.id">
          <img :src="animal.photo || bigPaw" alt="photo animal" class="animal-image" />
          <p class="animal-name">{{ animal.nom }}</p>
          <p class="animal-details">{{ animal.espece?.nom }} - {{ animal.race?.nom }}</p>
        </div>
      </div>
    </div>
  </section>
  <AddAnimal v-if="showModal" @close="showModal = false" @animal-added="handleAnimalAdded" />

</template>

<script setup>
import ProfileImg from '@/assets/images/image1.svg'
import phoneIcon from '@/assets/icons/small-phone.svg'
import locationIcon from '@/assets/icons/small-marker.svg'
import calendarIcon from '@/assets/icons/small-calendar.svg'
import animalIcon from '@/assets/icons/animal.svg'
import alertIcon from '@/assets/icons/alertGreen.svg'
import petIcon from '@/assets/icons/animalGreen.svg'
import bigPaw from '@/assets/icons/big-paw.svg'
import editIcon from '@/assets/icons/edit-icon.svg'

import TitleDashboard from '@/components/common/TitleDashboard.vue'
import Alert from '@/components/common/Alert.vue'

import AddAnimal from '@/pages/Animals/components/AddAnimal.vue'
import { ref, onMounted } from 'vue'
import { auth } from '@/stores/auth.js'

const props = defineProps({
  isClient: {
    type: Boolean,
    default: true
  }
})

const animals = ref([])
const isLoading = ref(false)
const error = ref('')
const userProfile = ref({})
const isLoadingProfile = ref(false)
const profileError = ref('')

const showModal = ref(false)

const emit = defineEmits(['edit-profile']);

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

    console.log(response)
    
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

// Fetch user profile data
async function fetchUserProfile() {
  isLoadingProfile.value = true
  profileError.value = ''
  
  try {
    // Initialize with auth store data
    if (auth.user) {
      userProfile.value = { ...auth.user }
    }
    
    // Fetch additional profile data from the user API
    const token = localStorage.getItem('token')
    if (token) {
      try {
        // Use the correct endpoint from user API collection
        const response = await fetch('http://localhost:8000/api/v1/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          // Merge API data with auth store data
          userProfile.value = { 
            ...userProfile.value, 
            ...(data.data || data.user || data) 
          }
          console.log('Profile data fetched from /api/v1/me:', data)
        } else {
          console.log('Failed to fetch profile from /api/v1/me, using auth store data')
        }
      } catch (apiError) {
        console.log('Error fetching profile from API, using auth store data:', apiError)
      }
    }
    
    // Fallback: ensure we have basic data from auth store
    if (!userProfile.value.name && auth.user) {
      userProfile.value = { ...auth.user }
    }
    
  } catch (err) {
    console.error('Erreur lors de la récupération du profil:', err)
    profileError.value = 'Erreur lors de la récupération du profil'
    
    // Fallback to auth store data on error
    if (auth.user) {
      userProfile.value = { ...auth.user }
    }
  } finally {
    isLoadingProfile.value = false
  }
}

// Refresh profile data
async function refreshProfile() {
  await fetchUserProfile()
}

// Format birth date for display
function formatBirthDate(dateString) {
  if (!dateString) return null
  
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  } catch (error) {
    return dateString
  }
}

// Load animals and profile when component mounts
onMounted(() => {
  fetchUserProfile()
  
  if (props.isClient) {
    fetchUserAnimals()
  }
})

function addAnimal () {
  showModal.value = true;
}

// Refresh animals list after adding a new animal
function handleAnimalAdded() {
  showModal.value = false
  fetchUserAnimals()
}

</script>

<style scoped>
.font-league {
  font-family: 'League Spartan', sans-serif;
}

.confidential-text p {
  margin-left: -40px;
}

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
