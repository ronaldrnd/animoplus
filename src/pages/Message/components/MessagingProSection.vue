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
            <input 
                type="text" 
                placeholder="Rechercher un utilisateur..." 
                v-model="searchQuery"
                @input="searchUsers"
                @focus="showSearchResults = true"
                @keyup.enter="validateSearch"
            />
            <button 
                @click="validateSearch"
                :disabled="!searchQuery.trim() || isSearching"
                class="search-validate-btn"
                title="Valider la recherche"
            >
                Valider
            </button>
        </div>

        <!-- Modal des résultats de recherche -->
        <div v-if="showSearchResults && searchQuery" class="search-modal-overlay" @click="closeSearchModal">
            <div class="search-modal" @click.stop>
                <div class="search-modal-header">
                    <h3 class="search-modal-title">Résultats de recherche</h3>
                    <button @click="closeSearchModal" class="search-modal-close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                
                <div class="search-modal-content">
                    <div v-if="isSearching" class="search-loading">
                        <div class="loading-spinner"></div>
                        Recherche en cours...
                    </div>
                    <div v-else-if="searchResults.length === 0" class="no-results">
                        <div class="no-results-icon">🔍</div>
                        <p>Aucun utilisateur trouvé</p>
                        <p class="no-results-subtitle">Essayez avec un autre terme de recherche</p>
                    </div>
                    <div v-else class="search-results-list">
                        <div 
                            v-for="user in searchResults" 
                            :key="user.id"
                            @click="selectUser(user)"
                            class="search-result-item"
                        >
                            <img :src="user.avatar || avatar1" :alt="user.name" class="result-avatar" />
                            <div class="result-info">
                                <div class="result-name">{{ user.name }}</div>
                                <div class="result-email">{{ user.email }}</div>
                                <div v-if="user.specialite" class="result-specialty">{{ user.specialite }}</div>
                            </div>
                            <div class="result-badge" :class="user.role === 'veterinaire' ? 'badge2' : 'badge'">
                                {{ user.role === 'veterinaire' ? 'PRO' : 'PATIENT' }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
import { ref, onMounted } from 'vue'
import { auth } from '@/stores/auth.js'
import searchIcon from '@/assets/icons/breeder-search-black.svg'
import refreshIcon from '@/assets/icons/refresh.svg'
import avatar1 from '@/assets/images/image1.svg'
import avatar2 from '@/assets/images/image1.svg'

import image1 from '@/assets/images/image1.svg'
import ellipse from '@/assets/layers/Ellipse.svg'
import calendar from '@/assets/icons/calendar.svg'
import sendIcon from '@/assets/icons/send-icon.svg'

const API_BASE_URL = 'http://localhost:8000/api/v1'

// Search functionality
const searchQuery = ref('')
const searchResults = ref([])
const showSearchResults = ref(false)
const isSearching = ref(false)
let searchTimeout = null

// Conversations
const conversations = ref([
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
])

// Search users with debounce
async function searchUsers() {
  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }
  
  searchTimeout = setTimeout(async () => {
    if (!searchQuery.value.trim()) {
      searchResults.value = []
      return
    }
    
    isSearching.value = true
    
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('No authentication token found')
        return
      }
      
      const response = await fetch(`${API_BASE_URL}/users`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        const users = data.data || data.users || data
        
        // Filter users based on search query and exclude current user
        const filteredUsers = users.filter(user => 
          user.id !== auth.user?.id &&
          (user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
           user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
           (user.specialite && user.specialite.toLowerCase().includes(searchQuery.value.toLowerCase())))
        )
        
        searchResults.value = filteredUsers.slice(0, 10) // Limit to 10 results
      } else {
        console.error('Failed to fetch users')
        searchResults.value = []
      }
    } catch (error) {
      console.error('Error searching users:', error)
      searchResults.value = []
    } finally {
      isSearching.value = false
    }
  }, 300) // 300ms debounce
}

