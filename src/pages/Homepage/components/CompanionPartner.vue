<template>
  <section class="w-[95%] mb-6 flex flex-col items-center">
    <div class="w-full flex flex-col items-center gap-3">
      <h1 class="text-green-600 text-center font-spartan text-2xl font-extrabold uppercase">
        LE PARTENAIRE DE VOTRE COMPAGNON
      </h1>
      <img
        :src="layerYellow"
        alt="Soulignement jaune"
        class="w-[150px] -mt-1 mb-5 relative left-48"
      />

      <div
        class="w-full flex flex-col gap-8 mt-2 md:flex-row md:justify-around md:items-start"
      >
        <!-- Bloc 1 -->
        <div class="max-w-[300px] flex flex-col items-center text-center gap-3 mt-8">
          <img :src="careIcon" alt="Soins" class="w-10 h-10" />
          <h3 class="font-spartan text-sm font-bold text-gray-900 uppercase">
            FACILITE L'ACCÈS AUX SOINS
          </h3>
          <p class="font-spartan text-sm text-gray-600">
            Trouvez rapidement un professionnel animalier près de chez vous et prenez rendez-vous en quelques clics.
          </p>
        </div>

        <!-- Bloc 2 -->
        <div class="max-w-[300px] flex flex-col items-center text-center gap-3 mt-8">
          <img :src="followupIcon" alt="Suivi" class="w-10 h-10" />
          <h3 class="font-spartan text-sm font-bold text-gray-900 uppercase">
            UN SUIVI SUR-MESURE
          </h3>
          <p class="font-spartan text-sm text-gray-600">
            Bénéficiez d’un suivi personnalisé de votre animal avec un accès à son dossier médical complet.
          </p>
        </div>

        <!-- Bloc 3 -->
        <div class="max-w-[300px] flex flex-col items-center text-center gap-3 mt-8">
          <img :src="certifiedIcon" alt="Certifiés" class="w-10 h-10" />
          <h3 class="font-spartan text-sm font-bold text-gray-900 uppercase">
            DES PROFESSIONNELS CERTIFIÉS
          </h3>
          <p class="font-spartan text-sm text-gray-600">
            Tous nos partenaires sont des professionnels vérifiés et certifiés afin de garantir un service fiable et sécurisé.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import careIcon from '@/assets/icons/care.svg'
import followupIcon from '@/assets/icons/followup.svg'
import certifiedIcon from '@/assets/icons/certified.svg'
import layerYellow from '@/assets/layers/layer-yellow.svg'
</script>
