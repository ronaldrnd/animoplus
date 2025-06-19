<template>
    <section class="professionals">
        <div class="container">
            <h1>ANNUAIRE DES PROFESSIONNELS</h1>
            <p class="subtitle">Découvrez l'ensemble des professionnels du secteur animalier référencés sur DoctoPet.</p>

            <div class="search-container">
                <div class="search-bar">
                    <input type="text" placeholder="Rechercher un professionnel ou une spécialité...">
                    <img :src="searchIcon" alt="Rechercher" class="search-icon">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import searchIcon from '@/assets/icons/search-icon.svg';
</script>

<style scoped>

</style>


