<template>
    <!-- POPUP OVERLAY -->
    <div class="popup-overlay">
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
    </div>
</template>

<script setup>
// RECHERCHE DE SERVICE
import closeIcon from '@/assets/icons/close-circle.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import locationsIcon from '@/assets/icons/location.svg'
import clockIcon from '@/assets/icons/clock.svg'

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
/* RECHERCHE DE SERVICE */
.popup-overlay {
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
}
</style>