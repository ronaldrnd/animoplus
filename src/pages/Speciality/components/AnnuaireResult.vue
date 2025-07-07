<template>
    <section class="result-section">
        <h2 class="title">Résultats pour "Vétérinaire Ophtalmologue"</h2>

        <!-- Séparateur -->
        <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

        <!-- Filtres -->
        <div class="filters">
            <div class="distance-control">
                <label>Distance : {{ distance }} km</label>
                <input type="range" v-model="distance" min="0" max="100" step="5" />
            </div>

            <input type="text" v-model="location" placeholder="Antananarivo, 101" class="location-input" />
            <button class="search-btn">
                <img :src="searchIcon" alt="search" class="icon" />
                Rechercher
            </button>
        </div>

        

    </section>
</template>

<script setup>
import searchIcon from '@/assets/icons/location-white.svg'
import locationIcon from '@/assets/icons/location.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import clockIcon from '@/assets/icons/clock.svg'


</script>