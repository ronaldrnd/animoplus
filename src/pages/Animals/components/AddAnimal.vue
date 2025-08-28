<template>
  <BaseModal title="Information sur l’animal" @close="showModal = false" :footer="true">
    <form @submit.prevent="handleSubmit" class="form-content">
      <div class="form-grid">
        <!-- Colonne gauche -->
        <div class="form-column">
          <label>
            Nom
            <input v-model="form.nom" type="text" placeholder="Entrer le nom" required />
          </label>
      
          <label>
            Espèce
            <select v-model="form.espece_id" required>
              <option value="" disabled>Sélectionner une espèce</option>
              <option v-for="espece in species" :key="espece.id" :value="espece.id">
                {{ espece.nom }}
              </option>
            </select>
          </label>
      
          <label>
            Race
            <select v-model="form.race_id" :disabled="!form.espece_id" required>
              <option value="" disabled>Sélectionner une race</option>
              <option v-for="race in filteredBreeds" :key="race.id" :value="race.id">
                {{ race.nom }}
              </option>
            </select>
          </label>

          <label>
            Sexe
            <select v-model="form.sexe" required>
              <option value="" disabled>Sélectionner le sexe</option>
              <option value="M">Mâle</option>
              <option value="F">Femelle</option>
            </select>
          </label>

          <label>
            Date de naissance
            <input
              type="date"
              v-model="form.date_naissance"
              @change="updateFormattedDate"
              class="date-input-simple"
              placeholder="Sélectionner une date"
            />
          </label>

          <label>
            Couleur
            <input v-model="form.couleur" type="text" placeholder="Couleur de l'animal" />
          </label>
        </div>

        <!-- Colonne droite -->
        <div class="form-column">
          <label>
            Poids (kg)
            <input v-model="form.poids" type="number" step="0.1" placeholder="Poids en kg" />
          </label>

          <label>
            Taille (cm)
            <input v-model="form.taille" type="number" step="0.1" placeholder="Taille en cm" />
          </label>

          <label>
            Numéro de puce
            <input v-model="form.numero_puce" type="text" placeholder="Numéro de puce électronique" />
          </label>

          <label>
            Numéro de tatouage
            <input v-model="form.numero_tatouage" type="text" placeholder="Numéro de tatouage" />
          </label>

          <div class="checkbox-container">
            <input v-model="form.sterilise" type="checkbox" id="sterilise" />
            <label for="sterilise">Animal stérilisé</label>
          </div>
        </div>
      </div>

      <!-- Section historique médical (pleine largeur) -->
      <div class="medical-history">
        <img :src="DocMedical" class="icon" alt="historique" />
        <span>Historique médical</span>
      </div>
      
      <textarea v-model="form.description" placeholder="Écrire ici ..."></textarea>

      <!-- Message d'erreur -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <!-- Boutons -->
      <div class="form-buttons">
        <button type="button" @click="$emit('close')" class="btn-cancel">
          Annuler
        </button>
        <button type="submit" :disabled="isLoading" class="btn-submit">
          <span v-if="isLoading">Création...</span>
          <span v-else>Créer l'animal</span>
        </button>
      </div>
  
    </form>
  </BaseModal>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import BaseModal from '@/components/common/BaseModal.vue';
import calendarIcon from '@/assets/icons/small-calendar.svg'
import DocMedical from '@/assets/icons/DocMedical.svg'

const props = defineProps({
    close: {
        type: Boolean,
        default: false
    }
});

// Form data
const form = ref({
  nom: '',
  espece_id: '',
  race_id: '',
  sexe: '',
  date_naissance: '',
  couleur: '',
  poids: '',
  taille: '',
  sterilise: false,
  numero_puce: '',
  numero_tatouage: '',
  description: ''
})

const birthDate = ref('')
const species = ref([])
const breeds = ref([])
const filteredBreeds = ref([])
const isLoading = ref(false)
const error = ref('')

