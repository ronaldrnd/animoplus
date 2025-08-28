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
              <div v-if="isLoadingAnimals || isLoadingSpecies" class="dropdown-item">
                Chargement...
              </div>
              <div v-else-if="animalTypes.length === 0 && speciesTypes.length === 0" class="dropdown-item">
                Aucun animal ou espèce trouvé
              </div>
              <div v-else>
                <!-- User's Animals Section -->
                <div v-if="animalTypes.length > 0">
                  <div class="dropdown-section-header">Mes animaux</div>
                  <div
                    v-for="animal in animalTypes" 
                    :key="animal.value"
                    class="dropdown-item"
                    @click="selectAnimal(animal)"
                  >
                    {{ animal.label }}
                  </div>
                </div>
                
                <!-- Species Section -->
                <div v-if="speciesTypes.length > 0">
                  <div class="dropdown-section-header" :class="{ 'with-separator': animalTypes.length > 0 }">Espèces disponibles</div>
                  <div
                    v-for="species in speciesTypes" 
                    :key="species.value"
                    class="dropdown-item species-item"
                    @click="selectAnimal(species)"
                  >
                    {{ species.label }}
                  </div>
                </div>
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
            <button class="btn-cancel" @click="resetForm" :disabled="isSubmitting">Annuler</button>
            <button class="btn-add" @click="addAppointment" :disabled="isSubmitting">
              {{ isSubmitting ? 'Création en cours...' : 'Ajouter' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Liste des rendez-vous -->
      <ListAppointment 
        :appointment="rendezVousList" 
        :is-loading="isLoadingAppointments"
        @show-appointment-detail="showAppointmentDetail" 
      />
    </div>

    <!-- Modals -->
    <ShowAppointment 
      v-if="showModal" 
      :appointment="selectedAppointmentData"
      @close="showModal = false" 
    />
    <FindService 
      v-if="findServiceModal" 
      :searchQuery="formData.service"
      @close="findServiceModal = false" 
      @select-service="onServiceSelected"
    />
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

// User's animals and species from API
const animalTypes = ref([])
const speciesTypes = ref([])
const isLoadingAnimals = ref(false)
const isLoadingSpecies = ref(false)
const isSubmitting = ref(false)
const isLoadingAppointments = ref(false)

// API Configuration
const API_BASE_URL = 'http://localhost:8000/api/v1'

const selectedEventType = ref(eventTypes.value[0])
const selectedAnimal = ref({ value: '', label: 'Sélectionner un animal' })
const showAddEventSection = ref(false)

// Appointments data from API
const rendezVousList = ref([])

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

// Fetch user's animals from API
async function fetchUserAnimals() {
  if (!auth.user?.id) return
  
  isLoadingAnimals.value = true
  
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8000/api/v1/animals/owner/${auth.user.id}?per_page=50`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      const data = await response.json()
      const animals = data.data || data
      
      // Transform animals to dropdown format
      animalTypes.value = animals.map(animal => ({
        value: animal.id,
        label: `${animal.nom} (${animal.espece?.nom || 'Espèce inconnue'})`,
        type: 'animal'
      }))
    } else {
      console.error('Erreur lors de la récupération des animaux:', response.statusText)
    }
  } catch (err) {
    console.error('Erreur:', err)
  } finally {
    isLoadingAnimals.value = false
  }
}

// Fetch all species from API
async function fetchSpecies() {
  try {
    isLoadingSpecies.value = true
    const token = localStorage.getItem('token')
    
    if (!token) {
      console.error('No token found')
      return
    }

    const response = await fetch(`${API_BASE_URL}/especes`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch species')
    }

    const data = await response.json()
    const species = data.data || []
    
    speciesTypes.value = species.map(specie => ({
      value: specie.id,
      label: specie.nom,
      type: 'species'
    }))
    
  } catch (error) {
    console.error('Error fetching species:', error)
  } finally {
    isLoadingSpecies.value = false
  }
}

async function fetchAppointments() {
  try {
    isLoadingAppointments.value = true
    const token = localStorage.getItem('token')
    
    if (!token) {
      console.error('No token found')
      return
    }

    const response = await fetch(`${API_BASE_URL}/appointments?per_page=50&sort_by=date&sort_order=asc`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch appointments')
    }

    const data = await response.json()
    const appointments = data.data || []
    
    // Transform API data to match component format
    rendezVousList.value = appointments.map(appointment => {
      const appointmentDate = new Date(appointment.date)
      const dayName = getDayName(appointmentDate)
      const formattedDate = formatDate(appointmentDate)
      
      return {
        id: appointment.id,
        jour: dayName,
        date: formattedDate,
        enLigne: appointment.is_online || false,
        titre: appointment.message || 'Rendez-vous',
        heureDebut: appointment.start_time,
        heureFin: appointment.end_time,
        meetLink: appointment.meet_link || '',
        animal: appointment.animal?.nom || 'Animal non spécifié',
        eventType: getEventTypeFromStatus(appointment.status),
        address: appointment.address || 'Adresse non spécifiée',
        service: appointment.service?.name || 'Service non spécifié',
        status: appointment.status
      }
    })
    
  } catch (error) {
    console.error('Error fetching appointments:', error)
  } finally {
    isLoadingAppointments.value = false
  }
}

const getEventTypeFromStatus = (status) => {
  switch (status) {
    case 'confirmed': return 'green'
    case 'pending': return 'orange'
    case 'cancelled': return 'red'
    case 'completed': return 'blue'
    default: return 'green'
  }
}

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

const addAppointment = async () => {
  // Comprehensive form validation
  const missingFields = []
  
  if (!formData.value.title) missingFields.push('Titre')
  if (!formData.value.date) missingFields.push('Date')
  if (!formData.value.startTime) missingFields.push('Heure de début')
  if (!formData.value.endTime) missingFields.push('Heure de fin')
  if (!formData.value.animal) missingFields.push('Animal')
  if (!formData.value.service) missingFields.push('Service')
  
  if (missingFields.length > 0) {
    alert(`Veuillez remplir les champs suivants: ${missingFields.join(', ')}`)
    return
  }

  // Validate time logic
  if (formData.value.startTime >= formData.value.endTime) {
    alert('L\'heure de fin doit être après l\'heure de début')
    return
  }

  try {
    isSubmitting.value = true
    
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Vous devez être connecté pour créer un rendez-vous')
      return
    }

    // Prepare appointment data for API
    const appointmentData = {
      animal_id: parseInt(formData.value.animal),
      service_id: parseInt(formData.value.service),
      date: formData.value.date,
      start_time: formData.value.startTime,
      end_time: formData.value.endTime,
      message: formData.value.title,
      assign_specialist_id: null
    }

    const response = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(appointmentData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Erreur lors de la création du rendez-vous')
    }

    const createdAppointment = await response.json()
    
    // Add to local calendar display
    const newAppointment = {
      jour: getDayName(new Date(formData.value.date)),
      date: formatDate(new Date(formData.value.date)),
      enLigne: formData.value.isOnline,
      titre: formData.value.title,
      heureDebut: formData.value.startTime,
      heureFin: formData.value.endTime,
      meetLink: formData.value.meetLink,
      animal: formData.value.animal,
      eventType: formData.value.eventType,
      address: formData.value.address,
      service: formData.value.service,
      id: createdAppointment.data?.id || Date.now()
    }

    // Refresh appointments list from API instead of just adding locally
    await fetchAppointments()
    resetForm()
    alert('Rendez-vous créé avec succès!')
    
  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous:', error)
    alert(`Erreur: ${error.message}`)
  } finally {
    isSubmitting.value = false
  }
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
  selectedAnimal.value = { value: '', label: 'Sélectionner un animal' }
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

// Handle service selection from FindService modal
const onServiceSelected = (service) => {
  formData.value.service = service.name
  // Store the selected service data for later use
  formData.value.selectedServiceData = service
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
  // Initialiser la date sélectionnée à aujourd'hui
  const today = new Date()
  formData.value.date = today.toISOString().split('T')[0]
  
  // Fetch user's animals, species, and appointments
  fetchUserAnimals()
  fetchSpecies()
  fetchAppointments()
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
.event-preview.error-state {
  color: #EF5350;
}
.event-preview.blue { color: #2196F3; }
.event-preview.orange { color: #FF9800; }

.dropdown-section-header {
  font-size: 12px;
  font-weight: 600;
  color: #666;
  padding: 8px 12px 4px 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dropdown-section-header.with-separator {
  border-top: 1px solid #E0E0E0;
  margin-top: 4px;
  padding-top: 12px;
}

.dropdown-item.species-item {
  color: #43A047;
  font-style: italic;
}

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

.btn-add:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-cancel:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-location-in:hover {
  background: #2E7D31;
}
</style>