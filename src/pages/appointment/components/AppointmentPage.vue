<template>
  <div class="main-card">
    <!-- Header principal -->
    <div class="header-rdv">
      <h2 class="header-title">
        Mes rendez-vous professionnels
      </h2>
      <button class="header-btn">
        <img :src="smallCalendar" alt="Calendrier" class="calendar-icon" />
        Ajouter un rendez-vous
      </button>
    </div>

    <!-- Séparateur -->
    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <div class="appointment-page">
      <!-- Partie gauche : calendrier -->
      <div class="calendar-panel">
        <div class="calendar-header">
          <span class="calendar-month">Juin, 2025</span>
          <img :src="arrowDown" class="icon-arrow" alt="arrow" />
          <div class="calendar-nav">
            <img :src="arrowLR" class="nav-icon" alt="précédent-suivant" />
          </div>
        </div>

        <table class="calendar-table">
          <thead>
            <tr>
              <th class="week sunday">Dim</th>
              <th class="week weekday">Lun</th>
              <th class="week weekday">Mar</th>
              <th class="week weekday">Mer</th>
              <th class="week weekday">Jeu</th>
              <th class="week weekday">Ven</th>
              <th class="week saturday">Sam</th>
            </tr>
          </thead>

          <tbody>
            <!-- Semaine 1 -->
            <tr>
              <td></td>
              <td class="red-day">1<br /><span class="event red">New Year's</span></td>
              <td>2<br />
                <span class="event green">Event Chip</span>
                <span class="event red">Holiday Chip</span>
                <span class="event green">🎂Event C...</span>
              </td>
              <td>
                3<br />
                <span class="event green">Anniversary</span>
                <span class="event red">Festival</span>
              </td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <!-- Semaine 2 -->
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>
                12<br />
                <span class="event red">Holiday Chip</span>
              </td>
              <td>
                13<br />
                <span class="event green">Event Chip</span>
              </td>
            </tr>
            <!-- Semaine 3 -->
            <tr>
              <td>14</td>
              <td class="red-day">15<br />
                <span class="event green">Event Chip</span>
                <span class="event red">Pongal</span>
                <span class="event green">Event Chip</span>
              </td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
            </tr>
            <!-- Semaine 4 -->
            <tr>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>
                27<br />
                <span class="event green">Event Chip</span>
                <span class="event red">Holiday Chip</span>
                <span class="event green">Event Chip</span>
              </td>
            </tr>
            <!-- Semaine 5 -->
            <tr>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="calendar-footer">
          Liste des rendez-vous
        </div>
      </div>

      <!-- Partie droite : formulaire -->
      <div class="form-panel">
        <h3 class="form-title">Ajouter un rendez-vous</h3>
        <div class="form-group">
          <label>Titre</label>
          <input type="text" class="input" value="Rendez-vous avec Mr. joe" />
        </div>
        <div class="form-group">
          <label>Sélection de l'animal</label>
          <div class="select">
            <span>Sélectionner une espèce</span>
            <img :src="arrowDown" class="select-arrow" alt="flèche" />
          </div>
        </div>
        <div class="form-group">
          <label>Adresse de recherche</label>
          <div class="input-with-btn">
            <input type="text" class="input" value="Antananarivo, 101" />
            <button class="btn-location-in">
              <img :src="locationIcon" alt="Localiser" />
              Localiser
            </button>
          </div>
        </div>

        <div class="form-group">
          <label>Recherche de service</label>
          <div class="input-icon-row">
            <input type="text" class="input" placeholder="Nom, Profession ou Prestation" />
            <button class="btn-search">
              <img :src="searchIcon" alt="Recherche" />
            </button>
          </div>
        </div>
        <div class="form-group">
          <label class="inline-label">Lien vers le rendez-vous en ligne</label>
          <div class="inline-online-row">
            <div class="switch-row">
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider"></span>
              </label>
              <span class="switch-label">En ligne</span>
            </div>
            <div class="select-row">
              <span>Sélectionner une espèce</span>
              <img :src="arrowDown" class="select-arrow" alt="flèche" />
            </div>
          </div>
        </div>

        <div class="form-actions">
          <button class="btn-cancel">Annuler</button>
          <button class="btn-add">Ajouter</button>
        </div>
      </div>
    </div>

    <!-- Séparateur -->
    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <div class="flex flex-col gap-3 mt-4">
      <div
        v-for="(rdv, idx) in rendezVousList"
        :key="idx"
        class="flex items-center bg-white border border-[#ededed] rounded-[14px] px-4 py-2 min-h-[56px] w-full"
      >
        <!-- Colonne gauche : icône calendrier -->
        <div class="flex flex-col items-center min-w-[40px] mr-3">
          <img :src="calendarIcon" alt="calendar" class="w-7 h-7" />
        </div>

        <!-- Partie centrale (titre + sous-titre) -->
        <div class="flex flex-col flex-1">
          <span
            class="text-[15px] font-semibold text-[#43A047] flex items-center gap-1"
          >
            {{ rdv.jour }} le {{ rdv.date }}, {{ rdv.enLigne ? 'En ligne' : 'Sur place' }}
          </span>
          <div class="flex items-center text-[13px] text-[#6B7280] gap-1 mt-0.5">
            <img :src="ellipseIcon" alt="dot" class="w-[10px] h-[10px]" />
            Avec {{ rdv.nom }}
          </div>
        </div>

        <!-- Colonne droite : heure + bouton meet -->
        <div class="flex items-center justify-center min-w-[170px] w-[650px]">
          <!-- Heure (ne pas modifier ce bloc !) -->
          <div class="self-stretch inline-flex justify-center items-center gap-5">
            <div
              class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal"
            >
              {{ rdv.heureDebut }} <br />AM
            </div>
            <div class="w-6 h-6 relative">
              <div class="w-[5.01px] h-[5.02px] left-[15.49px] top-[14.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100"></div>
              <div class="w-4 h-0 left-[3.50px] top-[14.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100"></div>
              <div class="w-[5.01px] h-[5.02px] left-[3.50px] top-[3.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100"></div>
              <div class="w-4 h-0 left-[3.50px] top-[9.01px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100"></div>
              <div class="w-6 h-6 left-[24px] top-[24px] absolute origin-top-left -rotate-180 opacity-0"></div>
            </div>
            <div
              class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal"
            >
              {{ rdv.heureFin }} <br />AM
            </div>
          </div>
          <!-- Bouton Meet à droite de l'heure -->
          <template v-if="rdv.enLigne">
            <span class="flex items-center justify-center bg-[#FFF] border border-[#ededed] rounded-[9px] px-[11px] h-10 text-[13px] font-medium text-[#965C2A] gap-2 cursor-pointer ml-30 min-w-[250px]">
              <img :src="googleMeetIcon" alt="meet" class="w-[30px] h-[30px]" />
              Go to meet link
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>

  <!-- POPUP OVERLAY -->
