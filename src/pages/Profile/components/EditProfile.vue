<template>
  <div class="flex flex-col gap-4 bg-white rounded-[10px] p-6 border border-neutral-200">
    <div class="flex items-center gap-2">
      <span class="cursor-pointer" @click="$emit('backToList')">Mon profil 8</span>
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <strong class="text-black font-bold">Modifier mon profil</strong>
    </div>

    <hr />

    <div class="flex justify-between items-start mb-2">
      <div class="flex gap-5 items-center mt-2 mb-6">
        <img :src="ProfileImg" alt="photo de profil" class="w-[90px] h-[90px] rounded-full object-cover" />

        <div>
          <label class="border border-[#E5E7EB] rounded-[9px] px-3 py-1 flex items-center gap-2 cursor-pointer text-[#4B5563]">
            <img :src="editIcon" alt="edit" />
            Importer une image
            <input type="file" accept="image/*" hidden />
          </label>
          <p class="text-[12px] text-[#666] mt-1">L’image doit être moins de 5Ko</p>
        </div>
      </div>

      <!-- Bouton enregistrer -->
      <button 
        @click="updateProfile" 
        :disabled="isSaving || isLoading"
        class="bg-accent-500 text-white px-6 py-3 rounded-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSaving ? 'Enregistrement...' : 'Enregistrer' }}
      </button>
    </div>

    <!-- Messages d'erreur et de succès -->
    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {{ error }}
    </div>
    <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      {{ successMessage }}
    </div>

    <!-- Loading state -->
    <div v-if="isLoading" class="flex items-center justify-center py-8">
      <div class="text-gray-500">Chargement du profil...</div>
    </div>

    <!-- Formulaire -->
    <form v-else @submit.prevent="updateProfile" class="flex flex-col gap-4 mb-6 text-[#4B5563]">
      <label class="flex flex-col gap-1 font-medium">
        Nom
        <input 
          type="text" 
          v-model="formData.name"
          :disabled="isSaving"
          class="px-2 py-2 border border-neutral-200 rounded text-[14px] text-neutral-700 font-bold outline-none disabled:bg-gray-100" 
        />
      </label>

      <label class="flex flex-col gap-1 font-medium">
        Email
        <input 
          type="email" 
          v-model="formData.email"
          disabled
          class="px-2 py-2 border border-neutral-200 rounded text-[14px] text-neutral-400 font-bold outline-none bg-gray-100" 
        />
        <p class="text-xs text-gray-500">L'email ne peut pas être modifié</p>
      </label>

      <label class="flex flex-col gap-1 font-medium">
        Téléphone
        <input 
          type="tel" 
          v-model="formData.telephone"
          :disabled="isSaving"
          class="px-2 py-2 border border-neutral-200 rounded text-[14px] text-neutral-700 font-bold outline-none disabled:bg-gray-100" 
        />
      </label>

      <label class="flex flex-col gap-1 font-medium">
        Adresse
        <input 
          type="text" 
          v-model="formData.adresse"
          :disabled="isSaving"
          class="px-2 py-2 border border-neutral-200 rounded text-[14px] text-neutral-700 font-bold outline-none disabled:bg-gray-100" 
        />
      </label>

      <label class="flex flex-col gap-1 font-medium">
        Date de naissance
        <div class="flex items-center border border-[#E5E7EB] rounded bg-white pl-3 h-[42px]">
          <img :src="calendarIcon" alt="calendrier" class="w-[16px] h-[16px]" />
          <input 
            type="date" 
            v-model="formData.date_naissance"
            :disabled="isSaving"
            class="flex-1 border-none outline-none text-[14px] pl-2 text-[#374151] font-league bg-transparent h-full disabled:bg-gray-100" 
          />
        </div>
      </label>
    </form>

    <Alert :alert-img="alertIcon" alert-description="Information confidentielle">
      <div class="flex flex-col gap-4">
        <p class="text-[#222]">
          Ces informations sont confidentielles et accessibles uniquement par vous et les spécialistes vétérinaires.
        </p>
      </div>
    </Alert>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { auth } from '@/stores/auth.js'
import ProfileImg from '@/assets/images/image1.svg'
import editIcon from '@/assets/icons/edit.svg'
import calendarIcon from '@/assets/icons/small-calendar.svg'
import alertIcon from '@/assets/icons/alertGreen.svg'
import arrowIcon from '@/assets/icons/arrow-left.svg'
import Alert from '@/components/common/Alert.vue'

const emit = defineEmits(['backToList', 'profile-updated']);

// Form data
const formData = ref({
  name: '',
  email: '',
  telephone: '',
  adresse: '',
  date_naissance: ''
})

const isLoading = ref(false)
const isSaving = ref(false)
const error = ref('')
const successMessage = ref('')

// Fetch current user profile data
async function fetchUserProfile() {
  isLoading.value = true
  error.value = ''
  
  try {
    // Initialize with auth store data
    if (auth.user) {
      formData.value = {
        name: auth.user.name || '',
        email: auth.user.email || '',
        telephone: auth.user.telephone || auth.user.phone || '',
        adresse: auth.user.adresse || auth.user.address || '',
        date_naissance: formatDateForInput(auth.user.date_naissance || auth.user.birth_date) || ''
      }
    }
    
    // Fetch latest data from API
    const token = localStorage.getItem('token')
    if (token) {
      const response = await fetch('http://localhost:8000/api/v1/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        const userData = data.data || data.user || data
        
        formData.value = {
          name: userData.name || '',
          email: userData.email || '',
          telephone: userData.telephone || userData.phone || '',
          adresse: userData.adresse || userData.address || '',
          date_naissance: formatDateForInput(userData.date_naissance || userData.birth_date) || ''
        }
      }
    }
  } catch (err) {
    console.error('Error fetching profile:', err)
    error.value = 'Erreur lors du chargement du profil'
  } finally {
    isLoading.value = false
  }
}

// Update user profile
async function updateProfile() {
  if (!auth.user?.id) {
    error.value = 'Utilisateur non authentifié'
    return
  }
  
  isSaving.value = true
  error.value = ''
  successMessage.value = ''
  
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      error.value = 'Token d\'authentification manquant'
      return
    }
    
    const updateData = {
      name: formData.value.name,
      telephone: formData.value.telephone,
      adresse: formData.value.adresse,
      date_naissance: formData.value.date_naissance
    }
    
    const response = await fetch(`http://localhost:8000/api/v1/users/${auth.user.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
    
    if (response.ok) {
      const data = await response.json()
      const updatedUser = data.data || data.user || data
      
      // Update auth store with new data
      auth.user = { ...auth.user, ...updatedUser }
      
      successMessage.value = 'Profil mis à jour avec succès!'
      emit('profile-updated', updatedUser)
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
      
    } else {
      const errorData = await response.json()
      error.value = errorData.message || 'Erreur lors de la mise à jour du profil'
    }
  } catch (err) {
    console.error('Error updating profile:', err)
    error.value = 'Erreur de connexion lors de la mise à jour'
  } finally {
    isSaving.value = false
  }
}

// Format date for input field (YYYY-MM-DD)
function formatDateForInput(dateString) {
  if (!dateString) return ''
  
  try {
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
  } catch (error) {
    return dateString
  }
}

// Load profile data when component mounts
onMounted(() => {
  fetchUserProfile()
})

</script>

<style scoped>

.font-league {
  font-family: 'League Spartan', sans-serif;
}

.confidential-text p {
  margin-left: -40px;
}
</style>
