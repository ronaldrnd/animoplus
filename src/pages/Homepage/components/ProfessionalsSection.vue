<template>
  <section
    class="w-[95%] max-w-[1900px] mx-auto mt-[75px] px-5 py-[84px] flex flex-col items-center gap-6 rounded-[30px] border border-gray-200 bg-white/70 backdrop-blur-md shadow-md"
  >
    <div class="w-full flex flex-col items-center gap-6">
      <h1 class="text-gray-600 text-center font-spartan text-[25px] font-extrabold uppercase m-0">
        ANNUAIRE DES PROFESSIONNELS
      </h1>

      <p class="text-black text-center font-spartan text-[13px] font-normal m-0 max-w-[600px]">
        Découvrez l'ensemble des professionnels du secteur animalier référencés sur DoctorPet.
      </p>

      <div class="w-full max-w-[380px]">
        <div class="flex items-center w-full bg-white border border-gray-300 rounded-[12px] px-3 py-2">
          <input
            type="text"
            placeholder="Rechercher un professionnel ou une spécialité..."
            class="flex-1 bg-transparent border-none outline-none font-spartan text-[13px] text-gray-600 placeholder:text-gray-400"
          />
          <img :src="searchIcon" alt="Rechercher" class="w-6 h-6 ml-3 opacity-100" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import searchIcon from '@/assets/icons/search-icon.svg'
</script>
