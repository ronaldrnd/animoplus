<script setup>
import { RouterView } from 'vue-router'
import { auth } from './stores/auth.js'

import AppNavbar from './components/AppNavbar.vue';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <!-- Non connecté -->
  <Navbar v-if="!auth.isAuthenticated" />
  <RouterView v-if="!auth.isAuthenticated" />
  <Footer v-if="!auth.isAuthenticated" />

  <!-- Connecté - Client -->
  <div v-else-if="auth.role === 'client'" class="layout">
    <Sidebar role="client" />
    <div class="main flex flex-col h-screen w-full overflow-hidden px-[24px]">
      <div class="appbar">
        <AppNavbar role="client" />
      </div>
      <div class="content flex-1 overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>

  <!-- Connecté - Pro -->
  <div v-else-if="auth.role === 'pro'" class="layout">
    <Sidebar role="pro" />
    <div class="main flex flex-col h-screen w-full overflow-hidden px-[24px]">
      <div class="appbar">
        <AppNavbar role="pro" />
      </div>
      <div class="content flex-1 overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  /* gap: 24px; */
  height: 100vh;
}
.appbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}
</style>
