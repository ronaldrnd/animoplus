<template>
  <section class="bg-green-600 text-white rounded-[30px] w-[95%] max-w-[1500px] mx-auto mt-[75px] px-5 py-10 flex items-center min-h-[480px]">
    <div class="w-full flex flex-col gap-6">
      <div class="text-left">
        <h1 class="font-spartan text-[27px] font-semibold uppercase leading-[1.2]">
          VOUS ÊTES <br />PROFESSIONNELS ?
        </h1>
      </div>

      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <!-- Texte à gauche -->
        <div class="flex-1 max-w-[700px] flex flex-col justify-center items-start">
          <ul class="list-none p-0 m-0 space-y-2">
            <li class="relative pl-9 font-spartan text-[15px] leading-[1.4] flex items-center">
              <span class="absolute left-0 w-[30px] h-[30px] bg-no-repeat bg-center bg-contain" style="background-image: url('@/assets/layers/pointer.svg')"></span>
              Dispenser les meilleurs soins possibles à vos patients
            </li>
            <li class="relative pl-9 font-spartan text-[15px] leading-[1.4] flex items-center">
              <span class="absolute left-0 w-[30px] h-[30px] bg-no-repeat bg-center bg-contain" style="background-image: url('@/assets/layers/pointer.svg')"></span>
              Profiter d'une meilleure qualité de vie au travail
            </li>
            <li class="relative pl-9 font-spartan text-[15px] leading-[1.4] flex items-center">
              <span class="absolute left-0 w-[30px] h-[30px] bg-no-repeat bg-center bg-contain" style="background-image: url('@/assets/layers/pointer.svg')"></span>
              Augmenter les revenus de votre activité
            </li>
            <li class="relative pl-9 font-spartan text-[15px] leading-[1.4] flex items-center">
              <span class="absolute left-0 w-[30px] h-[30px] bg-no-repeat bg-center bg-contain" style="background-image: url('@/assets/layers/pointer.svg')"></span>
              Optimiser votre temps grâce à notre interface professionnelle
            </li>
          </ul>

          <button class="mt-8 bg-[#6CC447] text-white px-6 py-3 rounded-lg text-xs font-spartan hover:bg-white hover:text-green-700 transition">
            En savoir plus sur nos solutions
          </button>
        </div>

        <!-- Image à droite -->
        <div class="flex-1 flex justify-end md:justify-end">
          <img
            src="@/assets/images/DocPicto.svg"
            alt="Docteur professionnel"
            class="max-h-[300px] w-auto object-contain mr-[170px] md:mr-[170px] sm:mr-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// aucun script ici pour le moment
</script>
