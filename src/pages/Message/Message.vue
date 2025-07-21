<template>
  <div class="messaging-wrapper">
    <!-- Pour le client -->
    <!-- <MessagingSection /> -->

    <!-- Pour le pro -->
    <MessagingProSection />

    <!-- <ProfessionalList /> -->
    <!-- <MessageList /> -->
  </div>
</template>

<script setup>
// import MessagingSection from './components/MessagingSection.vue'
import MessagingProSection from './components/MessagingProSection.vue'
// import ProfessionalList from './components/ProfessionalList.vue'
// import MessageList from './components/MessageList.vue'
</script>

<style scoped>
.messaging-wrapper {
  padding: 20px;
}
</style>
