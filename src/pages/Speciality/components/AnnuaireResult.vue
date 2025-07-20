<template>
  <section class="result-section">
    <h2 class="title">Résultats pour "Vétérinaire Ophtalmologue"</h2>

    <!-- Séparateur -->
    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <div class="filters">
      <!-- Bloc distance statique -->
      <div class="distance-static-container">
        <label class="distance-label">Distance : 5 km</label>

        <div class="slider-bar">
          <!-- Ligne de progression -->
          <div class="slider-track">
            <div class="slider-dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <!-- Labels -->
          <div class="slider-labels">
            <span>0</span>
            <span>20</span>
            <span>40</span>
            <span>60</span>
            <span>80</span>
            <span>100</span>
          </div>
        </div>
      </div>

      <!-- Champ localisation + bouton -->
      <div class="location-container">
        <input
          type="text"
          placeholder="Antananarivo, 101"
          class="location-input-with-btn"
        />
        <button class="search-btn-inside">
          <img :src="searchIcon" alt="search" class="icon" />
          Rechercher
        </button>
      </div>

    </div>

    <!-- Grille des cartes avec Tailwind -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[25px]">

      <!-- Carte pour chaque spécialité -->
      <div 
        v-for="(item, index) in specialities" 
        :key="index"
        class="card border border-gray-200 rounded-[10px] p-[25px] bg-white shadow-sm hover:shadow-md transition-all"
      >
        <h3 class="text-[16px] font-bold text-[#43A047] mb-[15px]">{{ item.name }}</h3>

        <!-- Informations avec icônes -->
        <div class="space-y-[6px]">
          <p class="flex items-center text-[14px] text-[#333]">
            <img :src="locationIcon" alt="Adresse" class="w-4 h-4 mr-2 opacity-80">
            {{ item.address }}
          </p>
          <p class="flex items-center text-[14px] text-[#333]">
            <img :src="phoneIcon" alt="Téléphone" class="w-4 h-4 mr-2 opacity-80">
            {{ item.phone }}
          </p>
          <p class="flex items-center text-[14px] text-[#333]">
            <img :src="clockIcon" alt="Horaires" class="w-4 h-4 mr-2 opacity-80">
            {{ item.hours }}
          </p>
        </div>

        <!-- Statut dynamique -->
        <div class="mt-[15px]">
          <span 
            :class="item.open ? 'bg-[rgba(67,160,71,0.15)] text-[#43A047]' : 'bg-[rgba(239,83,80,0.15)] text-[#EF5350]'"
            class="text-[11px] font-bold px-3 py-1 rounded-[6px] inline-block"
          >
            {{ item.open ? 'OUVERT' : 'FERMÉ' }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import searchIcon from '@/assets/icons/location-white.svg'
import locationIcon from '@/assets/icons/location.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import clockIcon from '@/assets/icons/clock.svg'

// Données des spécialités
const specialities = [
  {
    name: 'Clinique vétérinaire Centrale',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true
  },
  {
    name: 'Urgence Vétérinaire de Nuit',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
    open: false
  },
  {
    name: 'Dr. Martin Vétérinaire',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true
  },
  {
    name: 'Clinique vétérinaire Centrale',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true
  },
  {
    name: 'Clinique vétérinaire Centrale',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true
  },
  {
    name: 'Urgence Vétérinaire de Nuit',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
    open: false
  }
]

import { ref } from 'vue'

const distance = ref(5)
const location = ref('')
</script>

<style scoped>
.result-section {
  border: 1px solid var(--Neutral---200, #E5E7EB);
  border-radius: 14px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  margin-top: 25px ;
}

.title {
  font-size: 18px;
  font-weight: 700;
  color: #2E2E30;
  font-family: "League Spartan", sans-serif;
  margin-bottom: 16px;
}

/* Filtres */
.filters {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.distance-static-container {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.slider-bar {
  flex: none; /* empêche de prendre toute la largeur */
  width: 55%; /* réduit la longueur de la barre */
  display: flex;
  flex-direction: column;
  gap: 2px; /* réduit l’espace vertical entre la barre et les chiffres */
  margin-left: 10px;
  margin-top: 20px;
}

.slider-track {
  position: relative;
  height: 6px;
  background-color: #e5e7eb;
  border-radius: 5px;
  width: 100%;
}

.slider-dots {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 1px;
}

.slider-dots span {
  width: 13px;
  height: 13px;
  background-color: white;
  border: 1px solid #E5E7EB;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.slider-dots span:first-child {
  background-color: #43A047;
  border-color: #43A047;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #4B5563;
  margin-top: 2px;
  margin-left: 5px;
}

.location-container {
  position: relative;
  width: 100%;
}

.location-input-with-btn {
  width: 100%;
  padding: 10px 140px 10px 12px; /* padding right agrandi pour faire place au bouton */
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 14px;
  height: 42px;
  box-sizing: border-box;
}

.search-btn-inside {
  position: absolute;
  top: 4px;
  right: 4px;
  bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #43A047;
  color: white;
  border: none;
  padding: 0 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  height: 34px;
}

.search-btn-inside .icon {
  width: 16px;
}

</style>