<!-- <div class="popup-overlay">
  <div class="popup-card">
    
    <div class="popup-header">
      <span class="popup-title">Recherche de service</span>
      <button class="popup-close">
        <img :src="closeIcon" alt="fermer" class="icon-close" />
      </button>
    </div>
    <div class="popup-subtitle">Service</div>
    <div class="service-list">
      <div
        v-for="(pro, index) in professionals"
        :key="index"
        class="service-card"
      >
        <div class="service-title">{{ pro.name }}</div>
        <div class="service-row">
          <img :src="locationsIcon" class="icon" />
          <span>{{ pro.address }}</span>
        </div>
        <div class="service-row">
          <img :src="phoneIcon" class="icon" />
          <span>{{ pro.phone }}</span>
        </div>
        <div class="service-row">
          <img :src="clockIcon" class="icon" />
          <span>{{ pro.hours }}</span>
        </div>
        <div class="service-badges">
          <span
            class="badge"
            :class="pro.open ? 'badge-green' : 'badge-red'"
          >{{ pro.open ? 'OUVERT' : 'FERMÉ' }}</span>
        </div>
      </div>
    </div>
    <div class="popup-actions">
      <button class="btn-cancel">Annuler</button>
      <button class="btn-ajouter">Ajouter</button>
    </div>
  </div>
</div> -->

