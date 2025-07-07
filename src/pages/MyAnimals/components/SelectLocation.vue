<template>
  <!-- Barre d’adresse + bouton -->
  <div class="flex items-center gap-3 mb-5">
    <!-- Champ d'adresse -->
    <input type="text" placeholder="Votre adresse"
      class="flex-1 px-[14px] py-[10px] border border-[#ccc] rounded-[8px] text-sm" />

    <!-- Bouton localisation -->
    <button @click="$emit('next-step')" class="flex items-center gap-2 bg-[#43A047] text-white px-4 py-[10px] rounded-[8px] cursor-pointer">
      <img :src="locationIcon" alt="localisation" />
      Utiliser ma position
    </button>
  </div>

  <!-- Carte -->
<div class="map-container" style="
            position: relative;
            width: 100%;
            height: 400px;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          ">
    <iframe
      src="https://umap.openstreetmap.fr/fr/map/france-regions-departements_123456?scaleControl=true&miniMap=true&scrollWheelZoom=false&zoomControl=true&allowEdit=false"
      width="100%" height="100%" frameborder="0" allowfullscreen loading="lazy">
    </iframe>
  </div>
</template>

<script setup>
import locationIcon from '@/assets/icons/location-white.svg';
</script>

<style scoped></style>