// Validate search - trigger immediate search
async function validateSearch() {
  if (!searchQuery.value.trim()) {
    return
  }
  
  // Clear any pending debounced search
  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }
  
  // Show search results immediately
  showSearchResults.value = true
  
  // Perform immediate search
  isSearching.value = true
  
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      console.error('No authentication token found')
      return
    }
    
    const response = await fetch(`${API_BASE_URL}/users`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      const users = data.data || data.users || data
      
      // Filter users based on search query and exclude current user
      const filteredUsers = users.filter(user => 
        user.id !== auth.user?.id &&
        (user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
         user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
         (user.specialite && user.specialite.toLowerCase().includes(searchQuery.value.toLowerCase())))
      )
      
      searchResults.value = filteredUsers.slice(0, 10) // Limit to 10 results
    } else {
      console.error('Failed to fetch users')
      searchResults.value = []
    }
  } catch (error) {
    console.error('Error searching users:', error)
    searchResults.value = []
  } finally {
    isSearching.value = false
  }
}

// Select user to start conversation
async function selectUser(user) {
  try {
    // Hide search results
    showSearchResults.value = false
    searchQuery.value = ''
    searchResults.value = []
    
    // Check if conversation already exists or create new one
    await startConversationWithUser(user)
    
  } catch (error) {
    console.error('Error selecting user:', error)
  }
}

// Start conversation with selected user
async function startConversationWithUser(user) {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Vous devez être connecté pour envoyer des messages')
      return
    }
    
    // Check if conversation already exists
    const response = await fetch(`${API_BASE_URL}/messages/conversation/${user.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      console.log('Conversation found:', data)
      
      // Add or update conversation in the list
      const existingConvIndex = conversations.value.findIndex(conv => conv.userId === user.id)
      const newConv = {
        userId: user.id,
        name: user.name,
        message: 'Nouvelle conversation',
        time: 'maintenant',
        unread: false,
        image: user.avatar || avatar1,
        role: user.role
      }
      
      if (existingConvIndex >= 0) {
        conversations.value[existingConvIndex] = newConv
      } else {
        conversations.value.unshift(newConv)
      }
      
      // TODO: Switch to this conversation in the UI
      console.log(`Conversation started with ${user.name}`)
      
    } else {
      console.log('No existing conversation, ready to send first message')
      
      // Add new conversation to the list
      const newConv = {
        userId: user.id,
        name: user.name,
        message: 'Nouvelle conversation',
        time: 'maintenant',
        unread: false,
        image: user.avatar || avatar1,
        role: user.role
      }
      
      conversations.value.unshift(newConv)
    }
    
  } catch (error) {
    console.error('Error starting conversation:', error)
  }
}

// Close search modal
function closeSearchModal() {
  showSearchResults.value = false
  searchQuery.value = ''
  searchResults.value = []
}

// Close search results when clicking outside (no longer needed for modal)
function handleClickOutside(event) {
  // Modal handles its own closing, so this is no longer needed
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

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
  position: relative;
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

.search-validate-btn {
  background-color: #A0522D;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 8px;
  transition: background-color 0.2s, opacity 0.2s;
}

.search-validate-btn:hover:not(:disabled) {
  background-color: #8B4513;
}

.search-validate-btn:disabled {
  background-color: #D1D5DB;
  color: #9CA3AF;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Search Modal */
.search-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.search-modal {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.search-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #E5E7EB;
  background-color: #F9FAFB;
}

.search-modal-title {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

.search-modal-close {
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.search-modal-close:hover {
  background-color: #E5E7EB;
  color: #374151;
}

.search-modal-content {
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto;
}

.search-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 20px;
  text-align: center;
  color: #6B7280;
  font-size: 14px;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #E5E7EB;
  border-top: 3px solid #A0522D;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 40px 20px;
  text-align: center;
  color: #6B7280;
}

.no-results-icon {
  font-size: 48px;
  margin-bottom: 8px;
}

.no-results p {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.no-results-subtitle {
  font-size: 14px !important;
  font-weight: 400 !important;
  color: #9CA3AF !important;
}

.search-results-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-result-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #F3F4F6;
  transition: background-color 0.2s;
  position: relative;
}

.search-result-item:hover {
  background-color: #F9FAFB;
}

.search-result-item:last-child {
  border-bottom: none;
}

.result-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.result-info {
  flex: 1;
  min-width: 0;
}

.result-name {
  font-weight: 600;
  font-size: 14px;
  color: #374151;
  margin-bottom: 2px;
}

.result-email {
  font-size: 12px;
  color: #6B7280;
  margin-bottom: 2px;
}

.result-specialty {
  font-size: 11px;
  color: #9CA3AF;
  font-style: italic;
}

.result-badge {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 6px;
  font-weight: 500;
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