<!-- DETAIL RENDEZ-VOUS -->
 <div class="popup-overlay">
    <div class="popup-card">
      <!-- Header -->
      <div class="popup-header">
        <span class="popup-title">Rendez-vous</span>
        <button class="popup-close">
          <img :src="closeIcon" alt="fermer" class="icon-close" />
        </button>
      </div>

      <!-- Recap Card -->
      <div class="recap-card">
        <div class="flex items-center gap-3">
          <img :src="calendarIcon" class="calendar-icon" />
          <div class="flex flex-col">
            <span class="rdv-date">
              Lundi le 17 Juin 2025, <span class="text-green">En ligne</span>
            </span>
            <span class="rdv-sub"><img :src="ellipseIcon" class="dot" /> Avec Vétérinaire urgence</span>
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
        <div class="mt-3 flex">
          <button class="google-meet-btn">
            <img :src="googleMeetIcon" alt="meet" class="google-meet-icon" />
            Go to meet link
          </button>
        </div>
      </div>

      <!-- Infos animal/adresse/service -->
      <div class="info-list">
        <div class="info-group">
          <div class="info-label">Animal</div>
          <div class="info-value">Chien</div>
        </div>
        <div class="info-group">
          <div class="info-label">Adresse</div>
          <div class="info-value font-bold">Antananarivo, 101</div>
        </div>
        <div class="info-group">
          <div class="info-label">Service</div>
        </div>
      </div>

      <!-- Service Card -->
      <div class="service-card">
        <div class="service-title">Dr. Martin Vétérinaire</div>
        <div class="service-row">
          <img :src="locationsIcon" class="icon" />
          <span>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</span>
        </div>
        <div class="service-row">
          <img :src="phoneIcon" class="icon" />
          <span>(123) 456-7890</span>
        </div>
        <div class="service-row">
          <img :src="clockIcon" class="icon" />
          <span>Ouvert 24h/24</span>
        </div>
        <div class="service-badges">
          <span class="badge badge-green">OUVERT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Mets ici le chemin selon ta structure réelle
import smallCalendar from '@/assets/icons/appointment.svg'
import arrowLR from '@/assets/icons/arrowLR.svg'
import arrowDown from '@/assets/icons/chevron-down.svg'
import locationIcon from '@/assets/icons/location-white.svg'
import searchIcon from '@/assets/icons/search-icon.svg'

import calendarIcon from '@/assets/icons/calendar.svg'
import ellipseIcon from '@/assets/layers/Ellipse.svg'
import googleMeetIcon from '@/assets/icons/google-meet.svg'

// RECHERCHE DE SERVICE
import closeIcon from '@/assets/icons/close-circle.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import locationsIcon from '@/assets/icons/location.svg'
import clockIcon from '@/assets/icons/clock.svg'

// Démo : tableau statique, à adapter si besoin
const rendezVousList = [
  {
    jour: "Lundi",
    date: "17 Juin 2025",
    enLigne: true,
    nom: "Vétérinaire urgence",
    heureDebut: "8:45",
    heureFin: "10:45"
  },
  {
    jour: "Mercredi",
    date: "12 Juillet 2025",
    enLigne: false,
    nom: "Dr. martine Vétérinaire",
    heureDebut: "8:45",
    heureFin: "10:45"
  },
  {
    jour: "Mercredi",
    date: "12 Juillet 2025",
    enLigne: false,
    nom: "Dr. martine Vétérinaire",
    heureDebut: "8:45",
    heureFin: "10:45"
  }
]

// RECHERCHE DE SERVICE
const professionals = [
  {
    name: 'Dr. Martin Vétérinaire',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true,
  },
  {
    name: 'Clinique vétérinaire Centrale',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: 'Ouvert 24h/24',
    open: true,
  },
  {
    name: 'Urgence Vétérinaire de Nuit',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
    open: false,
  }
]
</script>

<style scoped>
.main-card {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 14px;
  width: 100%;
  max-width: 100%;
  min-height: 80vh;
  margin: 0;
  box-sizing: border-box;
  padding: 0 24px 30px 24px;

}

.header-rdv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px 0 24px;
 
}

.header-title {
  font-size: 17px;
  font-weight: 700;
  color: #222;
  font-family: "League Spartan";
  letter-spacing: 0;
}

