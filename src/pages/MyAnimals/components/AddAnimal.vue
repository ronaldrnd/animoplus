<template>
  <BaseModal title="Information sur l’animal" @close="showModal = false" :footer="true">
    <form class="form-content">
      <label>
        Nom
        <input type="text" placeholder="Entrer le nom" />
      </label>
  
      <label>
        Espèce
        <select>
          <option disabled selected>Sélectionner une espèce</option>
        </select>
      </label>
  
      <label>
        Race
        <select>
          <option disabled selected>Sélectionner une race</option>
        </select>
      </label>
  
      <div class="medical-history">
        <img :src="DocMedical" class="icon" alt="historique" />
        <span>Historique médical</span>
      </div>
  
  
      <textarea placeholder="Écrire ici ..."></textarea>
  
      <label>
        Poids (kg)
        <input type="number" placeholder="Poids en kg" />
      </label>
  
      <label>
        Taille (cm)
        <input type="number" placeholder="Taille en cm" />
      </label>
  
      <label>
        Date de naissance
        <div class="custom-date-input" @click="hiddenDate.click()">
          <img :src="calendarIcon" class="icon" alt="date" />
          <input
            type="text"
            v-model="birthDate"
            placeholder="19 January 2025"
                      
          />
        </div>
      </label>
  
      <input
        type="date"
        ref="hiddenDate"
        class="hidden-date-input"
        @input="updateFormattedDate"
      />
    </form>
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue'
import BaseModal from '@/components/common/BaseModal.vue';
import calendarIcon from '@/assets/icons/small-calendar.svg'
import DocMedical from '@/assets/icons/DocMedical.svg'


const props = defineProps({
    close: {
        type: Boolean,
        default: false
    }
});

const birthDate = ref('')
const hiddenDate = ref(null)

function updateFormattedDate(e) {
  const date = new Date(e.target.value)
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  birthDate.value = date.toLocaleDateString('en-US', options)
}
</script>

<style scoped>
/* Formulaire */
.form-content {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

/* Champ date */
.custom-date-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  gap: 8px;
  cursor: pointer;
}

.custom-date-input .icon {
  width: 16px;
  height: 16px;
  margin-left: 10px;
  color: #4B5563;
}

.custom-date-input input {
  border: none;
  outline: none;
  font-size: 13px;
  flex: 1;
  background: transparent;
  
}

/* Masque le vrai champ */
.hidden-date-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  height: 0;
}
</style>
