<template>
    <div class="messaging-wrapper">
        <!-- En-tête -->
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

        <!-- Bloc liste des professionnels -->
        <div class="professional-list-container">
            <h3 class="subtitle">Sélectionnez un professionnel pour démarrer une conversation</h3>

            <div v-for="(pro, index) in professionals" :key="index" class="professional-card">
                <h4 class="pro-name">{{ pro.name }}</h4>

                <div class="pro-info">
                    <div class="info-block">
                        <img :src="locationIcon" class="icon" />
                        <span>{{ pro.address }}</span>
                    </div>
                    <div class="info-block">
                        <img :src="phoneIcon" class="icon" />
                        <span>{{ pro.phone }}</span>
                    </div>
                    <div class="info-block">
                        <img :src="clockIcon" class="icon" />
                        <span>{{ pro.hours }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script setup>
import searchIcon from '@/assets/icons/breeder-search-black.svg'
import locationIcon from '@/assets/icons/location.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import clockIcon from '@/assets/icons/clock.svg'

const professionals = [
  {
    name: 'Urgence Vétérinaire de Nuit',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
  },
  {
    name: 'Clinique vétérinaire Centrale',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
  },
  {
    name: 'Dr. Martin Vétérinaire',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
  },
  {
    name: 'Clinique vétérinaire Centrale',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
  },
  {
    name: 'Urgence Vétérinaire de Nuit',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
  },
  {
    name: 'Dr. Martin Vétérinaire',
    address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
    phone: '(123) 456-7890',
    hours: '20h - 8h',
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
  margin-top: 10px;
}
/* En-tête */
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

/* Liste des professionnels */
.professional-list-container {
  font-family: "League Spartan";
  border: 1px solid var(--Neutral---200, #E5E7EB);
  border-radius: 10px;
  background-color: #fff;
  margin-top: 10px;
  margin-left: 24px;
  width: 96%;
}

.subtitle {
  font-weight: 550;
  font-size: 20px;
  font-family: "League Spartan";
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 30px;
  color: var(--Black-90, #2C2D33);
}

.professional-card {
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  margin-left: 30px;
  width: 95%;
}

.pro-name {
  font-weight: 700;
  color: var(--Primary---600, #43A047);
  font-family: "League Spartan";
  font-size: 20px;
  margin-bottom: 10px;
}

.pro-info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.info-block {
  display: flex;
  overflow: hidden;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  color: var(--Neutral---600, #4B5563);
  text-overflow: ellipsis;
  font-family: "League Spartan";
}

.icon {
  width: 23px;
  height: 23px;
}
</style>