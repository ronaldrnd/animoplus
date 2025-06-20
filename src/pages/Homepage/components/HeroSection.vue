<template>
    <section class="w-full min-h-[75vh] flex items-center justify-center">
        <div class="mx-auto flex flex-col items-center gap-8">
            <div class="flex gap-[44px] flex-col items-center">
                <div class="relative">
                    <!-- Titre principal -->
                    <h1 class="text-white text-center font-spartan font-bold text-[64px] leading-28 drop-shadow-md">
                        PRENEZ SOIN DE VOTRE<br />COMPAGNON EN 1 CLIC
                    </h1>
                    <span class="absolute top-24 right-4">
                        <img :src="layerYellow" alt="layer green" />
                    </span>
                </div>

                <!-- Sous-titre  -->
                <p class="text-white text-center font-spartan text-[1.2rem] font-normal leading-relaxed min-h-[2rem]">
                    {{ typedText }}<span class="border-r-2 border-white animate-pulse"></span>
                </p>

                <!-- Formulaire de prise de rendez-vous -->
                <div
                    class="flex flex-wrap items-center justify-center bg-white rounded-xl p-2 gap-2 shadow-md max-w-3xl w-full mb-16">
                    <!-- Email avec icône -->
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg gap-2 flex-1 min-w-[150px]">
                        <img :src="emailIcon" alt="email icon" class="w-5 h-5" />
                        <input type="email" placeholder="Enter your email"
                            class="flex-1 text-sm border-none outline-none font-montserrat placeholder:text-primary-600" />
                    </div>

                    <!-- Barre verticale -->
                    <span class="w-px h-6 bg-gray-400 mr-2 hidden md:inline-block"></span>

                    <!-- Localisation avec icône -->
                    <div class="flex items-center bg-white px-4 py-2 rounded-lg gap-2 flex-1 min-w-[150px]">
                        <img :src="locationIcon" alt="location icon" class="w-5 h-5" />
                        <input type="text" value="Antananarivo 101"
                            class="flex-1 text-sm border-none outline-none text-primary-600 font-montserrat cursor-default" />
                    </div>

                    <!-- Bouton avec flèche -->
                    <button
                        class="flex items-center bg-primary-600 text-white px-5 py-4 rounded-xl text-base font-semibold font-montserrat gap-2 hover:bg-primary-500"
                        @click="() => console.log('Prendre rendez-vous')">
                        Prendre un rendez-vous
                        <img :src="arrowIcon" alt="arrow icon" class="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import layerYellow from '@/assets/layers/layer-yellow.svg';
import emailIcon from '@/assets/icons/email-icon.svg';
import locationIcon from '@/assets/icons/location-icon.svg';
import arrowIcon from '@/assets/icons/arrow-icon.svg';

const fullText = "La plateforme qui connecte les propriétaires d'animaux aux meilleurs professionnels vétérinaires |";
const typedText = ref('');
let index = 0;
let direction = 1;

onMounted(() => {
  setInterval(() => {
    if (direction === 1) {
      if (index <= fullText.length) {
        typedText.value = fullText.slice(0, index++);
      } else {
        direction = -1;
        setTimeout(() => {}, 100000);
      }
    } else {
      if (index >= 0) {
        typedText.value = fullText.slice(0, index--);
      } else {
        direction = 1;
      }
    }
  }, 50);
});
</script>