.header-btn {
  display: flex;
  align-items: center;
  background: var(--Accent---500, #A0522D);
  box-shadow: 0px 4px 12px 0px rgba(245, 158, 11, 0.25);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 18px 10px 13px;
  cursor: pointer;
  font-family: "League Spartan";
  gap: 7px;
  transition: background 0.15s;
}

.calendar-icon {
  width: 18px;
  height: 18px;
  margin-right: 7px;
}

.appointment-page {
  display: flex;
  gap: 32px;
  font-family: "League Spartan", Arial, sans-serif;
  width: 100%;
  background: #fff;
  padding: 28px 24px 24px 24px;
  box-sizing: border-box;
  align-items: flex-start;
}

.calendar-panel {
  width: 55%;
  min-width: 470px;
  max-width: 600px;
}
.calendar-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
}
.calendar-month {
  font-size: 18px;
  font-weight: 500;
  margin-right: 2px;
}
.icon-arrow {
  width: 15px;
  height: 15px;
  margin-right: auto;
  margin-left: 2px;
}
.nav-icon {
  width: 80px;
  height: 80px;
  cursor: pointer;
}
.calendar-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background: #fff;
  font-size: 15px;
}
.calendar-table th,
.calendar-table td {
 border: 1px solid #ededed;
  text-align: left;
  width: 66px;
  min-width: 66px;
  height: 100px;
  max-height: 66px;
  vertical-align: top;
  position: relative;
  padding: 7px 5px 7px 7px;
  box-sizing: border-box;
  overflow: hidden;
}

.calendar-table .week {
  background: #43A047;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border: none;
  height: 15px;
  width: 66px;
}

