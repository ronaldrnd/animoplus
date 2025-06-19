<template>
  <div class="w-full flex items-center justify-center my-16">
    <div class="background absolute inset-0 bg-cover bg-center bg-no-repeat z-0"></div>

    <div
      class="w-[572px] z-10 px-10 py-8 bg-white shadow-[0px_82px_40px_-14px_rgba(100,100,100,0.08)] outline outline-1 outline-neutral-200 rounded-xl flex flex-col items-center gap-8">

      <h1 class="text-green-600 text-3xl font-bold text-center">Connexion</h1>
      <p class="text-neutral-500 text-lg text-center">Prenez soin de votre compagnon en 1 clic</p>

      <div class="w-full flex flex-col gap-4">

        <label class="w-full flex flex-col gap-1">
          <span class="text-zinc-600 text-sm font-medium uppercase">Adresse email</span>
          <input type="email" placeholder="johndoe@example.com"
            class="w-full h-12 px-4 bg-white border border-neutral-200 rounded outline-none focus:ring-2 focus:ring-green-600" />
        </label>

        <label class="w-full flex flex-col gap-1">
          <span class="text-zinc-600 text-sm font-medium uppercase">Mot de passe</span>
          <input type="password" placeholder="********"
            class="w-full h-12 px-4 bg-white border border-neutral-200 rounded outline-none focus:ring-2 focus:ring-green-600" />
        </label>

        <div class="flex items-center gap-2 text-sm text-zinc-600">
          <input type="checkbox" id="remember" class="w-4 h-4 border border-gray-400" />
          <label for="remember">Se souvenir de moi</label>
        </div>

        <button @click="loginAs('client')"
          class="w-full py-3 bg-green-600 text-white rounded-xl text-lg font-medium hover:bg-green-700 transition">
          Se connecter en tant que client
        </button>

        <button @click="loginAs('pro')"
          class="w-full py-3 bg-green-600 text-white rounded-xl text-lg font-medium hover:bg-green-700 transition">
          Se connecter en tant que professionnel
        </button>
      </div>

      <p class="text-gray-600 text-lg">
        Pas encore de compte ?
        <router-link to="/login" class="text-green-600 font-semibold underline">Inscrivez-vous</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { auth } from '@/stores/auth'

const router = useRouter()

function loginAs(role) {
  auth.isAuthenticated = true
  auth.role = role
  if (role === 'client') {
    router.push('/dashboard')
  } else if (role === 'pro') {
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.background {
  background-image: url("../../assets/images/bg-login.svg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
</style>