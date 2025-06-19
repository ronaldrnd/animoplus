<template>
  <section
    class="w-full min-h-screen flex items-center justify-center p-8 bg-cover bg-center bg-no-repeat"
    :style="`background-image: linear-gradient(180deg, #43A047 0%, rgba(255, 255, 255, 0.8) 100%), url(${heroBg})`"
  >
    <div class="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-8">
      <!-- Titre principal -->
      <h1 class="text-white text-center font-spartan font-bold text-[clamp(1rem,4vw,3rem)] leading-tight mb-2 drop-shadow-md">
        PRENEZ SOIN DE VOTRE<br />COMPAGNON EN 1 CLIC
      </h1>

      <!-- Sous-titre  -->
      <p class="text-white text-center font-spartan text-[clamp(0.75rem,1.25vw,1rem)] font-normal leading-relaxed max-w-3xl mb-2 drop-shadow-sm">
        La plateforme qui connecte les propriétaires d'animaux aux meilleurs professionnels<br />vétérinaires |
      </p>

      <!-- Formulaire de prise de rendez-vous -->
      <div
        class="flex flex-wrap items-center justify-center bg-white rounded-xl p-2 gap-2 shadow-md max-w-3xl w-full mb-16"
      >
        <!-- Email avec icône -->
        <div class="flex items-center bg-white px-4 py-2 rounded-lg gap-2 flex-1 min-w-[150px]">
          <img :src="emailIcon" alt="email icon" class="w-5 h-5" />
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 text-sm border-none outline-none font-montserrat placeholder:text-green-700"
          />
        </div>

        <!-- Barre verticale -->
        <span class="w-px h-6 bg-gray-400 mr-2 hidden md:inline-block"></span>

        <!-- Localisation avec icône -->
        <div class="flex items-center bg-white px-4 py-2 rounded-lg gap-2 flex-1 min-w-[150px]">
          <img :src="locationIcon" alt="location icon" class="w-5 h-5" />
          <input
            type="text"
            value="Antananarivo 101"
            class="flex-1 text-sm border-none outline-none text-green-700 font-montserrat cursor-default"
            readonly
          />
        </div>

        <!-- Bouton avec flèche -->
        <button
          class="flex items-center bg-green-700 text-white px-6 py-3 rounded-xl text-sm font-semibold font-montserrat whitespace-nowrap gap-2"
        >
          Prendre un rendez-vous
          <img :src="arrowIcon" alt="arrow icon" class="w-4 h-4" />
        </button>
      </div>

      <div class="flex flex-wrap justify-center gap-12 w-full">
        <div
          class="flex flex-col gap-6 bg-white rounded-2xl p-4 shadow-md max-w-xl flex-1"
        >
          <div class="flex gap-2 items-center">
            <img :src="urgenceIcon" alt="Urgence" class="w-5" />
            <h3 class="uppercase text-black font-spartan font-bold text-base">URGENCE</h3>
          </div>
          <p class="text-gray-800 font-spartan text-sm leading-relaxed flex-grow">
            En cas d'urgence pour votre animal, chaque minute compte. Nos partenaires<br />vétérinaires qualifiés sont là pour sauver la santé de vos compagnons.
          </p>
          <button class="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-spartan hover:bg-green-700">
            Contacter maintenant
          </button>
        </div>

        <div
          class="flex flex-col gap-6 bg-white rounded-2xl p-4 shadow-md max-w-xl flex-1"
        >
          <div class="flex gap-2 items-center">
            <img :src="botIcon" alt="Conseil IA" class="w-6" />
            <h3 class="uppercase text-black font-spartan font-bold text-base">CONSEIL IA</h3>
          </div>
          <p class="text-gray-800 font-spartan text-sm leading-relaxed flex-grow">
            Vous avez un doute concernant votre animal et vous ne savez pas quoi faire ?<br />Notre conseiller virtuel est là pour vous 7j/7 et 24h/24.
          </p>
          <button class="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-spartan hover:bg-green-700">
            Démarrer le chat
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '@/assets/images/hero-bg.svg';
import urgenceIcon from '@/assets/icons/urgence-icon.svg';
import botIcon from '@/assets/icons/chat-icon.svg';
import emailIcon from '@/assets/icons/email-icon.svg';
import locationIcon from '@/assets/icons/location-icon.svg';
import arrowIcon from '@/assets/icons/arrow-icon.svg';
</script>
