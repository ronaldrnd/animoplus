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
      <div class="flex items-center gap-1.5 text-green-700 font-bold">
        <span>Sélection d’espèce</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>
      <div class="flex items-center gap-1.5 text-green-700 font-bold">
        <span>Sélection de race</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>
      <div class="flex items-center gap-1.5 text-green-700 font-bold">
        <span>Où voulez-vous chercher ?</span>
        <img :src="markerIcon" alt="marqueur" class="w-[25px]" />
      </div>
      <div class="flex items-center gap-1.5 text-green-700 font-bold">
        <span>Trouvez votre éleveur</span>
      </div>
    </div>

    <!-- Distance -->
    <p class="text-center text-sm font-medium mb-5">Distance maximale : 30 Km</p>

    <!-- Grille des éleveurs -->
    <div class="grid grid-cols-4 gap-5">
      <div
        class="bg-white rounded-[10px] p-3 border border-[rgba(0,0,0,0.1)] shadow-sm"
        v-for="(breeder, index) in breeders"
        :key="index"
      >
        <!-- Image de l'éleveur -->
        <img
          :src="breeder.image"
          alt="éleveur"
          class="w-full h-[180px] object-cover rounded-[8px]"
        />

        <!-- Nom + âge -->
        <p class="mt-2.5 text-[14px] font-bold text-[#333]">
          {{ breeder.name }}, {{ breeder.age }}
        </p>

        <!-- Description -->
        <p class="text-[11px] text-[#666] mt-1.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowIcon from '@/assets/icons/arrow-left.svg'
import markerIcon from '@/assets/layers/marker.svg'

// Exemple d'éleveurs
const breeders = [
  { name: 'Aleksandra', age: 29, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Aleksandra', age: 29, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Dior', age: 19, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Marie', age: 33, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Dior', age: 19, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Marine', age: 21, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Marine', age: 21, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Aleksandra', age: 29, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Aleksandra', age: 29, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Marie', age: 33, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Marie', age: 33, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
  { name: 'Marie', age: 33, image: new URL('@/assets/images/image1.svg', import.meta.url).href },
]
</script>

<style scoped>

</style>
