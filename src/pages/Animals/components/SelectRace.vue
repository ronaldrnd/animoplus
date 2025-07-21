<template>
  <div class="grid grid-cols-4 gap-5">
    <div
      class="cursor-pointer border border-neutral-200 rounded-[10px] bg-white p-3 text-center transition-transform duration-200 hover:-translate-y-[2px]"
      v-for="race in currentRaces"
      :key="race.id"
      @click="$emit('race-selected', race)"
    >
      <!-- Icône de race -->
      <img :src="pawIcon" alt="icone patte" class="w-[95px] h-[100px] object-contain mx-auto opacity-40" />
      <!-- Nom de la race -->
      <p class="mt-2.5 text-[13px] text-[#444] font-medium">{{ race.name }}</p>
      <!-- Popularité -->
      <p class="text-[11px] text-[#666] mt-1">{{ race.popularity }}</p>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { getRacesBySpeciesId } from '../data/data.js'
import pawIcon from '@/assets/icons/paw-gray.svg'

const props = defineProps({
  selectedSpecies: {
    type: Object,
    default: null
  }
})

const currentRaces = computed(() => {
  if (props.selectedSpecies) {
    return getRacesBySpeciesId(props.selectedSpecies.id)
  }
  return []
})

defineEmits(['race-selected'])
</script>