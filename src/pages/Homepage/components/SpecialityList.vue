<template>
    <!-- Section principale qui contient le titre et les cartes -->
     <section class="speciality-list">
        <h2>Liste des spécialités</h2>

        <div class="cards-grid">
            <!-- On affiche chaque spécialité grâce à une boucle -->
             <div class="card" v-for="(item, index) in specialities" :key="index">
                <!-- Nom de la clinique ou du vétérinaire -->
                 <h3>{{ item.name }}</h3>

                 <!-- Informations affichées avec les icônes -->
                  <div class="info">
                    <p>
                        <img :src="locationIcon" alt="Adresse" class="icon">
                        {{ item.address }}
                    </p>
                    <p>
                        <img :src="phoneIcon" alt="Téléphone" class="icon">
                        {{ item.phone }}
                    </p>
                    <p>
                        <img :src="clockIcon" alt="Horaires" class="icon">
                        {{ item.hours }}
                    </p>
                  </div>

                  <!-- Statut : affichage manuel en texte et style simple -->
                   <div class="status">
                        <span v-if="item.open" class="open">OUVERT</span>
                        <span v-else class="closed">FERMÉ</span>
                   </div>
             </div>
        </div>
     </section>
</template>

<script setup>
// On importe les images/icônes depuis le dossier assets
import locationIcon from '@/assets/icons/location.svg'
import phoneIcon from '@/assets/icons/phone.svg'
import clockIcon from '@/assets/icons/clock.svg'

// Données des spécialités (liste de cliniques ou vétérinaires)
const specialities = [
    {
        name: 'Clinique vétérinaire Centrale',
        address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
        phone: '(123) 456-7890',
        hours: 'Ouvert 24h/24',
        open: true // ouvert
    },
    {
        name: 'Dr. Martin Vétérinaire',
        address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
        phone: '(123) 456-7890',
        hours: 'Ouvert 24h/24',
        open: true // ouvert
    },
    {
        name: 'Dr. Martin Vétérinaire',
        address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
        phone: '(123) 456-7890',
        hours: 'Ouvert 24h/24',
        open: true // ouvert
    },
    {
        name: 'Clinique vétérinaire Centrale',
        address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
        phone: '(123) 456-7890',
        hours: 'Ouvert 24h/24',
        open: true // ouvert
    },
    {
        name: 'Clinique vétérinaire Centrale',
        address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
        phone: '(123) 456-7890',
        hours: 'Ouvert 24h/24',
        open: true // ouvert
    },
    {
        name: 'Urgence Vétérinaire de Nuit',
        address: '345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345',
        phone: '(123) 456-7890',
        hours: '20h - 8h',
        open: false // fermé
    },

]
</script>

<style scoped>
/* Partie principale de la section */
.speciality-list {
    padding: 20px;
    font-family: Arial, sans-serif;
    max-width: 1100px;
    margin: auto;
}

/*Titre*/
h2 {
  text-align: center;
  margin-bottom: 20px;
}

/* Grille responsive */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 colonne par défaut */
  gap: 20px;
}
</style>

