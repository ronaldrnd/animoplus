<template>
  <BaseModal @close="$emit('close')" title="Détails de l'animal">
    <div class="animal-detail-content">
      <!-- Mode affichage -->
      <div v-if="!isEditing" class="view-mode">
        <div class="view-layout">
          <!-- Colonne gauche - Photo et nom -->
          <div class="left-column">
            <div class="animal-photo-section">
              <img :src="animal.photo || defaultAnimalImage" alt="Photo animal" class="animal-photo" />
            </div>
            <h2 class="animal-name">{{ animal.nom }}</h2>
            
            <!-- Boutons d'action -->
            <div class="action-buttons">
              <button @click="startEditing" class="btn-edit">
                <img :src="editIcon" alt="Modifier" class="icon" />
                Modifier
              </button>
              <button @click="confirmDelete" class="btn-delete">
                Supprimer
              </button>
            </div>
          </div>

          <!-- Colonne droite - Informations -->
          <div class="right-column">
            <div class="info-grid">
              <div class="info-item">
                <label>Espèce</label>
                <span>{{ animal.espece?.nom || 'Non spécifiée' }}</span>
              </div>
              
              <div class="info-item">
                <label>Race</label>
                <span>{{ animal.race?.nom || 'Non spécifiée' }}</span>
              </div>
              
              <div class="info-item">
                <label>Sexe</label>
                <span>{{ animal.sexe === 'M' ? 'Mâle' : animal.sexe === 'F' ? 'Femelle' : 'Non spécifié' }}</span>
              </div>
              
              <div class="info-item">
                <label>Date de naissance</label>
                <span>{{ formatDate(animal.date_naissance) }}</span>
              </div>
              
              <div class="info-item">
                <label>Couleur</label>
                <span>{{ animal.couleur || 'Non spécifiée' }}</span>
              </div>
              
              <div class="info-item">
                <label>Poids</label>
                <span>{{ animal.poids ? animal.poids + ' kg' : 'Non spécifié' }}</span>
              </div>
              
              <div class="info-item">
                <label>Taille</label>
                <span>{{ animal.taille ? animal.taille + ' cm' : 'Non spécifiée' }}</span>
              </div>
              
              <div class="info-item">
                <label>Stérilisé</label>
                <span>{{ animal.sterilise ? 'Oui' : 'Non' }}</span>
              </div>
              
              <div class="info-item" v-if="animal.numero_puce">
                <label>Numéro de puce</label>
                <span>{{ animal.numero_puce }}</span>
              </div>
              
              <div class="info-item" v-if="animal.numero_tatouage">
                <label>Numéro de tatouage</label>
                <span>{{ animal.numero_tatouage }}</span>
              </div>
            </div>
            
            <div v-if="animal.description" class="description-section">
              <label>Description</label>
              <p>{{ animal.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mode édition -->
      <div v-else class="edit-mode">
        <form @submit.prevent="saveChanges" class="edit-form">
          <div class="form-grid">
            <div class="form-column">
              <label>
                Nom de l'animal
                <input v-model="editForm.nom" type="text" required />
              </label>

              <label>
                Espèce
                <select v-model="editForm.espece_id" required>
                  <option value="" disabled>Sélectionner l'espèce</option>
                  <option v-for="espece in species" :key="espece.id" :value="espece.id">
                    {{ espece.nom }}
                  </option>
                </select>
              </label>

              <label>
                Race
                <select v-model="editForm.race_id" required>
                  <option value="" disabled>Sélectionner la race</option>
                  <option v-for="race in filteredBreeds" :key="race.id" :value="race.id">
                    {{ race.nom }}
                  </option>
                </select>
              </label>

              <label>
                Sexe
                <select v-model="editForm.sexe" required>
                  <option value="" disabled>Sélectionner le sexe</option>
                  <option value="M">Mâle</option>
                  <option value="F">Femelle</option>
                </select>
              </label>

              <label>
                Date de naissance
                <input v-model="editForm.date_naissance" type="date" />
              </label>
            </div>

            <div class="form-column">
              <label>
                Couleur
                <input v-model="editForm.couleur" type="text" />
              </label>

              <label>
                Poids (kg)
                <input v-model="editForm.poids" type="number" step="0.1" />
              </label>

              <label>
                Taille (cm)
                <input v-model="editForm.taille" type="number" />
              </label>

              <label>
                Numéro de puce
                <input v-model="editForm.numero_puce" type="text" />
              </label>

              <label>
                Numéro de tatouage
                <input v-model="editForm.numero_tatouage" type="text" />
              </label>
            </div>
          </div>

          <div class="checkbox-container">
            <input v-model="editForm.sterilise" type="checkbox" id="sterilise-edit" />
            <label for="sterilise-edit">Animal stérilisé</label>
          </div>

          <label class="description-label">
            Description
            <textarea v-model="editForm.description" rows="3" placeholder="Description de l'animal"></textarea>
          </label>

          <!-- Boutons de sauvegarde -->
          <div class="form-buttons">
            <button type="button" @click="cancelEditing" class="btn-cancel">
              Annuler
            </button>
            <button type="submit" :disabled="isLoading" class="btn-submit">
              <span v-if="isLoading">Sauvegarde...</span>
              <span v-else>Sauvegarder</span>
            </button>
          </div>
        </form>
      </div>

      <!-- Message d'erreur -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import BaseModal from '@/components/common/BaseModal.vue'
import editIcon from '@/assets/icons/edit-icon.svg'
import defaultAnimalImage from '@/assets/icons/big-paw.svg'

const props = defineProps({
  animal: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'animal-updated', 'animal-deleted'])

const isEditing = ref(false)
const isLoading = ref(false)
const error = ref('')
const species = ref([])
const breeds = ref([])

// Form data for editing
const editForm = ref({
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

// Filtered breeds based on selected species
const filteredBreeds = computed(() => {
  if (!editForm.value.espece_id) return breeds.value
  return breeds.value.filter(breed => breed.espece_id == editForm.value.espece_id)
})

// Watch for species change to reset race
watch(() => editForm.value.espece_id, (newSpeciesId) => {
  if (newSpeciesId) {
    editForm.value.race_id = ''
  }
})

// Format date for display
function formatDate(dateString) {
  if (!dateString) return 'Non spécifiée'
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
}

// Start editing mode
function startEditing() {
  isEditing.value = true
  // Copy animal data to edit form
  editForm.value = {
    nom: props.animal.nom || '',
    espece_id: props.animal.espece_id || '',
    race_id: props.animal.race_id || '',
    sexe: props.animal.sexe || '',
    date_naissance: props.animal.date_naissance || '',
    couleur: props.animal.couleur || '',
    poids: props.animal.poids || '',
    taille: props.animal.taille || '',
    sterilise: props.animal.sterilise || false,
    numero_puce: props.animal.numero_puce || '',
    numero_tatouage: props.animal.numero_tatouage || '',
    description: props.animal.description || ''
  }
}

// Cancel editing
function cancelEditing() {
  isEditing.value = false
  error.value = ''
}

// Save changes
async function saveChanges() {
  isLoading.value = true
  error.value = ''
  
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8000/api/v1/animals/${props.animal.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(editForm.value)
    })
    
    if (response.ok) {
      const updatedAnimal = await response.json()
      // Update the local animal data to reflect changes immediately
      Object.assign(props.animal, updatedAnimal.data || updatedAnimal)
      emit('animal-updated', updatedAnimal.data || updatedAnimal)
      isEditing.value = false
    } else {
      const errorData = await response.json()
      error.value = errorData.message || 'Erreur lors de la mise à jour'
    }
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Erreur de connexion'
  } finally {
    isLoading.value = false
  }
}

// Confirm delete
function confirmDelete() {
  if (confirm(`Êtes-vous sûr de vouloir supprimer ${props.animal.nom} ?`)) {
    deleteAnimal()
  }
}

// Delete animal
async function deleteAnimal() {
  isLoading.value = true
  error.value = ''
  
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8000/api/v1/animals/${props.animal.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      emit('animal-deleted', props.animal.id)
    } else {
      const errorData = await response.json()
      error.value = errorData.message || 'Erreur lors de la suppression'
    }
  } catch (err) {
    console.error('Erreur:', err)
    error.value = 'Erreur de connexion'
  } finally {
    isLoading.value = false
  }
}

// Fetch species and breeds
async function fetchSpeciesAndBreeds() {
  try {
    const token = localStorage.getItem('token')
    
    // Fetch species
    const speciesResponse = await fetch('http://localhost:8000/api/v1/especes', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (speciesResponse.ok) {
      const speciesData = await speciesResponse.json()
      species.value = speciesData.data || speciesData
    }
    
    // Fetch breeds
    const breedsResponse = await fetch('http://localhost:8000/api/v1/races', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (breedsResponse.ok) {
      const breedsData = await breedsResponse.json()
      breeds.value = breedsData.data || breedsData
    }
  } catch (err) {
    console.error('Erreur lors du chargement des données:', err)
  }
}

onMounted(() => {
  fetchSpeciesAndBreeds()
})
</script>

<style scoped>
.animal-detail-content {
  max-width: 800px;
  margin: 0 auto;
}

.view-mode {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.view-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 32px;
  align-items: start;
}

.left-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.animal-photo-section {
  text-align: center;
}

.animal-photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.animal-name {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin: 0;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item label {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
}

.info-item span {
  font-size: 14px;
  color: #1f2937;
}

.description-section {
  margin-top: 16px;
}

.description-section label {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  display: block;
  margin-bottom: 8px;
}

.description-section p {
  font-size: 14px;
  color: #1f2937;
  line-height: 1.5;
}

.action-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  width: 100%;
}

.btn-edit, .btn-delete {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-edit {
  background-color: #3b82f6;
  color: white;
}

.btn-edit:hover {
  background-color: #2563eb;
}

.btn-delete {
  background-color: #ef4444;
  color: white;
}

.btn-delete:hover {
  background-color: #dc2626;
}

.icon {
  width: 16px;
  height: 16px;
}

/* Edit mode styles */
.edit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-column label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
}

.form-column input,
.form-column select {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
}

.form-column input:focus,
.form-column select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.description-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
}

.description-label textarea {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
  resize: vertical;
}

.form-buttons {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn-cancel, .btn-submit {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel {
  background-color: #f3f4f6;
  color: #374151;
}

.btn-cancel:hover {
  background-color: #e5e7eb;
}

.btn-submit {
  background-color: #3b82f6;
  color: white;
}

.btn-submit:hover:not(:disabled) {
  background-color: #2563eb;
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.error-message {
  background-color: #fef2f2;
  color: #dc2626;
  padding: 12px;
  border-radius: 6px;
  margin-top: 16px;
  text-align: center;
}
</style>
