<template>
  <Navbar />
  <HeroSection />
  <ProfessionalsSection />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HeroSection from './components/HeroSection.vue';
import ProfessionalsSection from './components/ProfessionalsSection.vue';

export default {
  components: {
    HeroSection,
    ProfessionalsSection

  }
}
</script>
