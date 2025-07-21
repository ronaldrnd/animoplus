<template>
  <div class=" bg-white flex flex-col justify-between">
    <!-- Header -->
    <header class="flex items-center flex-col w-full px-6 py-4 shadow bg-white">
      <h1 class="text-3xl font-semibold text-linear-line">Prendre rendez-vous</h1>
    </header>

    <!-- Formulaire -->
    <main class="flex-1 px-4 sm:px-8 py-8 max-w-4xl mx-auto">
      <form class="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-neutral-200 space-y-6">
        <div>
          <label class="block text-neutral-700 font-medium mb-1" for="fullName">Nom complet</label>
          <input
            id="fullName"
            type="text"
            class="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Ex : Jean Rakoto"
          />
        </div>

        <div>
          <label class="block text-neutral-700 font-medium mb-1" for="email">Adresse e-mail</label>
          <input
            id="email"
            type="email"
            class="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Ex : jean@email.com"
          />
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-neutral-700 font-medium mb-1" for="date">Date souhaitée</label>
            <input
              id="date"
              type="date"
              class="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label class="block text-neutral-700 font-medium mb-1" for="time">Heure souhaitée</label>
            <input
              id="time"
              type="time"
              class="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        <div>
          <label class="block text-neutral-700 font-medium mb-1" for="message">Motif du rendez-vous</label>
          <textarea
            id="message"
            rows="4"
            class="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Décrivez brièvement votre besoin..."
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-primary-600 hover:bg-primary-500 text-white font-semibold py-3 rounded-lg shadow transition duration-200"
        >
          Envoyer la demande
        </button>
      </form>
    </main>
  </div>
</template>
