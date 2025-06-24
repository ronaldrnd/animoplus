<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="max-w-[1400px] flex flex-col gap-[80px] items-center justify-center">
      <HeroSection />
      <ActionCards />
      <ProfessionalsSection />
      <SpecialityList />
      <OptiCare />
      <CompanionPartner />
      <QuestionsBanner />
    </div>
  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue';
import ActionCards from './components/ActionCards.vue';
import ChatPopup from './components/ChatPopup.vue';
import ProfessionalsSection from './components/ProfessionalsSection.vue';
import SpecialityList from './components/SpecialityList.vue';
import OptiCare from './components/OptiCare.vue';
import CompanionPartner from './components/CompanionPartner.vue';
import QuestionsBanner from './components/QuestionsBanner.vue';

</script>
<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 142vh;
  background-image: url("../../assets/images/hero-bg.svg"),
    linear-gradient(to bottom, #43a047, #ffffff);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: -1;
}

</style>