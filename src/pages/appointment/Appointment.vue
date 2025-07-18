<template>
  <div class="appointment-wrapper">
    
    <AppointmentPage />
    <ServiceSearch />
    <DetailAppointment />

  </div>
</template>

<script setup>
import AppointmentPage from './components/AppointmentPage.vue';
import DetailAppointment from './components/DetailAppointment.vue';
import ServiceSearch from './components/ServiceSearch.vue';
</script>

<style scoped>

</style>