.calendar-table .weekday {
  background: var(--Primary---600, #43A047);
}

.calendar-table .sunday,
.calendar-table .saturday {
  background: var(--Primary---500, #6CC447);
}

.calendar-table td:nth-child(1),   /* Dimanche */
.calendar-table td:nth-child(7) {  /* Samedi */
  color: var(--Red, #EF5350);
  font-weight: 600;
}

/* Tous les chiffres du jour qui ont la classe red-day (1 et 15) */
.calendar-table td.red-day {
  color: var(--Red, #EF5350);
  font-weight: 600;
}
.event {
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  margin-top: 2px;
  margin-right: 2px;
  padding: 1px 6px;
  border-radius: 6px;
}
.event.red { background: #FFDBDB; color: #EF5350; }
.event.green { background: #E6F8EC; color: #43A047; }
.calendar-footer {
  color: var(--Neutral---600, #4B5563);
  font-family: "League Spartan";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 25px;
}

.form-panel {
  width: 100%;
  min-width: 320px;
  max-width: 610px;
  background: #fff;
  padding-left: 18px;
  margin-top: 20px;
}
.form-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 14px;
}
.form-group {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  color: var(--Neutral---600, #4B5563);
}
.form-group label {
  font-size: 15px;
  margin-bottom: 6px;
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
  font-family: "League Spartan";
}
.select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

.input,
.select-row {
  border: 1px solid #E0E0E0;
  border-radius: 7px;
  padding: 9px 12px;
  font-size: 15px;
  background: #fff;
  color: #222;
  width: 100%;
  font-family: "League Spartan";
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
  font-family: "League Spartan";
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

.inline-label {
  display: block;
  margin-bottom: 6px;
  color: var(--Neutral---600, #4B5563);
  font-weight: 500;
  font-size: 15px;
  margin-left: 125px;
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

.select-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #E0E0E0;
  border-radius: 7px;
  padding: 9px 12px;
  font-size: 15px;
  background: #fff;
  color: #222;
  font-family: "League Spartan";
  width: 100%;
  min-width: 160px;
  box-sizing: border-box;
  cursor: pointer;
}

.select-arrow {
  width: 18px;
  height: 18px;
  margin-left: 7px;
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
  font-family: "League Spartan";
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
  font-family: "League Spartan";
  font-weight: 500;
  transition: background 0.15s;
}


 /* RECHERCHE DE SERVICE */
 /* .popup-overlay {
  position: fixed;
  z-index: 50;
  inset: 0;
  background: rgba(163, 163, 163, 0.20);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.popup-card {
  background: #fff;
  border-radius: 11px;
  box-shadow: 0 2px 16px #e0e0e0;
  min-width: 530px;
  max-width: 430px;
  padding: 27px 23px 22px 23px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.popup-title {
  font-family: "League Spartan", Arial, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #212121;
}
.popup-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.icon-close {
  width: 23px;
  height: 23px;
  color: #9e9e9e;
  display: block;
}
.popup-subtitle {
  font-size: 13px;
  color: #888;
  margin-top: 13px;
  margin-bottom: 11px;
  font-family: "League Spartan";
}
.service-list {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.service-card {
  background: #fff;
  border: 1px solid #E4E4E7;
  border-radius: 8px;
  padding: 14px 18px 11px 18px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.service-title {
  font-family: "League Spartan", Arial, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #43A047;
  margin-bottom: 4px;
}
.service-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #4B5563;
  margin-bottom: 0;
  font-family: "League Spartan";
}
.icon {
  width: 15px;
  height: 15px;
}
.service-badges {
  margin-top: 7px;
}
.badge {
  display: inline-block;
  padding: 2px 13px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  font-family: "League Spartan", Arial, sans-serif;
  margin-right: 5px;
}
.badge-green {
  background: #E6F8EC;
  color: #43A047;
  border: 1px solid #43A04722;
}
.badge-red {
  background: #FFDBDB;
  color: #EF5350;
  border: 1px solid #EF535022;
}
.popup-actions {
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
}
.btn-cancel {
  background: none;
  border: none;
  color: #4B5563;
  font-family: "League Spartan";
  font-size: 15px;
  font-weight: 500;
  padding: 8px 18px;
  border-radius: 7px;
  cursor: pointer;
}
.btn-ajouter {
  background: #43A047;
  color: #fff;
  border: none;
  font-size: 15px;
  font-family: "League Spartan";
  font-weight: 500;
  padding: 8px 22px;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.16s;
} */

/* RENDEZ-VOUS */
 .popup-overlay {
  position: fixed;
  z-index: 100;
  inset: 0;
  background: rgba(163, 163, 163, 0.20);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.popup-card {
  background: #fff;
  border-radius: 11px;
  box-shadow: 0 2px 16px #e0e0e0;
  min-width: 420px;
  max-width: 430px;
  padding: 27px 23px 22px 23px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.popup-title {
  font-family: "League Spartan", Arial, sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #212121;
}
.popup-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.icon-close {
  width: 23px;
  height: 23px;
  color: #9e9e9e;
  display: block;
}

/* Recap card */
.recap-card {
  border: 1px solid #E4E4E7;
  border-radius: 8px;
  padding: 14px 18px 12px 18px;
  margin-bottom: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.calendar-icon {
  width: 34px;
  height: 34px;
  margin-right: 7px;
}
.rdv-date {
  color: #43A047;
  font-size: 14px;
  font-family: "League Spartan";
  font-weight: 700;
  margin-bottom: 0;
}
.rdv-date .date-bold {
  color: #222;
}
.rdv-date .text-green {
  color: #43A047;
  font-weight: 600;
}
.rdv-sub {
  font-size: 13px;
  color: #6B7280;
  font-family: "League Spartan";
  display: flex;
  align-items: center;
  gap: 5px;
}
.dot {
  width: 10px;
  height: 10px;
  margin-right: 2px;
}
.rdv-hours {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 19px;
  margin: 12px 0 0 45px;
}
.hour-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hour-time {
  color: #212121;
  font-size: 16px;
  font-weight: 600;
  font-family: "League Spartan";
}
.hour-am {
  font-size: 13px;
  color: #212121;
  font-weight: 500;
  line-height: 0.85;
}
.arrow-col {
  display: flex;
  align-items: center;
}
.hour-arrow {
  width: 23px;
  height: 23px;
}
.google-meet-btn {
  background: #fff;
  border: 1px solid #ededed;
  border-radius: 9px;
  padding: 0 18px;
  height: 38px;
  font-size: 13px;
  font-family: "League Spartan";
  color: var(--Neutral---600, #4B5563);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 7px;
  box-shadow: 0 1px 4px #00000005;
  cursor: pointer;
}
.google-meet-icon {
  width: 24px;
  height: 24px;
  margin-right: 4px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 20px 0 0 0;
}
.info-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: var(--Neutral---600, #4B5563);
}
.info-label {
  font-size: 13px;
  font-family: "League Spartan";
  margin-bottom: 2px;
}
.info-value {
  background: #F5F5F5;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 15px;
  font-family: "League Spartan";
  color: #212121;
  font-weight: 500;
}
.font-bold {
  font-weight: 700;
}

.service-card {
  background: #fff;
  border: 1px solid #E4E4E7;
  border-radius: 8px;
  padding: 14px 18px 11px 18px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.service-title {
  font-family: "League Spartan", Arial, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #43A047;
  margin-bottom: 4px;
}
.service-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #4B5563;
  margin-bottom: 0;
  font-family: "League Spartan";
}
.icon {
  width: 16px;
  height: 16px;
}
.service-badges {
  margin-top: 7px;
}
.badge {
  display: inline-block;
  padding: 5px 13px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 600;
  font-family: "League Spartan", Arial, sans-serif;
  margin-right: 5px;
}
.badge-green {
  background: rgba(22, 163, 74, 0.15);
  color: var(--Primary---600, #43A047);
  
}

</style>