// Fetch species from API
async function fetchSpecies() {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:8000/api/v1/especes', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      species.value = data.data || data
    } else {
      console.error('Failed to fetch species')
    }
  } catch (err) {
    console.error('Error fetching species:', err)
  }
}

// Fetch breeds from API
async function fetchBreeds() {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:8000/api/v1/races', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      breeds.value = data.data || data
      filteredBreeds.value = breeds.value
    } else {
      console.error('Failed to fetch breeds')
    }
  } catch (err) {
    console.error('Error fetching breeds:', err)
  }
}

// Filter breeds based on selected species
watch(() => form.value.espece_id, (newSpeciesId) => {
  if (newSpeciesId) {
    filteredBreeds.value = breeds.value.filter(breed => breed.espece_id == newSpeciesId)
    form.value.race_id = '' // Reset race selection
  } else {
    filteredBreeds.value = breeds.value
  }
})

function updateFormattedDate(e) {
  const dateValue = e.target ? e.target.value : e
  if (dateValue) {
    const date = new Date(dateValue)
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    birthDate.value = date.toLocaleDateString('fr-FR', options)
  }
}

// Submit form
async function handleSubmit() {
  isLoading.value = true
  error.value = ''
  
  try {
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:8000/api/v1/animals', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        nom: form.value.nom,
        espece_id: parseInt(form.value.espece_id),
        race_id: parseInt(form.value.race_id),
        sexe: form.value.sexe,
        date_naissance: form.value.date_naissance,
        couleur: form.value.couleur,
        poids: parseFloat(form.value.poids) || null,
        taille: parseFloat(form.value.taille) || null,
        sterilise: form.value.sterilise,
        numero_puce: form.value.numero_puce,
        numero_tatouage: form.value.numero_tatouage,
        description: form.value.description
      })
    })
    
    if (response.ok) {
      // Success - close modal and refresh parent
      emit('close')
      emit('animal-created')
    } else {
      const data = await response.json()
      error.value = data.message || 'Erreur lors de la création de l\'animal'
    }
  } catch (err) {
    console.error('Error creating animal:', err)
    error.value = 'Erreur de connexion au serveur'
  } finally {
    isLoading.value = false
  }
}

const emit = defineEmits(['close', 'animal-created'])

onMounted(() => {
  fetchSpecies()
  fetchBreeds()
})
</script>

<style scoped>
/* Formulaire */
.form-content {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Grid layout pour deux colonnes */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

label {
  color: #4B5563;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

input,
select,
textarea {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
  font-size: 13px;
}

textarea {
  resize: vertical;
  min-height: 60px;
}

/* Historique médical */
.medical-history {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-top: 8px;
  margin-bottom: 4px;
}

/* Icônes */
.icon {
  width: 18px;
  height: 18px;
  display: block;
  object-fit: contain;
}

/* Date input simple */
.date-input-simple {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 13px;
  background: white;
  cursor: pointer;
}

.date-input-simple:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

/* Checkbox container */
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
}

.checkbox-container label {
  margin: 0;
  font-size: 13px;
  cursor: pointer;
}

/* Error message */
.error-message {
  color: #dc2626;
  font-size: 12px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  padding: 8px;
  margin: 8px 0;
}

/* Form buttons */
.form-buttons {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  justify-content: flex-end;
}

.btn-cancel {
  padding: 8px 16px;
  border: 1px solid #d1d5db;
  background-color: white;
  color: #374151;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.2s;
}

.btn-cancel:hover {
  background-color: #f9fafb;
}

.btn-submit {
  padding: 8px 16px;
  border: none;
  background-color: #059669;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.2s;
}

.btn-submit:hover:not(:disabled) {
  background-color: #047857;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Disabled select styling */
select:disabled {
  background-color: #f3f4f6;
  color: #9ca3af;
  cursor: not-allowed;
}
</style>
