<template>
  <div class="bg-white rounded-[10px] p-6 border border-[rgba(197,197,197,0.5)] mt-[25px]">
    <!-- Barre retour + titre -->
    <div class="flex items-center gap-2 text-sm mb-2.5">
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <span class="text-[#333] font-normal cursor-pointer">Mes animaux</span>
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <strong class="text-black font-bold">Trouver un éleveur</strong>
    </div>

    <!-- Ligne de séparation -->
    <hr class="border-t border-[rgba(0,0,0,0.1)] mb-4" />

    <!-- Étapes de navigation -->
    <div class="flex flex-wrap items-center gap-2.5 text-sm font-medium mb-5">
      <!-- Étape 1 : Active -->
      <div class="flex items-center gap-1.5 text-green-700 font-bold">
        <span>Sélection d’espèce</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>

      <!-- Étape 2 : Active -->
      <div class="flex items-center gap-1.5 text-green-700 font-bold">
        <span>Sélection de race</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>

      <!-- Étape 3 -->
      <div class="flex items-center gap-1.5 text-[#666]">
        <span>Où voulez-vous chercher ?</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>

      <!-- Étape 4 -->
      <div class="flex items-center gap-1.5 text-[#666]">
        <span>Trouvez votre éleveur</span>
      </div>
    </div>

    <!-- Grille des races -->
    <div class="grid grid-cols-4 gap-5">
      <div
        class="border border-[rgba(0,0,0,0.1)] rounded-[10px] bg-white p-3 text-center shadow-sm transition-transform duration-200 hover:-translate-y-[2px]"
        v-for="(item, index) in races"
        :key="index"
      >
        <!-- Icône de race -->
        <img
          :src="pawIcon"
          alt="icone patte"
          class="w-[95px] h-[90px] object-contain mx-auto opacity-40"
        />
        <!-- Nom de la race -->
        <p class="mt-2.5 text-[13px] text-[#444] font-medium">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowIcon from '@/assets/icons/arrow-left.svg'
import markerIcon from '@/assets/layers/marker.svg'
import pawIcon from '@/assets/icons/paw-gray.svg'

const races = [
  'Chien', 'Chat', 'Oiseaux', 'Rongeurs',
  'Lapin', 'Reptiles', 'Poisson', 'Cheval',
  'Lapin', 'Reptiles', 'Poisson', 'Cheval',
  'Lapin', 'Reptiles', 'Poisson', 'Cheval'
]
</script>

<style scoped>

</style>
