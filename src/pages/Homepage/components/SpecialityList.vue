<template>
  <!-- Section principale avec la marge spécifique conservée -->
  <section class="speciality-list">
    <div class="mx-auto">
      <h2 class="text-[18px] font-bold text-[#2E2E30] mb-[20px]">Liste des spécialités</h2>
      <hr class="separator w-full h-[2px] bg-[rgba(197,197,197,0.5)] border-none mb-[20px]">

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
    </div>
  </section>
</template>

<script setup>
// Import des icônes
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
    name: 'Dr. Martin Vétérinaire',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true
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
</script>

<style scoped>
.speciality-list {
  padding: 0;
  width: 100%;
}
</style>