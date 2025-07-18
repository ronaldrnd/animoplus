<template>
  <!-- Wrapper général de la page des tâches -->
  <div class="bg-white border border-[#e5e7eb] rounded-xl p-6 w-full font-['League_Spartan']">
    <!-- Header : Titre + bouton d'ajout -->
    <div class="flex justify-between items-center">
      <h2 class="text-[#2e2e30] text-2xl font-bold">Mes tâches</h2>
      <button
        class="bg-[#8c3d20] text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center cursor-pointer hover:opacity-90 transition"
        type="button"
      >
        <span class="font-bold mr-1 text-lg">+</span>
        Ajouter une tâche
      </button>
    </div>

    <!-- Séparateur -->
    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <!-- Liste des tâches -->
    <ul class="list-none p-0 my-4">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="flex justify-between items-center p-3 border border-[#e5e7eb] rounded-lg bg-white mb-3 shadow-sm"
      >
        <!-- Checkbox + titre de la tâche -->
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="task.done"
            class="custom-checkbox"
          />
          <span class="ml-2">{{ task.title }}</span>
        </label>
        <!-- Actions (Modifier, Supprimer) -->
        <div class="flex gap-2">
          <button
            v-if="!task.done"
            class="bg-green-100 text-[#6cc447] font-medium rounded-xl px-2 py-1 text-sm cursor-pointer transition hover:bg-green-200"
            type="button"
          >
            Modifier
          </button>
          <button
            class="bg-red-100 text-[#ef5350] font-medium rounded-xl px-2 py-1 text-sm cursor-pointer transition hover:bg-red-200"
            type="button"
          >
            Supprimer
          </button>
        </div>
      </li>
    </ul>

    <!-- Formulaire d'ajout de tâche -->
    <div class="mt-6">
      <h3 class="text-black text-lg font-bold mb-5">Nouvelle tâche</h3>
      <label class="block text-[#4b5563] text-base font-medium mb-1">Titre</label>
      <input
        type="text"
        placeholder="Ex: Acheter des compresses"
        class="w-full p-2.5 border border-[#ddd] rounded-lg mb-2 text-base focus:outline-none"
      />
      <label class="block text-[#4b5563] text-base font-medium mb-1">
        Échéance
        <!-- Bloc date custom avec icône -->
        <div class="flex items-center gap-2 border border-[#f3f4f6] rounded-xl bg-white px-4 py-2 mt-2 mb-4 min-h-[40px]">
          <!-- Icone SVG grisée -->
          <img
            :src="calendarIcon"
            class="date-icon w-[18px] h-[18px] opacity-70 mr-2"
            alt="date"
          />
          <input
            type="text"
            v-model="newTask.date"
            class="flex-1 border-none outline-none bg-transparent text-[#6b7280] text-[15px] font-normal p-0 m-0 min-w-0 placeholder:text-[#9ca3af] placeholder:font-normal"
            placeholder="19 January 2025"
            readonly
          />
        </div>
      </label>
      <!-- Boutons de validation du formulaire -->
      <div class="flex gap-3">
        <button class="bg-transparent border-none font-bold text-sm cursor-pointer" type="button">Annuler</button>
        <button class="bg-[#43a047] text-white border-none px-4 py-2 rounded-lg font-semibold text-sm cursor-pointer" type="button">
          Ajouter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import calendarIcon from '@/assets/icons/small-calendar.svg'
import { ref } from 'vue'
const tasks = ref([
  { title: 'Appeler le fournisseur', done: false },
  { title: 'Envoyer les factures', done: true },
  { title: 'Appeler le fournisseur', done: true },
  { title: 'Appeler le fournisseur', done: true }
])
const newTask = ref({
  title: '',
  date: '19 January 2025'
})
</script>

<style scoped>
.custom-checkbox {
  width: 20px;
  height: 20px;
  appearance: none;
  border: 1.5px solid #000;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
}
.custom-checkbox:checked::after {
  content: "✔";
  color: #000;
  font-size: 12px;
  position: absolute;
  top: 1px;
  left: 4px;
}

/* Griser l'icône SVG */
.date-icon {
  filter: grayscale(1) brightness(0.5);
}
</style>
