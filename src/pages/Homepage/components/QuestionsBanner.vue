<template>
  <div
    class="w-[95%] max-w-[1500px] mx-auto mb-[60px] px-6 py-8 bg-green-600 rounded-[30px] flex justify-center items-center text-center"
  >
    <div class="max-w-[600px]">
      <h1 class="text-white text-2xl font-spartan mb-4">DES QUESTIONS ?</h1>
      <p class="text-white text-[17px] font-spartan mb-6">
        Contactez-nous via notre assistant virtuel intelligent
      </p>
      <button
        class="bg-[color:#A0522D] text-white text-xs px-6 py-3 rounded-[17px] ml-[55px] shadow-[0_4px_12px_rgba(245,158,11,0.25)] flex items-center gap-2 hover:bg-orange-800 transition"
      >
        <img :src="AskDiscussIcon" alt="Icône discussion" class="w-5 h-5" />
        DÉMARRER LA DISCUSSION
      </button>
    </div>
  </div>
</template>

<script setup>
import AskDiscussIcon from '@/assets/icons/Ask-Discuss.svg'
</script>
