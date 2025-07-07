<template>
  <div class="flex flex-col gap-4 bg-white rounded-[10px] p-6 border border-neutral-200">
    <div class="flex items-center gap-2">
      <span class="cursor-pointer" @click="$emit('backToList')">Mes animaux</span>
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <strong class="text-black font-bold">Trouver un éleveur</strong>
    </div>

    <hr />

    <!-- Step -->
    <div class="flex flex-wrap items-center gap-4">
      <div
        v-for="(step, index) in navigationSteps"
        :key="index"
        class="flex items-center gap-1.5 font-bold"
        :class="getStepClass(index)"
      >
        <span>{{ step.label }}</span>
        <img
          v-if="step.showMarker"
          :src="markerIcon"
          alt="marqueur"
          class="w-[25px]"
        />
      </div>
    </div>
    <component
      :is="currentStepComponent"
      :selected-species="selectedSpecies"
      :selected-race="selectedRace"
      :selected-location="selectedLocation"
      @next-step="goToNextStep"
      @previous-step="goToPreviousStep"
      @step-completed="markStepCompleted"
      @species-selected="handleSpeciesSelected"
      @race-selected="handleRaceSelected"
      @location-selected="handleLocationSelected"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import arrowIcon from '@/assets/icons/arrow-left.svg'
import markerIcon from '@/assets/layers/marker.svg'
import SelectLocation from './SelectLocation.vue'
import SelectRace from './SelectRace.vue'
import SelectSpecies from './SelectSpecies.vue'
import SelectBreederList from './SelectBreederList.vue'

const currentStep = ref(0)
const selectedSpecies = ref(null)
const selectedRace = ref(null)
const selectedLocation = ref(null)

// Steps configuration
const navigationSteps = [
  {
    label: "Sélection d'espèce",
    showMarker: true,
    completed: false,
    component: SelectSpecies
  },
  {
    label: "Sélection de race",
    showMarker: true,
    completed: false,
    component: SelectRace
  },
  {
    label: "Où voulez-vous chercher ?",
    showMarker: true,
    completed: false,
    component: SelectLocation
  },
  {
    label: "Trouvez votre éleveur",
    showMarker: false,
    completed: false,
    component: SelectBreederList
  }
]

const currentStepComponent = computed(() => {
  return navigationSteps[currentStep.value]?.component
})

const getStepClass = (index) => {
  const step = navigationSteps[index]
  if (step.completed || currentStep.value === index) {
    return 'text-primary-600'
  } else {
    return 'text-neutral-300'
  }
}

// Navigation methods
const goToNextStep = () => {
  if (currentStep.value < navigationSteps.length - 1) {
    markStepCompleted(currentStep.value)
    currentStep.value++
  }
}

const goToPreviousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const markStepCompleted = (stepIndex = currentStep.value) => {
  if (stepIndex < navigationSteps.length) {
    navigationSteps[stepIndex].completed = true
  }
}

const handleSpeciesSelected = (species) => {
  selectedSpecies.value = species
  goToNextStep()
}

const handleRaceSelected = (race) => {
  selectedRace.value = race
  goToNextStep()
}

const handleLocationSelected = (location) => {
  selectedLocation.value = location
  goToNextStep()
}

const emit = defineEmits(['backToList']);
</script>