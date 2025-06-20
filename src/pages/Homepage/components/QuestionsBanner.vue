<template>
  <div
    class="w-full mb-[80px] px-6 py-[64px] bg-primary-600 rounded-[30px] flex justify-center items-center text-center"
  >
    <div class="flex flex-col gap-8 items-center">
      <h1 class="text-white text-[40px] font-bold ">DES QUESTIONS ?</h1>
      <p class="text-white text-[18px]">
        Contactez-nous via notre assistant virtuel intelligent
      </p>
      <button
        class="bg-accent-500 text-white text-base px-6 py-4 rounded-[12px] shadow-[0_4px_12px_rgba(245,158,11,0.25)] flex items-center gap-2 hover:bg-accent-400 transition"
      >
        <img :src="AskDiscussIcon" alt="Icône discussion" />
        DÉMARRER LA DISCUSSION
      </button>
    </div>
  </div>
</template>

<script setup>
import AskDiscussIcon from '@/assets/icons/Ask-Discuss.svg'
</script>
