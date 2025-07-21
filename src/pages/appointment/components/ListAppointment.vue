<template>
  <div class="flex flex-col gap-4 mt-4">
    <div class="flex items-center font-bold gap-4">
          <h3>Liste des rendez-vous</h3>
        </div>

        <hr />

      <div
        v-for="(rdv, idx) in appointment"
        :key="idx"
        class="flex items-center bg-white border border-[#ededed] rounded-[14px] px-4 py-2 min-h-[56px] w-full cursor-pointer hover:shadow-md transition-shadow"
        @click="$emit('showAppointmentDetail', rdv)"
      >
        <!-- Colonne gauche : icône calendrier -->
        <div class="flex flex-col items-center min-w-[40px] mr-3">
          <img :src="calendarIcon" alt="calendar" class="w-7 h-7" />
        </div>

        <!-- Partie centrale (titre + sous-titre) -->
        <div class="flex flex-col flex-1">
          <span
            class="text-[15px] font-semibold text-[#43A047] flex items-center gap-1"
          >
            {{ rdv.jour }} le {{ rdv.date }}, {{ rdv.enLigne ? 'En ligne' : 'Sur place' }}
          </span>
          <div class="flex items-center text-[13px] text-[#6B7280] gap-1 mt-0.5">
            <div :class="['w-2.5 h-2.5 rounded-full', getColorClass(rdv.eventType)]"></div>
            {{ rdv.titre }}
          </div>
        </div>

        <!-- Colonne droite : heure + bouton meet -->
        <div class="flex items-center justify-center min-w-[170px] w-[650px]">
          <!-- Heure -->
          <div class="self-stretch inline-flex justify-center items-center gap-5">
            <div class="justify-center text-neutral-800 text-base font-semibold leading-normal">
              {{ rdv.heureDebut }} <br />{{ getTimePeriod(rdv.heureDebut) }}
            </div>
            <div class="w-6 h-6 relative">
              <div class="w-[5.01px] h-[5.02px] left-[15.49px] top-[14.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100"></div>
              <div class="w-4 h-0 left-[3.50px] top-[14.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100"></div>
              <div class="w-[5.01px] h-[5.02px] left-[3.50px] top-[3.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100"></div>
              <div class="w-4 h-0 left-[3.50px] top-[9.01px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100"></div>
              <div class="w-6 h-6 left-[24px] top-[24px] absolute origin-top-left -rotate-180 opacity-0"></div>
            </div>
            <div class="justify-center text-neutral-800 text-base font-semibold leading-normal">
              {{ rdv.heureFin }} <br />{{ getTimePeriod(rdv.heureFin) }}
            </div>
          </div>
          <!-- Bouton Meet -->
          <template v-if="rdv.enLigne && rdv.meetLink">
            <span 
              class="flex items-center justify-center bg-[#FFF] border border-[#ededed] rounded-[9px] px-[11px] h-10 text-[13px] font-medium text-[#965C2A] gap-2 cursor-pointer ml-30 min-w-[250px] hover:bg-gray-50"
              @click.stop="openMeetLink(rdv.meetLink)"
            >
              <img :src="googleMeetIcon" alt="meet" class="w-[30px] h-[30px]" />
              Go to meet link
            </span>
          </template>
        </div>
      </div>
    </div>
</template>

<script setup>
import calendarIcon from '@/assets/icons/calendar.svg'
import googleMeetIcon from '@/assets/icons/google-meet.svg'
import { computed } from 'vue';

const props = defineProps({
  appointment: Object,
});

const emit = defineEmits(['showAppointmentDetail']);

const getColorClass = (type) => {
  console.log(type);
  
  switch (type) {
    case 'red': return 'bg-red-600';
    case 'blue': return 'bg-blue-600';
    case 'orange': return 'bg-orange-600';
    case 'green':
    default:
      return 'bg-green-600';
  }
};

const getTimePeriod = (time) => {
  const [hours] = time.split(':')
  return parseInt(hours) < 12 ? 'AM' : 'PM'
}

const openMeetLink = (meetLink) => {
  window.open(meetLink, '_blank')
}
</script>

<style scoped>

</style>