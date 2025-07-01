<template>
  <div class="p-6 md:p-10 bg-white rounded-xl border border-[rgba(0,0,0,0.05)] shadow-sm font-league">
    <!-- Barre de titre -->
    <div class="flex justify-between items-center">
      <h2 class="text-[20px] font-semibold">Mon profil</h2>
      <button class="flex items-center gap-1 text-green-600 text-[14px] font-medium cursor-pointer">
        <img :src="editIcon" alt="modifier" class="w-5 h-5" />
        Mettre à jour
      </button>
    </div>

    <!-- Séparateur -->
    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <!-- Informations utilisateur -->
    <div class="flex justify-between items-start mb-4">
      <div class="flex gap-5">
        <img :src="ProfileImg" alt="photo de profil" class="w-[130px] h-[130px] rounded-full object-cover" />

        <div>
          <h3 class="text-[20px] font-semibold text-gray-700">Ezra Fanomezantsoa</h3>
          <p class="text-[11px] text-gray-700">exemples@gmail.com</p>

          <!-- Infos personnelles -->
          <p class="flex items-start gap-2 text-[13px] my-1">
            <img :src="phoneIcon" alt="Téléphone" class="w-[16px]" />
            +261 03 400 05
          </p>
          <p class="flex items-start gap-2 text-[13px] my-1">
            <img :src="locationIcon" alt="Localisation" class="w-[16px]" />
            Antananarivo 101
          </p>
          <p class="flex items-start gap-2 text-[13px] my-1">
            <img :src="calendarIcon" alt="Date de naissance" class="w-[16px]" />
            19/01/2002
          </p>
        </div>
      </div>

      <!-- Bouton Ajouter un animal -->
      <button
        @click="showModal = true"
        class="bg-[#A0522D] text-white text-xs px-4 py-2 rounded-[13px] shadow-md flex items-center gap-2">
        <img :src="animalIcon" alt="icone patte" class="w-[18px]" />
        Ajouter un animal
      </button>
    </div>

    <!-- Message de confidentialité -->
    <div class="flex items-start gap-3 bg-[rgba(16,185,129,0.10)] border-l-[4px] border-[#43A047] p-4 rounded mb-5">
      <img :src="alertIcon" alt="confidentialité" class="w-[20px]" />
      <div>
        <h4 class="text-[#43A047] text-[14px] mt-1 font-semibold">Information confidentielle</h4>
        <p class="text-[13px] mt-2 -ml-10">
          Ces informations sont confidentielles et accessibles uniquement par vous et les spécialistes vétérinaires.
        </p>
      </div>
    </div>

    <!-- Section Animaux -->
    <div>
      <div class="flex items-center font-bold text-[13px] font-league mb-5">
        <img :src="petIcon" alt="icone animal" class="w-[30px] mr-[18px]" />
        <h3>Animaux de Compagnie</h3>
      </div>

      <hr class="w-full border-t border-[rgba(197,197,197,0.5)] mb-5" />

      <!-- Aucun animal -->
      <div class="flex flex-col text-gray-600 text-[12px] font-league">
        <img :src="bigPaw" alt="patte" class="w-[250px] h-[250px] mb-2" />
        <p class="ml-5">Aucun animal enregistré pour le moment</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileImg from '@/assets/images/image1.svg'
import phoneIcon from '@/assets/icons/small-phone.svg'
import locationIcon from '@/assets/icons/small-marker.svg'
import calendarIcon from '@/assets/icons/small-calendar.svg'
import animalIcon from '@/assets/icons/animal.svg'
import alertIcon from '@/assets/icons/alertGreen.svg'
import petIcon from '@/assets/icons/animalGreen.svg'
import bigPaw from '@/assets/icons/big-paw.svg'
import editIcon from '@/assets/icons/edit-icon.svg'
</script>

<style scoped>

.font-league {
  font-family: 'League Spartan', sans-serif;
}

.confidential-text p {
  margin-left: -40px;
}
</style>
