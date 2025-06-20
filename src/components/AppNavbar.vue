<template>
  <div class="w-full py-4 flex justify-between items-center flex-wrap gap-4">
    <!-- Gauche : titre et support -->
    <div class="flex flex-col">
      <h1 class="text-black text-xl font-bold font-['League_Spartan']">
        {{ role === 'client' ? 'Profil client' : 'Profil professionnel' }}
      </h1>
      <a href="#" class="text-gray-600 text-base underline font-['League_Spartan']">
        Contacter le support
      </a>
    </div>

    <!-- Droite : avatar, profil et déconnexion -->
    <div class="flex items-center gap-8 flex-wrap">

      <!-- Avatar -->
      <div class="p-2 rounded-full outline outline-1 outline-primary-600 flex items-center justify-center cursor-pointer">
        <img :src="botIcon" alt="bot icon" class="feature-icon w-6">
      </div>

      <!-- Lien profil -->
      <div class="flex items-center gap-2 cursor-pointer">
        <img :src="userIcon" alt="user profil" class="feature-icon w-6">
        <span class="text-primary-600 text-base font-normal font-['League_Spartan']">Mon profil</span>
      </div>

      <!-- Bouton déconnexion -->
      <button
        @click="logout"
        class="px-4 py-2 bg-white rounded-xl shadow outline outline-1 outline-gray-200 flex items-center gap-2 hover:bg-gray-50 transition"
      >
        <span class="text-red-500 text-base font-['League_Spartan']">Déconnexion</span>
        <img :src="logoutIcon" alt="log out" class="feature-icon w-6">
      </button>
    </div>
  </div>
</template>

<script setup>
import { auth } from '@/stores/auth'
import { useRouter } from 'vue-router'

import logoutIcon from '@/assets/icons/logout.svg';
import userIcon from '@/assets/icons/user-profil.svg';
import botIcon from '@/assets/icons/bot.svg';

const router = useRouter()

defineProps({
  role: {
    type: String,
    default: ''
  }
})

function logout() {
  auth.isAuthenticated = false
  auth.role = null
  router.push('/login')
}
</script>
