<template>
  <div class="grid grid-cols-4 gap-4">
    <div
      class="cursor-pointer border border-neutral-200 rounded-[10px] overflow-hidden text-center p-2 bg-white transition-transform duration-200 hover:-translate-y-[3px]"
      v-for="species in speciesData"
      :key="species.id"
      @click="$emit('species-selected', species)"
    >
      <img :src="species.image" :alt="species.name" class="w-full h-[160px] object-cover rounded-md" />
      <p class="text-[13px] font-medium mt-1.5 text-[#333]">{{ species.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { speciesData } from '../data/data.js'

defineEmits(['species-selected'])
</script>
