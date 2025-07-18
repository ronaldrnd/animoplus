<template>
    <!-- Cadre principal -->
    <div class="messaging-wrapper">

        <!-- En-tête : Titre + trait + barre de recherche -->
        <div class="header">
            <h2 class="title">Messagerie</h2>

            <!-- Séparateur -->
            <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

            <!-- Barre de recherche -->
            <div class="search-bar">
                <img :src="searchIcon" alt="Search" class="icon" />
                <input type="text" placeholder="Rechercher" />
            </div>
        </div>

        <!-- Contenu principal -->
        <div class="messaging-container">
            <!-- Colonne gauche -->
            <div class="sidebar">
                <!-- En-tête des messages -->
                <div class="messages-header">
                    <span class="label">Mes messages</span>
                    <span class="count">34</span>
                </div>

                <!-- Bouton charger -->
                <button class="load-more">
                    <img :src="refreshIcon" alt="refresh" class="icon" />
                    Charger plus de conversations
                </button>

                <!-- Liste des messages -->
                <div class="message-list">
                    <div
                        v-for="(conv, index) in conversations"
                        :key="index"
                        class="message-item"
                    >
                        <div class="avatar-wrapper">
                          <img :src="conv.image" class="avatar" />
                          <span class="dot" :class="{ 'unread': conv.unread }"></span>
                        </div>
                        <div class="message-info">
                            <div class="top-row">
                                <div class="name-wrapper">
                                  <span class="name">{{ conv.name }}</span>
                                </div>

                            </div>
                            <div class="message-bottom-row">
                              <p class="preview">{{ conv.message }}</p>
                              <span class="time">{{ conv.time }}</span>
                            </div>
                        </div>
                        <span v-if="conv.unread" class="badge">Non lu</span>
                    </div>
                </div>
            </div>

            <!-- Colonne droite -->
            <div class="message-placeholder">
                <img :src="emptyIcon" alt="placeholder" class="placeholder-img" />
                <h3>Messages</h3>
                <p>Sélectionnez un professionnel pour démarrer une conversation.</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import searchIcon from '@/assets/icons/breeder-search-black.svg'
import refreshIcon from '@/assets/icons/refresh.svg'
import emptyIcon from '@/assets/icons/chat-empty.svg'
import avatar1 from '@/assets/images/image1.svg'
import avatar2 from '@/assets/images/image1.svg'

const conversations = [
  {
    name: 'Jane Doe',
    message: 'Hi, I want make enquiries about your...',
    time: '12:55 am',
    unread: true,
    image: avatar1
  },
  {
    name: 'Janet Adebayo',
    message: 'Hi, I want make enquiries about your...',
    time: '12:55 am',
    unread: false,
    image: avatar2
  },
  {
    name: 'Kunle Adekunle',
    message: 'Hi, I want make enquiries about your...',
    time: '12:55 am',
    unread: false,
    image: avatar1
  },
  {
    name: 'Jane Doe',
    message: 'Hi, I want make enquiries about your...',
    time: '12:55 am',
    unread: true,
    image: avatar1
  },
  {
    name: 'Kunle Adekunle',
    message: 'Hi, I want make enquiries about your...',
    time: '12:55 am',
    unread: false,
    image: avatar1
  },
  {
    name: 'Jane Doe',
    message: 'Hi, I want make enquiries about your...',
    time: '12:55 am',
    unread: false,
    image: avatar1
  },
  {
    name: 'Kunle Adekunle',
    message: 'Hi, I want make enquiries about your...',
    time: '12:55 am',
    unread: true,
    image: avatar1
  }
]
</script>

<style scoped>
.messaging-wrapper {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 24px;
  background-color: #fff;
  font-family: "League Spartan";
}

.messaging-container {
  display: flex;
  gap: 20px;
}

/* Titre + trait */
.header {
  padding: 24px;
  padding-bottom: 0;
  background-color: #fff;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: #2E2E30;
  margin-bottom: 12px;
  font-family: "League Spartan";
}

.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 8px 12px;
  background-color: #fff;
  width: 100%;
  margin-bottom: 0;
}

.search-bar .icon {
  width: 16px;
  margin-right: 8px;
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: "League Spartan";
  color: #2E2E30;
  background: transparent;
}


/* Conteneur principal */
.messaging-container {
  display: flex;
  gap: 20px;
}

/* Colonne gauche */
.sidebar {
  width: 30%;
  padding: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2E2E30;
  font-family: "League Spartan";
}

.messages-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 500;
}

.count {
  color: #999;
}

.load-more {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #fff;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  font-family: "League Spartan";
  color: #4B5563;
  margin-bottom: 20px;
  cursor: pointer;
  width: 354px;
  height: 45px;
}

.load-more .icon {
  width: 25px;
}

/* Liste de messages */
.message-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 12px;
  cursor: pointer;
  border-bottom: 1px solid var(--Stroke, #F1F3F9);
  position: relative;
}

.avatar-wrapper {
  position: relative;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 25%;
  object-fit: cover;
}

.message-info {
  flex: 1;
}

.top-row {
  display: flex;
  justify-content: space-between;
}

.name-wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  position: absolute;
  top: 1px;
  right: -4px;
  width: 10px;
  height: 10px;
  background-color: #D1D5DB;
  border: 2px solid white;
  border-radius: 50%;
}

.dot.unread {
  background-color: #3B82F6;
}

.name {
  font-weight: 700;
  font-size: 14px;
  color: #45464E;
}

.message-bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  
}

.time {
  font-size: 11px;
  color: #A1A1AA;
}

.preview {
  font-size: 11px;
  color: #4B5563;
  margin-top: 2px;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--Secondary-20, #FEF5EA);
  color: var(--Black-100, #1C1D22);
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 5px;
}

/* Placeholder */
.message-placeholder {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 24px;
  font-family: "League Spartan";
  margin-top: 16px;
  background-color: #fff;
  max-width: 866px; 
  height: 820px;
}

.placeholder-img {
  width: 170px;
  height: 170px;
  margin-bottom: 12px;
  padding: 16px;
  object-fit: contain;
}

.message-placeholder h3 {
  color: #000;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
}

.message-placeholder p {
  color: #4B5563;
  font-size: 14px;
}
</style>