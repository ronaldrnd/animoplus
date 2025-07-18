<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div class="background"></div>

    <!-- Particules -->
    <div class="particle" style="top: 10%; left: 20%; animation-delay: 0s;"></div>
    <div class="particle" style="top: 20%; left: 80%; animation-delay: 1s;"></div>
    <div class="particle" style="top: 60%; left: 10%; animation-delay: 2s;"></div>
    <div class="particle" style="top: 80%; left: 70%; animation-delay: 3s;"></div>
    <div class="particle" style="top: 40%; left: 50%; animation-delay: 4s;"></div>
    <div class="particle" style="top: 70%; left: 30%; animation-delay: 5s;"></div>

    <BubbleGreen class="bubble bubble-1" />
    <BubbleYellow class="bubble bubble-2" />
    <BubbleBrown class="bubble bubble-3" />
    <BubbleGray class="bubble bubble-5" />
    <BubbleGreenTwo class="bubble bubble-6" />

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
import ProfessionalsSection from './components/ProfessionalsSection.vue';
import SpecialityList from './components/SpecialityList.vue';
import OptiCare from './components/OptiCare.vue';
import CompanionPartner from './components/CompanionPartner.vue';
import QuestionsBanner from './components/QuestionsBanner.vue';


import BubbleGreen from '@/assets/bubbles/1_green.vue';
import BubbleYellow from '@/assets/bubbles/1_yellow.vue';
import BubbleBrown from '@/assets/bubbles/1_brown.vue';
import BubbleGreenTwo from '@/assets/bubbles/2_green.vue';
import BubbleGray from '@/assets/bubbles/1_gray.vue';

</script>
<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 160vh;
  background-image:
    linear-gradient(180deg, #43A047 0%, #FFF 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: -1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.6;
  }
}

.bubble {
  position: absolute;
  opacity: 0.7;
  animation: bubble-float 8s ease-in-out infinite;
}

.bubble-1 {
  top: 20%;
  left: -10px;
  animation-delay: 0s;
}

.bubble-2 {
  top: 15%;
  right: -50px;
  animation-delay: 2s;
}

.bubble-3 {
  opacity: 0.5;
  bottom: -200px;
  left: 10px;
  animation-delay: 1s;
}

.bubble-5 {
  opacity: 0.5;
  bottom: -100px;
  right: -200px;
  animation-delay: 1s;
}

.bubble-6 {
  opacity: 0.5;
  bottom: 0;
  transform: translate(-50%, -50%);
  animation-delay: 1s;
}

@keyframes bubble-float {

  0%,
  100% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(-30px) scale(1.1);
  }
}
</style>