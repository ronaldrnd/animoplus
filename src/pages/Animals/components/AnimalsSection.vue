<template>
    <section class="border border-neutral-200 rounded-[10px] p-8 flex flex-col gap-8">

      <TitleDashboard title="Mes animaux" :has-button="true" btn-title="Ajouter un animal" :icon="animalIcon" @on-click-btn="showModal = true" />

      <hr />

      <Alert alert-description="Adoptez votre futur compagnon avec nos éleveurs partenaires !">
        <div class="flex flex-col gap-4">
          <p class="text-[#222]">
            Trouvez un éleveur près de chez vous et adoptez un animal en toute confiance.
          </p>
          <button
          @click="$emit('showFindBreeder')"
            class="bg-[#43A047] text-white px-4 py-3 rounded-[10px] flex items-center w-fit gap-2">
            <img :src="searchIcon" alt="icone recherche" />
            <span>Trouver un éleveur</span>
          </button>
        </div>
      </Alert>

      <!-- Section des animaux de compagnie -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center font-bold gap-4">
          <img :src="petIcon" alt="icone animal" />
          <h3>Animaux de Compagnie</h3>
        </div>

        <hr />

        <!-- Si aucun animal enregistré -->
        <div v-if="animals.length <1" class="flex flex-col items-center">
          <img :src="bigPaw" alt="patte" />
          <p>Aucun animal enregistré pour le moment</p>
        </div>

        <!-- Sinon on affiche les animaux -->
        <div v-else class="animal-cards">
          <div class="animal-card" v-for="(animal, index) in animals" :key="index">
            <img :src="animal.image" alt="photo animal" class="animal-image" />
            <p class="animal-name">{{ animal.nom }}</p>
          </div>
        </div>

      </div>
    </section>
    <AddAnimal v-if="showModal" @close="showModal = false" />

</template>

<script setup>
import { ref } from 'vue'

import TitleDashboard from '@/components/common/TitleDashboard.vue'
import Alert from '@/components/common/Alert.vue'

// Import des icônes
import animalIcon from '@/assets/icons/animal.svg'
import searchIcon from '@/assets/icons/breeder-search.svg'
import petIcon from '@/assets/icons/animalGreen.svg'
import bigPaw from '@/assets/icons/big-paw.svg'

// Import du composant modale
import AddAnimal from '@/pages/Animals/components/AddAnimal.vue'

// État local pour afficher ou cacher la modale
const showModal = ref(false)

const animals = ref([
  {
    nom: 'Chien',
    image: new URL('@/assets/images/dog.svg', import.meta.url).href 
  }
])

const emit = defineEmits(['showFindBreeder']);
</script>

<style scoped>
.animal-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.animal-card {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 200px;
  padding: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.animal-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
}

.animal-name {
  margin-top: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #333;
}
</style>