<template>
  <section class="border border-neutral-200 rounded-[10px] p-8 flex flex-col gap-8">

    <TitleDashboard title="Mon profil" :has-text-btn="true" btn-title="Mettre à jour" :icon="editIcon"
      @on-click-btn="$emit('edit-profile')" />

    <hr />

    <!-- Informations utilisateur -->
    <div class="flex justify-between items-start mb-4">
      <div class="flex gap-5">
        <img :src="ProfileImg" alt="photo de profil" class="w-[130px] h-[130px] rounded-full object-cover" />

        <div class="flex flex-col gap-2">
          <h3 class="text-[20px] font-semibold text-neutral-700">Ezra Fanomezantsoa</h3>
          <p class=" text-neutral-700">exemples@gmail.com</p>

          <!-- Infos personnelles -->
          <p class="flex items-start gap-2">
            <img :src="phoneIcon" alt="Téléphone" class="w-[16px]" />
            +261 03 400 05
          </p>
          <p class="flex items-start gap-2">
            <img :src="locationIcon" alt="Localisation" class="w-[16px]" />
            Antananarivo 101
          </p>
          <p class="flex items-start gap-2">
            <img :src="calendarIcon" alt="Date de naissance" class="w-[16px]" />
            19/01/2002
          </p>
        </div>
      </div>

      <!-- Bouton Ajouter un animal -->
      <button @click="addAnimal"
        class="bg-accent-500 text-white px-4 py-3 rounded-[14px] shadow-md flex items-center gap-2">
        <img :src="animalIcon" alt="icone patte" class="w-fit" />
        Ajouter un animal
      </button>
    </div>

    <Alert :alert-img="alertIcon" alert-description="Information confidentielle">
      <div class="flex flex-col gap-4">
        <p class="text-[#222]">
          Ces informations sont confidentielles et accessibles uniquement par vous et les spécialistes vétérinaires.
        </p>
      </div>
    </Alert>

    <!-- Section Animaux -->
    <div class="flex flex-col gap-4">
      <div class="flex items-center font-bold gap-4">
        <img :src="petIcon" alt="icone animal" />
        <h3>Animaux de Compagnie</h3>
      </div>

      <hr />

      <!-- Si aucun animal enregistré -->
      <div v-if="animals.length < 1" class="flex flex-col items-center">
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
import ProfileImg from '@/assets/images/image1.svg'
import phoneIcon from '@/assets/icons/small-phone.svg'
import locationIcon from '@/assets/icons/small-marker.svg'
import calendarIcon from '@/assets/icons/small-calendar.svg'
import animalIcon from '@/assets/icons/animal.svg'
import alertIcon from '@/assets/icons/alertGreen.svg'
import petIcon from '@/assets/icons/animalGreen.svg'
import bigPaw from '@/assets/icons/big-paw.svg'
import editIcon from '@/assets/icons/edit-icon.svg'

import TitleDashboard from '@/components/common/TitleDashboard.vue'
import Alert from '@/components/common/Alert.vue'

import AddAnimal from '@/pages/MyAnimals/components/AddAnimal.vue'
import { ref } from 'vue'

const animals = ref([
  {
    nom: 'Chien',
    image: new URL('@/assets/images/dog.svg', import.meta.url).href
  }
])

const showModal = ref(false)

const emit = defineEmits(['edit-profile']);

function addAnimal () {
  showModal.value = true;
}

</script>

<style scoped>
.font-league {
  font-family: 'League Spartan', sans-serif;
}

.confidential-text p {
  margin-left: -40px;
}

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
