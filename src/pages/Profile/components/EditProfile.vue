<template>
  <div class="bg-white p-6 rounded-xl border border-[rgba(0,0,0,0.05)] shadow-md max-w-[970px] mt-[25px] font-league">
    
    <!-- En-tête -->
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-[20px] font-semibold text-[#2E2E30]">Mon profil</h2>
    </div>

    <!-- Séparateur -->
    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <!-- Photo de profil et bouton upload -->
    <div class="flex justify-between items-start mb-2">
      <div class="flex gap-5 items-center mt-2 mb-6">
        <img :src="ProfileImg" alt="photo de profil" class="w-[90px] h-[90px] rounded-full object-cover" />

        <div>
          <label class="border border-[#E5E7EB] rounded-[9px] px-3 py-1 flex items-center gap-2 text-[13px] cursor-pointer text-[#4B5563]">
            <img :src="editIcon" alt="edit" class="w-[17px]" />
            Importer une image
            <input type="file" accept="image/*" hidden />
          </label>
          <p class="text-[12px] text-[#666] mt-1">L’image doit être moins de 5Ko</p>
        </div>
      </div>

      <!-- Bouton enregistrer -->
      <button class="bg-[#A0522D] text-white px-6 py-2 rounded-[15px] shadow-md text-[13px] font-league mt-[20px]">
        Enregistrer
      </button>
    </div>

    <!-- Formulaire -->
    <form class="flex flex-col gap-4 mb-6 text-[#4B5563]">
      <label class="flex flex-col gap-1 text-[13px] font-medium">
        Nom
        <input type="text" value="Ezra Fanomezantsoa"
          class="px-2 py-2 border border-[#ddd] rounded w-[85%] text-[11px] outline-none" />
      </label>

      <label class="flex flex-col gap-1 text-[13px] font-medium">
        Email
        <input type="email" value="exemple@gmail.com"
          class="px-2 py-2 border border-[#ddd] rounded w-[85%] text-[11px] outline-none" />
      </label>

      <label class="flex flex-col gap-1 text-[13px] font-medium">
        Téléphone
        <input type="tel" value="+261 02 066 54"
          class="px-2 py-2 border border-[#ddd] rounded w-[85%] text-[11px] outline-none" />
      </label>

      <label class="flex flex-col gap-1 text-[13px] font-medium">
        Adresse
        <input type="text" value="Antananarivo, 101"
          class="px-2 py-2 border border-[#ddd] rounded w-[85%] text-[11px] outline-none" />
      </label>

      <label class="flex flex-col gap-1 text-[13px] font-medium">
        Date de naissance
        <!-- Bloc input avec icône calendrier -->
        <div class="flex items-center border border-[#E5E7EB] rounded bg-white pl-3 h-[42px] w-[85%]">
          <img :src="calendarIcon" alt="calendrier" class="w-[16px] h-[16px]" />
          <input type="text" value="19/01/2002"
            class="flex-1 border-none outline-none text-[11px] pl-2 text-[#374151] font-league bg-transparent h-full" />
        </div>
      </label>
    </form>

    <!-- Message de confidentialité -->
    <div class="flex items-start gap-2 bg-[rgba(16,185,129,0.10)] border-l-[4px] border-[#43A047] p-4 rounded mb-10">
      <img :src="alertIcon" alt="confidentialité" class="w-[20px]" />
      <div>
        <h4 class="text-[#43A047] font-league mt-[5px] text-[14px] font-semibold">Information confidentielle</h4>
        <p class="text-[13px] mt-4 -ml-10">
          Ces informations sont confidentielles et accessibles uniquement par vous et les spécialistes vétérinaires.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileImg from '@/assets/images/image1.svg'
import editIcon from '@/assets/icons/edit.svg'
import calendarIcon from '@/assets/icons/small-calendar.svg'
import alertIcon from '@/assets/icons/alertGreen.svg'
</script>

<style scoped>

.font-league {
  font-family: 'League Spartan', sans-serif;
}

.confidential-text p {
  margin-left: -40px;
}
</style>
