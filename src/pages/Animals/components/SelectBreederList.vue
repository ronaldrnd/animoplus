<template>
  <div>
    <p class="text-center text-sm font-medium mb-5">
      Distance maximale : 30 Km - {{ filteredBreeders.length }} éleveur(s) trouvé(s)
    </p>

    <div class="grid grid-cols-4 gap-5">
      <div
        class="bg-white rounded-[10px] p-3 border border-neutral-200 hover:shadow-md transition-shadow duration-200"
        v-for="breeder in filteredBreeders"
        :key="breeder.id"
      >
        <!-- Image de l'éleveur -->
        <img
          :src="breeder.image"
          :alt="breeder.name"
          class="w-full h-[180px] object-cover rounded-[8px]"
        />

        <!-- Nom + âge -->
        <div class="flex items-center justify-between mt-2.5">
          <p class="font-bold text-[#333]">
            {{ breeder.name }}, {{ breeder.age }}
          </p>
          <span v-if="breeder.verified" class="text-green-500 text-xs">✓</span>
        </div>

        <!-- Spécialités -->
        <div class="flex flex-wrap gap-1 mt-1">
          <span
            v-for="specialty in breeder.specialties"
            :key="specialty"
            class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
          >
            {{ specialty }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-[12px] text-[#666] mt-2 line-clamp-2">
          {{ breeder.description }}
        </p>

        <!-- Distance et rating -->
        <div class="flex items-center justify-between mt-2">
          <span class="text-[12px] text-[#666]">{{ breeder.distance }}</span>
          <div class="flex items-center gap-1">
            <span class="text-yellow-500">⭐</span>
            <span class="text-[12px] text-[#666]">{{ breeder.rating }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { breedersData, getBreedersBySpecialty } from '../data/data.js'

const props = defineProps({
  selectedSpecies: {
    type: Object,
    default: null
  },
  selectedRace: {
    type: Object,
    default: null
  },
  selectedLocation: {
    type: Object,
    default: null
  }
})

const filteredBreeders = computed(() => {
  let breeders = breedersData

  // Filtrer par spécialité si une espèce est sélectionnée
  if (props.selectedSpecies) {
    breeders = getBreedersBySpecialty(props.selectedSpecies.name)
  }

  // Limiter à 30km maximum
  breeders = breeders.filter(breeder => parseInt(breeder.distance) <= 30)

  return breeders
})
</script>