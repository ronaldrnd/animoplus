<template>
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

            
            <!-- Transférer rendez-vous -->
            <div class="transfer-section">
                <label class="transfer-label">Transmettre le rendez-vous à un autre professionnel</label>
                <div class="transfer-search-row">
                    <input
                    type="text"
                    placeholder="Nom , Profession ou Prestation"
                    class="transfer-input"
                    />
                    <button class="btn-search">
                        <img :src="searchIcon" alt="Recherche" />
                    </button>
                </div>
                <div class="transfer-btns">
                    <button class="btn-cancel">Annuler</button>
                    <button class="btn-validate">Enregistrer la modification</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import closeIcon from '@/assets/icons/close-circle.svg'
import calendarIcon from '@/assets/icons/calendar.svg'
import ellipseIcon from '@/assets/layers/Ellipse.svg'
import googleMeetIcon from '@/assets/icons/google-meet.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import locationsIcon from '@/assets/icons/location.svg'
import clockIcon from '@/assets/icons/clock.svg'
import searchIcon from '@/assets/icons/search-icon.svg'
</script>

<style scoped>
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
  min-width: 520px;
  max-width: 630px;
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
.transfer-section {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.transfer-label {
  font-size: 15px;
  color: #4B5563;
  font-family: "League Spartan";
  font-weight: 500;
  margin-bottom: 4px;
}

.transfer-search-row {
  display: flex;
  align-items: center;
  gap: 0;
}

.transfer-input {
  flex: 1;
  height: 44px;
  padding: 0 15px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  font-family: "League Spartan";
  outline: none;
  background: #f9f9f9;
}

.transfer-search-btn {
  height: 44px;
  width: 50px;
  background: #43A047;
  border: none;
  border-radius: 0 12px 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}

.transfer-search-btn svg {
  display: block;
}

.transfer-btns {
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  margin-top: 6px;
  align-items: center;
}

.btn-cancel {
  background: none;
  border: none;
  color: #4B5563;
  font-family: "League Spartan";
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  padding: 7px 13px;
  transition: color 0.2s;
}

.btn-cancel:hover {
  color: #222;
}

.btn-validate {
  background: var(--Primary---600, #43A047);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-family: "League Spartan";
  padding: 9px 22px;
  cursor: pointer;
  transition: background 0.2s;
}

</style>