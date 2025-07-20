<template>
    <!-- Cadre principal -->
    <div class="messaging-wrapper">

        <div class="header">
            <h2 class="title">Messagerie</h2>
            <button class="collab-btn">Collaboration active</button>
        </div>

        <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

        <!-- Barre de recherche -->
        <div class="search-bar">
            <img :src="searchIcon" alt="Search" class="icon" />
            <input type="text" placeholder="Rechercher" />
        </div>

        <!-- Contenu principal -->
        <div class="messaging-container">
            
            <!-- Colonne gauche -->
            <div class="sidebar">
                <div class="messages-header">
                    <span class="label">Mes messages</span>
                    <span class="count">34</span>
                </div>

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
                        <span v-if="conv.unread" class="badge">PATIENT</span>
                        <span v-else class="badge2">PRO</span>
                    </div>
                </div>
            </div>

            <!-- Colonne droite -->
            <div class="message-page">
                <div class="mp-header">
                    <img :src="image1" alt="User" class="user-pic" />
                    <div class="mp-header-info">
                        <span class="mp-username">Jane Doe</span>
                        <span class="mp-user-pro">PRO</span>
                    </div>
                    <div class="mp-header-status">
                        <img :src="ellipse" alt="online" class="mp-status-dot" />
                        <span class="mp-status-text">Vous collaborez actuellement</span>
                    </div>
                </div>

                <div class="rdv-card">
                    <img :src="calendar" alt="calendar" class="mp-calendar" />

                    <div class="rdv-info">
                        <div class="rdv-title">Suivi de santé de Sandra</div>
                        <div class="rdv-sub">
                            <img :src="ellipse" alt="ellipse" class="mp-rdv-ellipse" />
                            <span class="rdv-with">Avec Jane Doe</span>
                        </div>
                    </div>

                    <div class="self-stretch inline-flex justify-center items-center gap-5">
                        <div
                            class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal">
                            10:45 <br />AM
                        </div>
                        <div class="w-6 h-6 relative">
                            <div
                                class="w-[5.01px] h-[5.02px] left-[15.49px] top-[14.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100">
                            </div>
                            <div
                                class="w-4 h-0 left-[3.50px] top-[14.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100">
                            </div>
                            <div
                                class="w-[5.01px] h-[5.02px] left-[3.50px] top-[3.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100">
                            </div>
                            <div
                                class="w-4 h-0 left-[3.50px] top-[9.01px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100">
                            </div>
                            <div class="w-6 h-6 left-[24px] top-[24px] absolute origin-top-left -rotate-180 opacity-0"></div>
                        </div>
                        <div
                            class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal">
                            10:45 <br />AM
                        </div>
                    </div>

                </div>

                <div class="conversation-list">
                    <!-- Message patient -->
                    <div class="message-row left">
                        <img :src="image1" alt="User" class="msg-avatar" />
                        <div class="message-bubble">
                            Bonjour, j’aimerais prendre rendez-vous pour mon chien lundi prochain. Est-ce possible ?
                        </div>
                    </div>

                    <!-- Message pro -->
                    <div class="message-row right">
                        <div class="message-bubble">
                            Bonjour ! Oui, nous avons des créneaux disponibles lundi matin et après-midi.  
                            Préférez-vous une consultation en ligne ou sur place ?
                        </div>
                    </div>

                    <!-- Message patient -->
                    <div class="message-row left">
                        <img :src="image1" alt="User" class="msg-avatar" />
                        <div class="message-bubble">
                            En ligne si possible, vers 10h ce serait parfait. Merci !
                        </div>
                    </div>
                </div>

                <div class="input-message-row">
                    <input type="text" class="input-message" placeholder="Écrire vos messages ici ..." />
                    <button class="send-btn">
                        <img :src="sendIcon" alt="Envoyer" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import searchIcon from '@/assets/icons/breeder-search-black.svg'
import refreshIcon from '@/assets/icons/refresh.svg'
import avatar1 from '@/assets/images/image1.svg'
import avatar2 from '@/assets/images/image1.svg'

