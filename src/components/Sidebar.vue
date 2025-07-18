<template>
    <div class="w-90 h-full p-6 bg-primary-600 flex flex-col justify-between">
        <!-- Logo + Menu -->
        <div class="flex flex-col gap-24">
            <img class="w-28 h-9" src="../assets/animoplus_header.png" />

            <!-- Menu principal -->
            <nav class="flex flex-col gap-8">
                <RouterLink v-for="item in menuItems" :key="item.label" :to="item.link"
                    class="flex items-center gap-4 font-medium text-base hover:underline transition"
                    :class="route.path === item.link ? 'text-accent-400' : 'text-white'"
                    >
                    <img :src="item.icon" alt="menu icon" class="feature-icon w-6"
                        :class="{ 'filter-accent': route.path === item.link }"
                         />
                    <span>{{ item.label }}</span>
                </RouterLink>
            </nav>
        </div>

        <!-- Espace client -->
        <div>
            <RouterLink to="/"
                class="flex items-center gap-4 text-white font-['League_Spartan'] font-medium text-base hover:underline transition">
                <img :src="userIconWhite" alt="user profil" class="feature-icon w-6">
                <span>Espace client</span>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

import dashboardIcon from '@/assets/icons/dashboard.svg';
import animalIcon from '@/assets/icons/animal.svg';
import appointmentIcon from '@/assets/icons/appointment.svg';
import chatIcon from '@/assets/icons/chat.svg';
import documentIcon from '@/assets/icons/document.svg';
import searchSpecial from '@/assets/icons/special-search.svg';
import stockIcon from '@/assets/icons/stock-management.svg';
import sheetIcon from '@/assets/icons/sheet-icon.svg';
import taskIcon from '@/assets/icons/task.svg';
import userIconWhite from '@/assets/icons/user-profil-white.svg';

const route = useRoute();

const props = defineProps({
    user: {
        type: String,
        default: "",
    },
});

const menuItems = [
    {
        label: "Tableau de bord",
        icon: dashboardIcon,
        user: "",
        link: "/dashboard"
    },
    {
        label: "Agenda",
        icon: appointmentIcon,
        user: "pro",
        link: "/diaryPro"
    },
    {
        label: "Mes animaux",
        icon: animalIcon,
        user: "client",
        link: "/animals"
    },
    {
        label: "Prise de rendez-vous",
        icon: appointmentIcon,
        user: "client",
        link: "/appointment"
    },
    {
        label: "Messagerie",
        icon: chatIcon,
        user: "client",
        link: "/messaging"
    },
    {
        label: "Gestion des services",
        icon: animalIcon,
        user: "pro",
        link: "/services"
    },
    {
        label: "Tâches",
        icon: taskIcon,
        user: "pro",
        link: "/tasks"
    },
    {
        label: "Comptabilité",
        icon: sheetIcon,
        user: "pro",
        link: "/accounting"
    },
    {
        label: "Mes documents",
        icon: documentIcon,
        user: "client",
        link: "/documents"
    },
    {
        label: "Documents professionnels",
        icon: documentIcon,
        user: "pro",
        link: "/documentsPro"
    },
    {
        label: "Recherche par spécialité",
        icon: searchSpecial,
        user: "client",
        link: "/speciality"
    },
    {
        label: "Gestion de stock",
        icon: stockIcon,
        user: "pro",
        link: "/"
    },
];
</script>
