<template>
  <div class="bg-white rounded-xl border border-gray-200 p-7 max-w-3xl mx-auto mt-8">
    <!-- Header gestion -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold font-['League_Spartan'] text-gray-900">Gestion des services</h2>
      <button class="bg-[#97451F] text-white px-5 py-2 rounded-lg text-base font-semibold hover:bg-[#7b3516] transition">
        Voir la liste
      </button>
    </div>
    <!-- Formulaire d'ajout -->
    <form class="space-y-5">
      <h3 class="text-lg font-semibold font-['League_Spartan'] mb-2">Ajouter un service</h3>
      <!-- Nom -->
      <div>
        <label class="block text-sm font-medium font-['League_Spartan'] mb-1">Nom du service</label>
        <input
          type="text"
          placeholder="Ex: Soins dentaires"
          class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 font-['League_Spartan']"
        />
      </div>
      <!-- Description -->
      <div>
        <label class="block text-sm font-medium font-['League_Spartan'] mb-1">Description</label>
        <textarea
          placeholder="Description du service..."
          class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm min-h-[62px] focus:outline-none focus:ring-2 focus:ring-green-600 font-['League_Spartan']"
        ></textarea>
      </div>
      <!-- Prix -->
      <div>
        <label class="block text-sm font-medium font-['League_Spartan'] mb-1">Prix (€)</label>
        <input
          type="text"
          placeholder="Ex: 600"
          class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 font-['League_Spartan']"
        />
      </div>
      <!-- Horaires -->
      <div>
        <label class="block text-sm font-medium font-['League_Spartan'] mb-1">Horaire disponibles</label>
        <input
          type="text"
          placeholder="Ex: Lun-Ven 9h à 16h"
          class="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 font-['League_Spartan']"
        />
      </div>
      <!-- Boutons -->
      <div class="flex items-center gap-4 mt-3">
        <button type="button" class="bg-transparent text-gray-600 font-semibold font-['League_Spartan'] py-2 px-4 rounded-lg hover:text-gray-900 transition">Annuler</button>
        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-semibold font-['League_Spartan'] py-2 px-7 rounded-lg transition">Ajouter</button>
      </div>
    </form>
  </div>
</template>