import image1 from '@/assets/images/image1.svg'
import ellipse from '@/assets/layers/Ellipse.svg'
import calendar from '@/assets/icons/calendar.svg'
import sendIcon from '@/assets/icons/send-icon.svg'


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
}
/* header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.title {
  font-size: 19px;
  font-weight: bold;
  color: #232323;
  margin: 0;
}
.collab-btn {
  background-color: #A0522D;
  box-shadow: 0 4px 12px 0 rgba(245, 158, 11, 0.25);
  color: #fff;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  padding: 10px 28px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s;
}
/* barre de recherche */
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
}
.messages-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 500;
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
  background: rgba(251, 191, 36, 0.20);
  color: var(--Accent---500, #A0522D);
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 6px;
}
.badge2 {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(22, 163, 74, 0.15);
  color: var(--Primary---600, #43A047);
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 6px;
}

/* Colonne droite */
.message-page {
  display: flex;
  width: 90%;
  padding: 0 0 24px 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--Neutral---200, #E5E7EB);
  background: #FFF;
  margin-top: 20px;
}
.mp-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  background: var(--Background, #F9F9F9);
  padding: 10px 29px;
  border-radius: 12px 12px 0 0;
}

.user-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.mp-header-info {
  display: flex;
  gap: 2px;
}
.mp-username {
  font-size: 17px;
  font-weight: bold;
  color: var(--Neutral---600, #4B5563);
}
.mp-user-pro {
  background: rgba(22, 163, 74, 0.15);
  color: var(--Primary---600, #43A047);
  font-size: 9px;
  border-radius: 6px;
  padding: 2px 6px;
  margin-top: 6px;
  margin-left: 10px;
}
.mp-header-status {
  display: flex;
  align-items: center;
  margin-left: 450px;
  gap: 10px;
}
.mp-status-dot {
  width: 9px;
  height: 9px;
}
.mp-status-text {
  font-size: 13px;
  color: var(--Neutral---600, #4B5563);
}

.rdv-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  box-shadow: 0 2px 6px 0 rgba(34,34,34,0.02);
  padding: 12px 29px;
  width: 97%;
  margin: 5px 12px 0 15px;

}


.rdv-calendar {
  width: 38px;
  height: 38px;
  margin-right: 13px;
}
.rdv-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 180px;
  flex: 1 1 0;
  margin-left: 15px;
}
.rdv-title {
  color: #2EA043;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 4px;
}
.rdv-sub {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #232323;
}
.rdv-ellipse {
  width: 10px;
  height: 10px;
}
.rdv-with {
  color: var(--Neutral---600, #4B5563);
  overflow: hidden;
  text-overflow: ellipsis;
}

/* conversation */
.conversation-list {
  width: 85%;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.message-row {
  display: flex;
  align-items: flex-end;
  gap: 12px;
}
.message-row.left {
  justify-content: flex-start;
}
.message-row.right {
  justify-content: flex-end;
}
.msg-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  align-self: flex-start;
}
.message-bubble {
  border: 1px solid rgba(22, 163, 74, 0.15);
  background: rgba(16, 185, 129, 0.05);
  color: var(--Neutral---600, #4B5563);
  font-size: 15px;
  border-radius: 14px;
  padding: 20px 20px;
  max-width: 340px;
  line-height: 1.5;
  box-shadow: 0 1px 3px 0 rgba(34,34,34,0.04);
  word-break: break-word;
}

/* message patient */
.input-message-row {
  display: flex;
  align-items: center;
  margin: 90px auto 0 auto;  
  width: 90%;                
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 10px 20px 8px 14px;
  box-shadow: 0 1px 3px 0 rgba(34,34,34,0.03);
}
.input-message {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  color: #232323;
  background: transparent;
}
.send-btn {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 6px 8px;
  display: flex;
  align-items: center;
}
.send-btn img {
  width: 25px;
  height: 25px;
  object-fit: contain;
}
</style>