<template>
  <div class="messaging-wrapper">
    <MessagingSection />
    <ProfessionalList />
  </div>
</template>

<script setup>
import MessagingSection from './components/MessagingSection.vue'
import ProfessionalList from './components/ProfessionalList.vue'
</script>

<style scoped>
.messaging-wrapper {
  padding: 20px;
}
</style>
