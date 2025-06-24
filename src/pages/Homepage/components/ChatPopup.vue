<template>
  <!-- Fenêtre principale de la popup de chat -->
  <div class="fixed bottom-5 right-5 w-[450px] rounded-[15px] shadow-lg bg-white font-sans overflow-hidden z-[1000]">

    <!-- En-tête avec titre et statut "online" -->
    <div class="bg-green-600 px-4 py-2 flex justify-between items-center border-b border-gray-300">
      <div class="flex items-center gap-2 flex-1">
        <!-- Avatar -->
        <img :src="chatIcon" alt="Avatar IA" class="w-5 h-5" />
        <span class="text-white font-league">Conseiller Virtuel IA</span>
      </div>

      <div class="flex items-center gap-1.5">
        <img :src="Ellipse" alt="Ellipse" class="Ellipse.svg" />
        <span class="text-white text-sm font-league font-thin">Online</span>
      </div>
    </div>

    <!-- Corps du message -->
    <div class="flex items-start gap-2.5 p-5 bg-white min-h-[500px]">
      <img :src="chatIcon" alt="Avatar IA" class="chat-avatar-body" />
      <p class="message-bubble">
        Bonjour ! Je suis votre assistant vétérinaire virtuel propulsé par l’IA DeepSeek.
        Comment puis-je vous aider avec votre animal aujourd’hui ?
      </p>
    </div>

    <!-- Pied du chat -->
    <div class="flex items-center p-4 bg-white">
      <div class="relative flex-1">
        <input
          type="text"
          v-model="userMessage"
          placeholder="Écrire vos messages ici ..."
          class="w-full h-[50px] text-sm px-4 pr-12 rounded-[10px] border border-gray-200 outline-none"
        />
        <button @click="sendMessage" class="absolute top-1/2 right-2 -translate-y-1/2 w-7 h-7 flex items-center justify-center">
          <img :src="sendIcon" alt="Envoyer" class="w-6 h-6" />
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
// Importation des icônes
import chatIcon from '@/assets/icons/chat-avatar.svg'
import Ellipse from '@/assets/layers/Ellipse.svg'
import sendIcon from '@/assets/icons/send-icon.svg'
</script>

<style scoped>

/* Avatar dans le corps du message*/
.chat-avatar-body {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(16, 185, 129, 0.15);
  padding: 8px;
  box-sizing: content-box;
}

/* Bulle de message (bord, couleur, padding) */
.message-bubble {
  max-width: 95%;
  padding: 10px 16px;
  color: #43A047;
  font-family: "League Spartan";
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  border: 1px solid rgba(22, 163, 74, 0.15);
  background: rgba(16, 185, 129, 0.05);
  word-wrap: break-word;
}
</style>
