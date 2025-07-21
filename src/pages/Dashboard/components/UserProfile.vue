<template>
    <CardLayout title="Mon profil" link="/profil">
        <div class="self-stretch inline-flex flex-col justify-start items-start gap-6">
            <div class="self-stretch inline-flex justify-start items-start gap-6">
                <img class="w-20 h-20 rounded-full"
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?_gl=1*196xn2d*_ga*MTc4MDAwOTUxOC4xNzQ5OTgwMjgw*_ga_8JE65Q40S6*czE3NTAzMzEyMTQkbzMkZzEkdDE3NTAzMzEyMzMkajQxJGwwJGgw" />
                <div class="flex-1 inline-flex flex-col justify-start items-start gap-4">
                    <div class="self-stretch justify-start text-gray-600 text-xl font-medium font-['League_Spartan']">
                        Ezra Fanomezantsoa</div>
                    <div
                        class="self-stretch opacity-50 justify-start text-gray-600 text-base font-normal font-['League_Spartan']">
                        exemples@gmail.com</div>
                </div>
            </div>
            <div class="self-stretch inline-flex justify-between items-start">
                <div class="flex justify-center items-start gap-2">
                    <img :src="phone" alt="icon" />
                    <div class="justify-start text-black text-xs font-normal font-['League_Spartan']">+261 03 400 05
                    </div>
                </div>
                <div class="flex justify-center items-start gap-2">
                    <img :src="marker" alt="icon" />
                    <div class="justify-start text-black text-xs font-normal font-['League_Spartan']">Antananarivo 101
                    </div>
                </div>
                <div class="flex justify-center items-start gap-2">
                    <img :src="date" alt="icon" />
                    <div class="justify-start text-black text-xs font-normal font-['League_Spartan']">19/01/2002</div>
                </div>
            </div>
            <div class="inline-flex justify-start items-center gap-4">
                <img :src="animalIcon" alt="icon" />
                <div class="justify-start text-black text-base font-bold font-['League_Spartan']">0 Animal(aux)
                    enregistré(s)</div>
            </div>
        </div>
    </CardLayout>
</template>

<script setup>
import CardLayout from "./CardLayout.vue";

import date from '@/assets/icons/small-calendar.svg';
import marker from '@/assets/icons/small-marker.svg';
import phone from '@/assets/icons/small-phone.svg';
import animalIcon from '@/assets/icons/animalGreen.svg';
</script>
