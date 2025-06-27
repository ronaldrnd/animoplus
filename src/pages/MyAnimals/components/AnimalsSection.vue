<template>
  <div class="container-box">
    <section class="my-animals">

      <!-- En-tête + bouton d'ajout -->
      <div class="flex justify-between items-center">
        <h2 class="text-[#2E2E30] text-[24px] font-bold font-league">Mes animaux</h2>
        <button 
          @click="showModal = true"
          class="bg-[#A0522D] text-white text-xs font-league px-4 py-2 rounded-[13px] shadow-md flex items-center gap-2 mb-4">
          <img :src="animalIcon" alt="icone patte" class="w-[18px]" />
          Ajouter un animal
        </button>
      </div>

      <!-- Ligne de séparation -->
      <hr class="w-full border-t border-[rgba(197,197,197,0.5)] mb-5" />

      <!-- Encadré vert d'alerte -->
      <div class="bg-[rgba(16,185,129,0.10)] border-l-[4px] border-[#43A047] p-4 rounded-[10px] my-5">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div class="flex items-start gap-2 flex-1">
            <img :src="alertIcon" alt="icone alerte" class="w-[23px] h-[23px] mt-1" />
            <div class="flex flex-col">
              <p class="text-[#43A047] text-[13px] font-light font-league mt-1">
                <strong>Adoptez votre futur compagnon avec nos éleveurs partenaires !</strong>
              </p>
              <p class="text-[#222] text-[13px] font-normal font-league mt-2 ml-[-35px]">
                Trouvez un éleveur près de chez vous et adoptez un animal en toute confiance.
              </p>
              <!-- Bouton replacé ici sous le texte avec décalage à gauche -->
              <button class="bg-[#43A047] text-white text-[11px] px-4 py-2 rounded-[10px] flex items-center mt-4 ml-[-35px] w-fit">
                <img :src="searchIcon" alt="icone recherche" class="w-[20px] mr-1.5" />
                Trouver un éleveur
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Section des animaux de compagnie -->
      <div>
        <div class="flex items-center font-bold text-[13px] font-league mb-5">
          <img :src="petIcon" alt="icone animal" class="w-[30px] mr-[18px]" />
          <h3>Animaux de Compagnie</h3>
        </div>

        <hr class="w-full border-t border-[rgba(197,197,197,0.5)] mb-5" />

        <!-- Message si aucun animal n'est enregistré -->
        <div class="text-gray-600 text-[14px]">
          <img :src="bigPaw" alt="patte" class="mb-2" />
          <p>Aucun animal enregistré pour le moment</p>
        </div>
      </div>

    </section>
    <AddAnimal v-if="showModal" @close="showModal = false" />

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Import des icônes
import animalIcon from '@/assets/icons/animal.svg'
import alertIcon from '@/assets/icons/alert-icon.svg'
import searchIcon from '@/assets/icons/breeder-search.svg'
import petIcon from '@/assets/icons/animalGreen.svg'
import bigPaw from '@/assets/icons/big-paw.svg'

// Import du composant modale
import AddAnimal from '@/pages/MyAnimals/components/AddAnimal.vue'

// État local pour afficher ou cacher la modale
const showModal = ref(false)
</script>

<style scoped>
/* Conteneur principal avec bordure, ombre et padding */
.container-box {
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid rgba(197, 197, 197, 0.5);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  padding: 24px;
  max-width: 1000px;
}

/* Marge intérieure pour l'ensemble du composant */
.my-animals {
  margin-left: -20px;
  margin-right: -20px;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Spécifique à la police personnalisée si elle est incluse */
.font-league {
  font-family: 'League Spartan', sans-serif;
}
</style>