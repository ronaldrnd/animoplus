<template>
  <div class="flex flex-col gap-4 bg-white rounded-[10px] p-6 border border-neutral-200">
    <div class="flex items-center gap-2">
      <span class="cursor-pointer" @click="$emit('backToList')">Mon profil</span>
      <img :src="arrowIcon" alt="retour" class="w-[14px] cursor-pointer" />
      <strong class="text-black font-bold">Modifier mon profil</strong>
    </div>

    <hr />

    <div class="flex justify-between items-start mb-2">
      <div class="flex gap-5 items-center mt-2 mb-6">
        <img :src="ProfileImg" alt="photo de profil" class="w-[90px] h-[90px] rounded-full object-cover" />

        <div>
          <label class="border border-[#E5E7EB] rounded-[9px] px-3 py-1 flex items-center gap-2 cursor-pointer text-[#4B5563]">
            <img :src="editIcon" alt="edit" />
            Importer une image
            <input type="file" accept="image/*" hidden />
          </label>
          <p class="text-[12px] text-[#666] mt-1">L’image doit être moins de 5Ko</p>
        </div>
      </div>

      <!-- Bouton enregistrer -->
      <button class="bg-accent-500 text-white px-6 py-3 rounded-[14px]">
        Enregistrer
      </button>
    </div>

    <!-- Formulaire -->
    <form class="flex flex-col gap-4 mb-6 text-[#4B5563]">
      <label class="flex flex-col gap-1 font-medium">
        Nom
        <input type="text" value="Ezra Fanomezantsoa"
          class="px-2 py-2 border border-neutral-200 rounded text-[14px] text-neutral-400 font-bold outline-none" />
      </label>

      <label class="flex flex-col gap-1 font-medium">
        Email
        <input type="email" value="exemple@gmail.com"
          class="px-2 py-2 border border-neutral-200 rounded text-[14px] text-neutral-400 font-bold outline-none" />
      </label>

      <label class="flex flex-col gap-1 font-medium">
        Téléphone
        <input type="tel" value="+261 02 066 54"
          class="px-2 py-2 border border-neutral-200 rounded text-[14px] text-neutral-400 font-bold outline-none" />
      </label>

      <label class="flex flex-col gap-1 font-medium">
        Adresse
        <input type="text" value="Antananarivo, 101"
          class="px-2 py-2 border border-neutral-200 rounded text-[14px] text-neutral-400 font-bold outline-none" />
      </label>

      <label class="flex flex-col gap-1 font-medium">
        Date de naissance
        <div class="flex items-center border border-[#E5E7EB] rounded bg-white pl-3 h-[42px]">
          <img :src="calendarIcon" alt="calendrier" class="w-[16px] h-[16px]" />
          <input type="text" value="19/01/2002"
            class="flex-1 border-none outline-none text-[14px] pl-2 text-[#374151] font-league bg-transparent h-full" />
        </div>
      </label>
    </form>

    <Alert :alert-img="alertIcon" alert-description="Information confidentielle">
      <div class="flex flex-col gap-4">
        <p class="text-[#222]">
          Ces informations sont confidentielles et accessibles uniquement par vous et les spécialistes vétérinaires.
        </p>
      </div>
    </Alert>
  </div>
</template>

<script setup>
import ProfileImg from '@/assets/images/image1.svg'
import editIcon from '@/assets/icons/edit.svg'
import calendarIcon from '@/assets/icons/small-calendar.svg'
import alertIcon from '@/assets/icons/alertGreen.svg'
import arrowIcon from '@/assets/icons/arrow-left.svg'
import Alert from '@/components/common/Alert.vue'

const emit = defineEmits(['backToList']);

</script>

<style scoped>

.font-league {
  font-family: 'League Spartan', sans-serif;
}

.confidential-text p {
  margin-left: -40px;
}
</style>
