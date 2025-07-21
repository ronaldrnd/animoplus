<!-- AppointmentPage.vue -->
<template>
  <section class="border border-neutral-200 rounded-[10px] p-8 flex flex-col gap-8">

    <TitleDashboard 
      title="Mes rendez-vous professionnels" 
      :has-button="true" 
      btn-title="Ajouter un rendez-vous" 
      :icon="smallCalendar" 
      @on-click-btn="showAddEventSection = true" 
    />

    <hr />

    <div class="flex flex-col gap-6" :class="auth.role === 'pro' ? 'flex-col-reverse' : ''">
      <div class="flex gap-10 w-full bg-white">
        <!-- Partie gauche : Calendrier -->
        <div class="">
          <EventCalendar
            ref="eventCalendar"
            :events="calendarEvents"
            :initial-date="selectedDate"
            :max-events-per-day="3"
            footer-text="Liste des rendez-vous"
            :arrow-down="arrowDown"
            @day-click="onDayClick"
            @event-click="onEventClick"
            @more-events-click="onMoreEventsClick"
            @month-change="onMonthChange"
          />
        </div>

        <!-- Partie droite : formulaire -->
        <div class="min-w-[40%] flex flex-col gap-4" v-if="showAddEventSection">
          <h3 class="form-title">Ajouter un rendez-vous</h3>
          
          <div class="form-group">
            <label>Date sélectionnée</label>
            <input 
              type="date" 
              class="input" 
              v-model="formData.date"
              @change="onDateChange"
            />
          </div>

          <div class="form-group">
            <label>Titre</label>
            <input 
              type="text" 
              class="input" 
              v-model="formData.title"
              placeholder="Rendez-vous avec Mr. joe" 
            />
          </div>

          <div class="form-group">
            <label>Type d'événement</label>
            <div class="select" @click="toggleEventTypeDropdown">
              <span>{{ selectedEventType.label }}</span>
              <img :src="arrowDown" class="select-arrow" alt="flèche" />
            </div>
            <div v-if="showEventTypeDropdown" class="dropdown">
              <div 
                v-for="type in eventTypes" 
                :key="type.value"
                class="dropdown-item"
                @click="selectEventType(type)"
              >
                <span :class="['event-preview', type.value]">●</span>
                {{ type.label }}
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Sélection de l'animal</label>
            <div class="select" @click="toggleAnimalDropdown">
              <span>{{ selectedAnimal.label }}</span>
              <img :src="arrowDown" class="select-arrow" alt="flèche" />
            </div>
            <div v-if="showAnimalDropdown" class="dropdown">
              <div 
                v-for="animal in animalTypes" 
                :key="animal.value"
                class="dropdown-item"
                @click="selectAnimal(animal)"
              >
                {{ animal.label }}
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Heure de début</label>
            <input 
              type="time" 
              class="input" 
              v-model="formData.startTime"
            />
          </div>

          <div class="form-group">
            <label>Heure de fin</label>
            <input 
              type="time" 
              class="input" 
              v-model="formData.endTime"
            />
          </div>

          <div class="form-group">
            <label>Adresse de recherche</label>
            <div class="input-with-btn">
              <input 
                type="text" 
                class="input" 
                v-model="formData.address"
                placeholder="Antananarivo, 101" 
              />
              <button class="btn-location-in">
                <img :src="locationIcon" alt="Localiser" />
                Localiser
              </button>
            </div>
          </div>

          <div class="form-group">
            <label>Recherche de service</label>
            <div class="input-icon-row">
              <input 
                type="text" 
                class="input" 
                v-model="formData.service"
                placeholder="Nom, Profession ou Prestation" 
              />
              <button class="btn-search" @click="findServiceModal = true">
                <img :src="searchIcon" alt="Recherche" />
              </button>
            </div>
          </div>

          <div class="form-group">
            <label class="">Lien vers le rendez-vous en ligne</label>
            <div class="inline-online-row">
              <div class="switch-row">
                <label class="switch">
                  <input 
                    type="checkbox" 
                    v-model="formData.isOnline"
                    @change="onOnlineToggle"
                  />
                  <span class="slider"></span>
                </label>
                <span class="switch-label">En ligne</span>
              </div>
            </div>

            <template v-if="formData.isOnline && formData.meetLink">
              <a 
                :href="formData.meetLink" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center bg-[#FFF] border border-[#ededed] rounded-[9px] px-[11px] h-10 text-[13px] font-medium text-[#965C2A] gap-2 cursor-pointer min-w-[250px] hover:bg-gray-50 mt-2"
              >
                <img :src="googleMeetIcon" alt="meet" class="w-[30px] h-[30px]" />
                Go to Meet link
              </a>
            </template>
          </div>

          <div class="form-actions">
            <button class="btn-cancel" @click="resetForm">Annuler</button>
            <button class="btn-add" @click="addAppointment">Ajouter</button>
          </div>
        </div>
      </div>

      <!-- Liste des rendez-vous -->
      <ListAppointment :appointment="rendezVousList" @show-appointment-detail="showAppointmentDetail" />
    </div>

    <!-- Modals -->
    <ShowAppointment 
      v-if="showModal" 
      :appointment="selectedAppointmentData"
      @close="showModal = false" 
    />
    <FindService v-if="findServiceModal" @close="findServiceModal = false" />
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { auth } from '@/stores/auth'

import TitleDashboard from '@/components/common/TitleDashboard.vue'
import EventCalendar from '@/components/EventCalendar.vue'
import ShowAppointment from './ShowAppointment.vue'
import FindService from './FindService.vue'
import ListAppointment from './ListAppointment.vue'

// Icons
import smallCalendar from '@/assets/icons/appointment.svg'
import arrowDown from '@/assets/icons/chevron-down.svg'
import locationIcon from '@/assets/icons/location-white.svg'
import searchIcon from '@/assets/icons/search-icon.svg'
import googleMeetIcon from '@/assets/icons/google-meet.svg'

// Reactive variables
const showModal = ref(false)
const findServiceModal = ref(false)
const selectedDate = ref(new Date())
const showEventTypeDropdown = ref(false)
const showAnimalDropdown = ref(false)
const selectedAppointmentData = ref(null)

// Form data - Complété avec toutes les données collectées
const formData = ref({
  date: '',
  title: '',
  eventType: 'green',
  animal: '',
  startTime: '',
  endTime: '',
  address: 'Antananarivo, 101',
  service: '',
  isOnline: false,
  meetLink: ''
})

// Event types for the calendar
const eventTypes = ref([
  { value: 'green', label: 'Rendez-vous standard' },
  { value: 'red', label: 'Urgence' },
  { value: 'blue', label: 'Consultation' },
  { value: 'orange', label: 'Suivi' }
])

// Animal types options
const animalTypes = ref([
  { value: 'chien', label: 'Chien' },
  { value: 'chat', label: 'Chat' },
  { value: 'oiseau', label: 'Oiseau' },
  { value: 'lapin', label: 'Lapin' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'reptile', label: 'Reptile' },
  { value: 'poisson', label: 'Poisson' },
  { value: 'autre', label: 'Autre' }
])

const selectedEventType = ref(eventTypes.value[0])
const selectedAnimal = ref({ value: '', label: 'Sélectionner une espèce' })
const showAddEventSection = ref(false)

// Existing appointments data - Mis à jour avec les événements du calendrier
const rendezVousList = ref([
  {
    jour: "Lundi",
    date: "17 Juin 2025",
    enLigne: true,
    titre: "Rendez-vous avec Vétérinaire urgence",
    heureDebut: "08:45",
    heureFin: "10:45",
    meetLink: "https://meet.google.com/abc-defg-hij",
    animal: "chien",
    eventType: "red",
    address: "Antananarivo, 101",
    service: "Consultation urgence"
  },
  {
    jour: "Mercredi", 
    date: "12 Juillet 2025",
    enLigne: false,
    titre: "Consultation avec Dr. martine Vétérinaire",
    heureDebut: "08:45",
    heureFin: "10:45",
    animal: "chat",
    eventType: "blue",
    address: "Antananarivo, 101",
    service: "Consultation générale"
  },
  {
    jour: "Mercredi",
    date: "12 Juillet 2025", 
    enLigne: false,
    titre: "Suivi avec Dr. martine Vétérinaire",
    heureDebut: "14:30",
    heureFin: "16:30",
    animal: "chien",
    eventType: "orange", 
    address: "Antananarivo, 101",
    service: "Suivi post-opératoire"
  }
])

// Calendar events computed property
const calendarEvents = computed(() => {
  const events = []
  
  // Convert existing appointments to calendar events
  rendezVousList.value.forEach((rdv, index) => {
    const [day, month, year] = rdv.date.split(' ')
    const monthMap = {
      'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
      'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
    }
    
    const eventDate = new Date(parseInt(year), monthMap[month], parseInt(day))
    
    events.push({
      id: `rdv-${index}`,
      title: rdv.titre.length > 15 ? rdv.titre.substring(0, 15) + '...' : rdv.titre,
      date: eventDate,
      type: rdv.eventType || (rdv.enLigne ? 'blue' : 'green'),
      startTime: rdv.heureDebut,
      endTime: rdv.heureFin,
      isOnline: rdv.enLigne,
      fullData: rdv
    })
  })
  
  return events
})

// Methods
const onDayClick = (day) => {
  showAddEventSection.value = true
  // Correction du bug de date - utiliser directement la date cliquée
  selectedDate.value = new Date(day.fullDate)
  formData.value.date = new Date(day.fullDate.getTime() + 86400000).toISOString().split('T')[0]
  console.log('Day clicked:', day)
}

const onEventClick = (event) => {
  // Ouvrir le modal avec les données de l'événement
  if (event.fullData) {
    selectedAppointmentData.value = event.fullData
    showModal.value = true
  }
  console.log('Event clicked:', event)
}

const onMoreEventsClick = (day) => {
  console.log('More events clicked for day:', day)
}

const onMonthChange = (newDate) => {
  console.log('Month changed to:', newDate)
}

const onDateChange = () => {
  selectedDate.value = new Date(formData.value.date)
}

const toggleEventTypeDropdown = () => {
  showEventTypeDropdown.value = !showEventTypeDropdown.value
  showAnimalDropdown.value = false // Fermer l'autre dropdown
}

const toggleAnimalDropdown = () => {
  showAnimalDropdown.value = !showAnimalDropdown.value
  showEventTypeDropdown.value = false // Fermer l'autre dropdown
}

const selectEventType = (type) => {
  selectedEventType.value = type
  formData.value.eventType = type.value
  showEventTypeDropdown.value = false
}

const selectAnimal = (animal) => {
  selectedAnimal.value = animal
  formData.value.animal = animal.value
  showAnimalDropdown.value = false
}

// Fonction pour générer automatiquement un lien Google Meet
const generateMeetLink = () => {
  const meetId = Math.random().toString(36).substring(2, 15)
  return `https://meet.google.com/${meetId}`
}

const onOnlineToggle = () => {
  // Générer automatiquement un lien Google Meet quand "En ligne" est activé
  if (formData.value.isOnline) {
    formData.value.meetLink = generateMeetLink()
  } else {
    formData.value.meetLink = ''
  }
}

const addAppointment = () => {
  if (!formData.value.title || !formData.value.date || !formData.value.startTime || !formData.value.endTime) {
    alert('Veuillez remplir tous les champs obligatoires')
    return
  }

  const newAppointment = {
    jour: getDayName(new Date(formData.value.date)),
    date: formatDate(new Date(formData.value.date)),
    enLigne: formData.value.isOnline,
    titre: formData.value.title,
    heureDebut: formData.value.startTime,
    heureFin: formData.value.endTime,
    meetLink: formData.value.meetLink, // Lien Meet généré automatiquement
    animal: formData.value.animal,
    eventType: formData.value.eventType,
    address: formData.value.address,
    service: formData.value.service
  }

  rendezVousList.value.push(newAppointment)
  resetForm()
  alert('Rendez-vous ajouté avec succès!')
}

const resetForm = () => {
  showAddEventSection.value = false
  formData.value = {
    date: '',
    title: '',
    eventType: 'green',
    animal: '',
    startTime: '',
    endTime: '',
    address: 'Antananarivo, 101',
    service: '',
    isOnline: false,
    meetLink: ''
  }
  selectedEventType.value = eventTypes.value[0]
  selectedAnimal.value = { value: '', label: 'Sélectionner une espèce' }
}

const getDayName = (date) => {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  return days[date.getDay()]
}

const formatDate = (date) => {
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ]
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

// détails d'un rendez-vous
const showAppointmentDetail = (appointment) => {
  selectedAppointmentData.value = appointment
  showModal.value = true
}

// Close dropdown when clicking outside
const closeDropdowns = (event) => {
  if (!event.target.closest('.form-group')) {
    showEventTypeDropdown.value = false
    showAnimalDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdowns)
  // Set initial form date to today
  formData.value.date = new Date().toISOString().split('T')[0]
})
</script>

