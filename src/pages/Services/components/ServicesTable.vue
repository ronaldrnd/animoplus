<template>
  <div class="bg-white border border-[#ddd] rounded-xl p-6 font-['League_Spartan']">
    <!-- Header : titre et bouton d'ajout -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-[#2E2E30] text-2xl font-bold">
        Gestion des services
      </h2>
      <button
        class="bg-[#8c3d20] text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center cursor-pointer hover:opacity-90 transition"
        type="button"
      >
        <span class="font-bold mr-1 text-lg">+</span>
        Ajouter un service
      </button>
    </div>

    <!-- Séparateur -->
    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <!-- Tableau responsive -->
    <table class="w-full border-collapse text-[14px]">
      <thead>
        <tr class="border-b border-[#E5E7EB] bg-[#F9F9F9]">
          <th class="col-nom text-left p-4 text-black text-[16px] font-semibold">NOM</th>
          <th class="col-description text-left p-4 text-black text-[16px] font-semibold">DESCRIPTION</th>
          <th class="col-prix text-left p-4 text-black text-[16px] font-semibold">PRIX</th>
          <th class="col-horaires text-left p-4 text-black text-[16px] font-semibold">HORAIRES</th>
          <th class="col-actions text-left p-4 text-black text-[16px] font-semibold">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(service, index) in services"
          :key="index"
          class="border-b border-[#ddd]"
        >
          <td class="p-4">{{ service.nom }}</td>
          <td class="p-4">{{ service.description }}</td>
          <td class="p-4">{{ service.prix }}</td>
          <td class="p-4">{{ service.horaires }}</td>
          <td class="p-4">
            <button
              class="bg-green-100 text-[#6CC447] font-medium rounded-md px-3 py-1 mr-2 text-sm cursor-pointer transition hover:bg-green-200"
              type="button"
            >
              Modifier
            </button>
            <button
              class="bg-red-100 text-[#EF5350] font-medium rounded-md px-3 py-1 text-sm cursor-pointer transition hover:bg-red-200"
              type="button"
            >
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>



  <!-- AJOUT/MODIFIER SERVICES -->
 
  <div class="bg-white rounded-xl border border-gray-200 p-7 w-full min-h-[550px]">
    <!-- Header gestion -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold font-['League_Spartan'] text-gray-900">Gestion des services</h2>
      <button class="bg-[#97451F] text-white px-5 py-2 rounded-3xl text-base font-semibold transition">
        Voir la liste
      </button>
    </div>
    <!-- Formulaire d'ajout -->
    <form class="space-y-5">
      <h3 class="text-lg font-semibold font-['League_Spartan'] mb-2">Ajouter un service</h3>
      <!-- Nom -->
      <div>
        <label class="block text-sm font-medium font-['League_Spartan'] mb-1 text-[#4B5563]">Nom du service</label>
        <input
          type="text"
          placeholder="Ex: Soins dentaires"
          class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none font-['League_Spartan']"
        />
      </div>
      <!-- Description -->
      <div>
        <label class="block text-sm font-medium font-['League_Spartan'] mb-1 text-[#4B5563]">Description</label>
        <textarea
          placeholder="Description du service..."
          class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm min-h-[62px] focus:outline-none font-['League_Spartan']"
        ></textarea>
      </div>
      <!-- Prix -->
      <div>
        <label class="block text-sm font-medium font-['League_Spartan'] mb-1 text-[#4B5563]">Prix (€)</label>
        <input
          type="text"
          placeholder="Ex: 600"
          class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none font-['League_Spartan']"
        />
      </div>
      <!-- Horaires -->
      <div>
        <label class="block text-sm font-medium font-['League_Spartan'] mb-1 text-[#4B5563]">Horaire disponibles</label>
        <input
          type="text"
          placeholder="Ex: Lun-Ven 9h à 16h"
          class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none font-['League_Spartan']"
        />
      </div>
      <!-- Boutons -->
      <div class="flex items-center gap-4 mt-3">
        <button type="button" class="bg-transparent text-gray-600 font-semibold font-['League_Spartan'] py-2 px-4 rounded-lg hover:text-gray-900 transition">Annuler</button>
        <button type="submit" class="bg-green-600 text-white font-semibold font-['League_Spartan'] py-2 px-7 rounded-lg transition">
          Ajouter
        </button>
      </div>
    </form>
  </div>


</template>

<script setup>
const services = [
  {
    nom: 'Consultation',
    description: 'Consultation générale pour animaux domestiques',
    prix: '4000 €',
    horaires: 'Lun-Ven, 8h–12h',
  },
  {
    nom: 'Consultation',
    description: 'Consultation générale pour animaux domestiques',
    prix: '4000 €',
    horaires: 'Lun-Ven, 8h–12h',
  },
  {
    nom: 'Consultation',
    description: 'Consultation générale pour animaux domestiques',
    prix: '4000 €',
    horaires: 'Lun-Ven, 8h–12h',
  },
  {
    nom: 'Consultation',
    description: 'Consultation générale pour animaux domestiques',
    prix: '4000 €',
    horaires: 'Lun-Ven, 8h–12h',
  },
  {
    nom: 'Consultation',
    description: 'Consultation générale pour animaux domestiques',
    prix: '4000 €',
    horaires: 'Lun-Ven, 8h–12h',
  },
  {
    nom: 'Consultation',
    description: 'Consultation générale pour animaux domestiques',
    prix: '4000 €',
    horaires: 'Lun-Ven, 8h–12h',
  },
  {
    nom: 'Consultation',
    description: 'Consultation générale pour animaux domestiques',
    prix: '4000 €',
    horaires: 'Lun-Ven, 8h–12h',
  },
  {
    nom: 'Consultation',
    description: 'Consultation générale pour animaux domestiques',
    prix: '4000 €',
    horaires: 'Lun-Ven, 8h–12h',
  }
]
</script>

<style scoped>
/* Largeur personnalisée des colonnes */
.col-nom        { width: 21%; }
.col-description{ width: 16%; }
.col-prix       { width: 24%; }
.col-horaires   { width: 23%; }
.col-actions    { width: 18%; }

/* Si la police League Spartan n'est pas déclarée dans Tailwind config */
.font-\[\'League_Spartan\'\] {
  font-family: 'League Spartan', sans-serif;
}
</style>



