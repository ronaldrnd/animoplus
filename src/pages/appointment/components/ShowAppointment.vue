<template>
  <BaseModal title="Rendez-vous" @close="emit('close')" :footer="false">
    <!-- Recap Card -->
    <div class="border border-gray-200 rounded-lg p-4 bg-white flex flex-col gap-2">
      <div class="flex items-center gap-3">
        <img :src="calendarIcon" class="w-8 h-8" />
        <div class="flex flex-col">
          <span class="text-sm font-bold text-primary-600">
            {{ formattedDate }}, <span>{{ appointment?.titre }}</span>
          </span>
          <span class="text-sm text-gray-500 flex items-center gap-2">
            <div :class="['w-2.5 h-2.5 rounded-full', ellipseColorClass]"></div>
            Avec {{ appointment?.service || 'Professionnel' }}
          </span>
        </div>
      </div>
      <div class="flex justify-center items-center gap-5">
        <div class="text-base font-semibold text-gray-800">
          {{ appointment?.heureDebut }}<br />AM
        </div>
        <div class="w-6 h-6 relative">
          <div class="w-1.5 h-1.5 absolute left-[15.49px] top-[14.99px] border border-gray-300"></div>
          <div class="w-4 h-0 absolute left-[3.5px] top-[14.99px] border border-gray-300"></div>
          <div class="w-1.5 h-1.5 absolute left-[3.5px] top-[3.99px] border border-gray-300"></div>
          <div class="w-4 h-0 absolute left-[3.5px] top-[9.01px] border border-gray-300"></div>
        </div>
        <div class="text-base font-semibold text-gray-800">
          {{ appointment?.heureFin }}<br />AM
        </div>
      </div>
      <div v-if="appointment?.isOnline" class="mt-3 flex">
        <a :href="appointment.meetLink" target="_blank" class="flex items-center justify-center gap-2 border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-600 font-medium cursor-pointer w-full">
          <img :src="googleMeetIcon" alt="meet" class="w-6 h-6" />
          Go to meet link
        </a>
      </div>
    </div>

    <!-- Infos animal/adresse/service -->
    <div class="flex flex-col gap-2 mt-5">
      <div class="flex flex-col gap-1 text-gray-600">
        <div class="text-sm">Animal</div>
        <div class="bg-gray-100 rounded-md px-3 py-2 text-base font-medium text-gray-900">
          {{ appointment?.animal || 'Inconnu' }}
        </div>
      </div>
      <div class="flex flex-col gap-1 text-gray-600">
        <div class="text-sm">Adresse</div>
        <div class="bg-gray-100 rounded-md px-3 py-2 text-base font-bold text-gray-900">
          {{ appointment?.address || 'Non précisé' }}
        </div>
      </div>
      <div class="flex flex-col gap-1 text-gray-600">
        <div class="text-sm">Service</div>
        <div class="bg-gray-100 rounded-md px-3 py-2 text-base font-medium text-gray-900">
          {{ appointment?.service || 'Service inconnu' }}
        </div>
      </div>
    </div>

    <!-- Service Card -->
    <div class="border border-gray-200 rounded-lg p-4 mt-4 bg-white flex flex-col gap-1">
      <div class="text-green-600 font-bold text-base">
        {{ appointment?.pro?.name || 'Dr. inconnu(e)' }}
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-500">
        <img :src="locationsIcon" class="w-4 h-4" />
        <span>{{ appointment?.pro?.address || 'Adresse inconnue' }}</span>
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-500">
        <img :src="phoneIcon" class="w-4 h-4" />
        <span>{{ appointment?.pro?.phone || 'Téléphone inconnu' }}</span>
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-500">
        <img :src="clockIcon" class="w-4 h-4" />
        <span>Ouvert 24h/24</span>
      </div>
      <div class="mt-2">
        <span class="inline-block px-3 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded">
          OUVERT
        </span>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import { computed } from 'vue';
import BaseModal from '@/components/common/BaseModal.vue';

import calendarIcon from '@/assets/icons/small-calendar.svg';
import googleMeetIcon from '@/assets/icons/google-meet.svg';
import phoneIcon from '@/assets/icons/phone.svg';
import locationsIcon from '@/assets/icons/location.svg';
import clockIcon from '@/assets/icons/clock.svg';

const props = defineProps({
  appointment: Object,
});

const emit = defineEmits(['close']);

const formattedDate = computed(() => {
  if (!props.appointment?.date) return 'Date inconnue';
  const date = new Date(props.appointment.date);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
});

const ellipseColorClass = computed(() => {
  const type = props.appointment?.eventType;
  switch (type) {
    case 'red': return 'bg-red-600';
    case 'blue': return 'bg-blue-600';
    case 'orange': return 'bg-orange-600';
    case 'green':
    default:
      return 'bg-green-600';
  }
});
</script>