<style scoped>
.form-panel {
  background: #fff;
  min-width: 40%;
  padding-left: 18px;
  margin-top: 20px;
}

.form-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--Neutral---600, #4B5563);
  position: relative;
}

.form-group label {
  font-size: 15px;
  font-weight: 500;
}

.form-group input {
  color: var(--Neutral---600, #4B5563);
}

.form-group span {
  color: var(--Neutral---600, #4B5563);
}

.input,
.select {
  border: 1px solid #E0E0E0;
  border-radius: 7px;
  padding: 9px 12px;
  font-size: 15px;
  background: #fff;
  color: #222;
  width: 100%;
}

.select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 7px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-item {
  padding: 10px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.15s;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.event-preview {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.event-preview.green { color: #43A047; }
.event-preview.red { color: #EF5350; }
.event-preview.blue { color: #2196F3; }
.event-preview.orange { color: #FF9800; }

.select-row {
  border: 1px solid #E0E0E0;
  border-radius: 7px;
  padding: 9px 12px;
  font-size: 15px;
  background: #fff;
  color: #222;
  width: 100%;
}

.select-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

.select-arrow {
  width: 18px;
  height: 18px;
  margin-left: 5px;
}

.input-with-btn {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.input-with-btn .input {
  width: 100%;
  padding-right: 112px;
  box-sizing: border-box;
}

.btn-location-in {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  height: 32px;
  display: flex;
  align-items: center;
  background: #43A047;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 0 17px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  gap: 7px;
  z-index: 1;
  transition: background 0.15s;
}

.btn-location-in img {
  width: 18px;
  height: 18px;
  margin-right: 2px;
}

.input-icon-row {
  display: flex;
  gap: 7px;
  align-items: center;
}

.btn-search {
  background: #43A047;
  border: none;
  border-radius: 6px;
  padding: 7px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.btn-search img {
  width: 30px;
  height: 30px;
}

.inline-online-row {
  display: flex;
  align-items: center;
  gap: 18px;
  width: 100%;
}

.switch-row {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.switch-row {
  display: flex;
  gap: 7px;
  margin-left: 6px;
}

.switch-label {
  font-size: 14px;
  margin-left: 3px;
  color: #222;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  border-radius: 22px;
  transition: .4s;
}

.switch input:checked + .slider {
  background-color: #43A047;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px; width: 16px;
  left: 3px; bottom: 3px;
  background-color: #fff;
  border-radius: 50%;
  transition: .4s;
}

.switch input:checked + .slider:before {
  transform: translateX(18px);
}

.form-actions {
  display: flex;
  gap: 16px;
  margin-top: 18px;
}

.btn-cancel {
  background: none;
  color: #222;
  font-size: 15px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-weight: 500;
  padding: 8px 22px;
}

.btn-add {
  background: var(--Primary---600, #43A047);
  color: #fff;
  border: none;
  font-size: 15px;
  padding: 8px 25px;
  border-radius: 7px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.15s;
}

.btn-add:hover {
  background: #2E7D31;
}

.btn-location-in:hover {
  background: #2E7D31;
}
</style>