<template>
    <div class="flex flex-col gap-4 bg-white rounded-[10px] p-6 border border-neutral-200">
        <TitleDashboard title="Mon profil" :icon="editIcon" />

        <hr/>

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
        <form class="flex flex-col gap-6 mb-6 text-[#4B5563]">
            <label class="flex flex-col gap-1 font-medium">
                Nom
                <input type="text" value="Ezra Fanomezantsoa"
                class="px-2 py-3 border border-neutral-200 rounded-md text-[14px] text-neutral-400 font-bold outline-none w-[85%]" />
            </label>

            <label class="flex flex-col gap-1 font-medium">
                Email
                <input type="email" value="exemple@gmail.com"
                class="px-2 py-3 border border-neutral-200 rounded-md text-[14px] text-neutral-400 font-bold outline-none w-[85%]" />
            </label>

            <label class="flex flex-col gap-1 font-medium">
                Téléphone
                <input type="tel" value="+261 02 066 54"
                class="px-2 py-3 border border-neutral-200 rounded-md text-[14px] text-neutral-400 font-bold outline-none w-[85%]" />
            </label>

            <label class="flex flex-col gap-1 font-medium">
                Adresse
                <input type="text" value="Antananarivo, 101"
                class="px-2 py-3 border border-neutral-200 rounded-md text-[14px] text-neutral-400 font-bold outline-none w-[85%]" />
            </label>

            <label class="flex flex-col gap-1 font-medium">
                Heure d'ouverture
                <div class="flex items-center border border-[#E5E7EB] rounded-md bg-white pl-3 h-[43px] w-[85%]">
                <img :src="clockIcon" alt="heure" class="w-[16px] h-[16px]" />
                <input type="text" value="24 / 24"
                    class="flex-1 border-none outline-none text-[14px] pl-2 text-[#4B5563] font-league bg-transparent h-full" />
                </div>
            </label>
        </form>

        <Alert :alert-img="alertIcon" alert-description="Information confidentielle">
            <div class="flex flex-col gap-4 ">
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
import clockIcon from '@/assets/icons/clock-black.svg'
import alertIcon from '@/assets/icons/alertGreen.svg'

import TitleDashboard from '@/components/common/TitleDashboard.vue'
import Alert from '@/components/common/Alert.vue'
</script>