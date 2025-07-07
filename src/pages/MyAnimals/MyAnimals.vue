<template>
    <div>
        <AnimalsSection v-if="!isFindBreeder" @show-find-breeder="isFindBreeder=true" />
        <!-- <SelectSpecies /> -->
        <!-- <SelectRace /> -->
        <!-- <SelectLocation /> -->
        <SelectBreeder v-if="isFindBreeder" @back-to-list="isFindBreeder=false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AnimalsSection from './components/AnimalsSection.vue'
// import SelectSpecies from './components/SelectSpecies.vue'
// import SelectRace from './components/SelectRace.vue'
// import SelectLocation from './components/SelectLocation.vue'
import SelectBreeder from './components/SelectBreeder.vue'

const isFindBreeder = ref(false)
</script>