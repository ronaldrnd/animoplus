<template>
  <div class="bg-white rounded-[10px] p-6 border border-[rgba(197,197,197,0.5)] mt-[25px]">
    <!-- Top bar avec icônes retour et titre -->
    <div class="flex items-center gap-2 text-sm mb-2.5">
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <span class="text-[#333] font-normal cursor-pointer">Mes animaux</span>
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <strong class="text-black font-bold">Trouver un éleveur</strong>
    </div>

    <!-- Trait de séparation -->
    <hr class="border-t border-[rgba(0,0,0,0.1)] mb-4" />

    <!-- Barre de navigation par étape -->
    <div class="flex flex-wrap items-center gap-2.5 text-sm font-medium mb-5">
      <!-- Étape active -->
      <div class="flex items-center gap-1.5 text-green-700 font-bold">
        <span>Sélection d’espèce</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>

      <!-- Étapes suivantes -->
      <div class="flex items-center gap-1.5 text-[#666]">
        <span>Sélection de race</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>

      <div class="flex items-center gap-1.5 text-[#666]">
        <span>Où voulez-vous chercher ?</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>

      <div class="flex items-center gap-1.5 text-[#666]">
        <span>Trouvez votre éleveur</span>
      </div>
    </div>

    <!-- Grille d'espèces -->
    <div class="grid grid-cols-4 gap-5">
      <div
        class="border border-[rgba(0,0,0,0.1)] rounded-[10px] overflow-hidden text-center p-2 bg-white shadow-sm transition-transform duration-200 w-[200px] hover:-translate-y-[3px]"
        v-for="(item, index) in species"
        :key="index"
      >
        <img :src="item.image" :alt="item.name" class="w-full h-[90px] object-cover rounded-md" />
        <p class="text-[13px] font-medium mt-1.5 text-[#333]">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowIcon from '@/assets/icons/arrow-left.svg'
import markerIcon from '@/assets/layers/marker.svg'

const species = [
  { name: 'Chien', image: new URL('@/assets/images/dog.svg', import.meta.url).href },
  { name: 'Chat', image: new URL('@/assets/images/cat.svg', import.meta.url).href },
  { name: 'Oiseaux', image: new URL('@/assets/images/bird.svg', import.meta.url).href },
  { name: 'Rongeurs', image: new URL('@/assets/images/rodent.svg', import.meta.url).href },
  { name: 'Lapin', image: new URL('@/assets/images/rabbit.svg', import.meta.url).href },
  { name: 'Reptiles', image: new URL('@/assets/images/reptile.svg', import.meta.url).href },
  { name: 'Poisson', image: new URL('@/assets/images/fish.svg', import.meta.url).href },
  { name: 'Cheval', image: new URL('@/assets/images/horse.svg', import.meta.url).href },
]
</script>


<style scoped>

</style>
