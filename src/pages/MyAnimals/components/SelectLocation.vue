<template>
  <div class="bg-white rounded-[10px] p-6 border border-[rgba(197,197,197,0.5)] mt-[25px]">
    <!-- Barre retour + titre -->
    <div class="flex items-center gap-2 text-sm mb-2.5">
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <span class="text-[#333] font-normal cursor-pointer">Mes animaux</span>
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <strong class="text-black font-bold">Trouver un éleveur</strong>
    </div>

    <!-- Trait de séparation -->
    <hr class="border-t border-[rgba(0,0,0,0.1)] mb-4" />

    <!-- Étapes de navigation -->
    <div class="flex flex-wrap items-center gap-2.5 text-sm font-medium mb-5">
      <!-- Étapes actives -->
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

      <!-- Étape inactive -->
      <div class="flex items-center gap-1.5 text-[#666]">
        <span>Trouvez votre éleveur</span>
      </div>
    </div>

    <!-- Barre d’adresse + bouton -->
    <div class="flex items-center gap-3 mb-5">
      <!-- Champ d'adresse -->
      <input
        type="text"
        placeholder="Votre adresse"
        class="flex-1 px-[14px] py-[10px] border border-[#ccc] rounded-[8px] text-sm"
      />

      <!-- Bouton localisation -->
      <button
        class="flex items-center gap-2 bg-[#43A047] text-white text-xs px-4 py-[10px] rounded-[8px] cursor-pointer"
      >
        <img :src="locationIcon" alt="localisation" class="w-[15px] h-[15px]" />
        Utiliser ma position
      </button>
    </div>

    <!-- Carte -->
    <img
      :src="mapImage"
      alt="carte"
      class="w-full max-h-[500px] object-cover rounded-[10px]"
    />
  </div>
</template>

<script setup>
import arrowIcon from '@/assets/icons/arrow-left.svg'
import markerIcon from '@/assets/layers/marker.svg'
import locationIcon from '@/assets/icons/location-white.svg'
import mapImage from '@/assets/images/map.svg'
</script>

<style scoped>

</style>
