<template>
  <div class="bg-white rounded-[12px] border border-[#ededed] px-4 py-6 font-inter">
    <!-- Header -->
    <div class="flex justify-between items-center mb-[15px]">
      <h2 class="text-[19px] font-bold text-[#232323] m-0">Messagerie</h2>
      <button class="bg-[#A0522D] shadow-[0_4px_12px_0_rgba(245,158,11,0.25)] text-white text-[15px] rounded-[20px] border-none px-7 py-[10px] font-medium cursor-pointer transition duration-200 hover:brightness-95">Conversation</button>
    </div>

    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <div class="border border-[#ededed] rounded-[12px] px-4 py-5 bg-[#fcfcfc]">
      <div class="font-league-spartan text-[20px] font-medium mb-5">
        Vos collaborations avec des autres professionnels
      </div>

      <!-- ========= BLOC 1 ========= -->
      <div class="bg-white border border-[#ededed] rounded-[11px] mb-[18px] px-[18px] pt-4 pb-[14px]">
        <div class="flex justify-between items-center">
          <span class="overflow-hidden text-[#21b14c] text-ellipsis font-['League_Spartan'] text-[16px] font-extrabold">
            Urgence Vétérinaire de Nuit
          </span>
          <button class="text-[#32a852] font-medium text-[15px] flex items-center gap-[7px] px-[11px] py-[7px] cursor-pointer">
            <img :src="chatGreen" alt="Message" class="w-[22px] h-[22px]" />
            Message
          </button>
        </div>
        <div class="flex items-center text-[15px] text-[#4B5563] gap-2 mt-2 mb-3">
          <img :src="locationIcon" class="w-5 h-5 mr-1" alt="Location" />
          345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          <img :src="phoneIcon" class="w-5 h-5 mr-1" alt="Phone" />
          (123) 456-7890
          <img :src="clockIcon" class="w-5 h-5 mr-1" alt="Clock" />
          20h - 8h
        </div>
        <div class="bg-white border border-[#ededed] rounded-[10px] flex items-start px-[13px] py-3 mt-1 gap-4">
          <div class="flex items-center justify-center">
            <img :src="calendarIcon" class="w-[38px] h-[38px]" alt="Calendar" />
          </div>
          <div class="flex flex-col justify-center min-w-[175px] gap-1">
            <div class="text-[#43A047] font-medium text-[15px]">Lundi le 17 Juin 2025, En ligne</div>
            <div class="flex items-center text-[14px] text-[#4B5563] gap-[6px] font-normal">
              <img :src="ellipseIcon" alt="Ellipse" class="w-[10px] h-[10px]" />
              Avec Jand Doe
            </div>
          </div>
          <!-- Bloc heure custom -->
          <div class="flex-1 flex justify-end">
            <div class="self-stretch inline-flex justify-center items-center gap-5">
              <div class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal">
                8:45 <br />AM
              </div>
              <div class="w-6 h-6 relative">
                <div class="w-[5.01px] h-[5.02px] left-[15.49px] top-[14.99px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-gray-100"></div>
                <div class="w-4 h-0 left-[3.5px] top-[14.99px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-gray-100"></div>
                <div class="w-[5.01px] h-[5.02px] left-[3.5px] top-[3.99px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-gray-100"></div>
                <div class="w-4 h-0 left-[3.5px] top-[9.01px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-gray-100"></div>
                <div class="w-6 h-6 left-[24px] top-[24px] absolute origin-top-left -rotate-180 opacity-0"></div>
              </div>
              <div class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal">
                10:45 <br />AM
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========= BLOC 2 ========= -->
      <div class="bg-white border border-[#ededed] rounded-[11px] mb-[18px] px-[18px] pt-4 pb-[14px]">
        <div class="flex justify-between items-center">
          <span class="overflow-hidden text-[#43A047] text-ellipsis font-['League_Spartan'] text-[16px] font-extrabold">
            Clinique vétérinaire Centrale
          </span>
          <button class="text-[#32a852] font-medium text-[15px] flex items-center gap-[7px] px-[11px] py-[7px] cursor-pointer">
            <img :src="chatGreen" alt="Message" class="w-[22px] h-[22px]" />
            Message
          </button>
        </div>
        <div class="flex items-center text-[15px] text-[#4B5563] gap-2 mt-2 mb-3">
          <img :src="locationIcon" class="w-5 h-5 mr-1" alt="Location" />
          345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          <img :src="phoneIcon" class="w-5 h-5 mr-1" alt="Phone" />
          (123) 456-7890
          <img :src="clockIcon" class="w-5 h-5 mr-1" alt="Clock" />
          20h - 8h
        </div>
        <div class="bg-white border border-[#ededed] rounded-[10px] flex items-start px-[13px] py-3 mt-1 gap-4">
          <div class="flex items-center justify-center">
            <img :src="calendarIcon" class="w-[38px] h-[38px]" alt="Calendar" />
          </div>
          <div class="flex flex-col justify-center min-w-[175px] gap-1">
            <div class="text-[#232323] font-medium text-[15px]">Suivi de santé de Sandra</div>
            <div class="flex items-center text-[14px] text-[#4B5563] gap-[6px] font-normal">
              <img :src="ellipseIcon" alt="Ellipse" class="w-[10px] h-[10px]" />
              Avec Alex
            </div>
          </div>
        </div>
      </div>

      <!-- ========= BLOC 3 ========= -->
      <div class="bg-white border border-[#ededed] rounded-[11px] mb-[18px] px-[18px] pt-4 pb-[14px]">
        <div class="flex justify-between items-center">
          <span class="overflow-hidden text-[#26c56a] text-ellipsis font-['League_Spartan'] text-[16px] font-extrabold">
            Dr. Martin Vétérinaire
          </span>
          <button class="text-[#32a852] font-medium text-[15px] flex items-center gap-[7px] px-[11px] py-[7px] cursor-pointer">
            <img :src="chatGreen" alt="Message" class="w-[22px] h-[22px]" />
            Message
          </button>
        </div>
        <div class="flex items-center text-[15px] text-[#4B5563] gap-2 mt-2 mb-3">
          <img :src="locationIcon" class="w-5 h-5 mr-1" alt="Location" />
          345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          <img :src="phoneIcon" class="w-5 h-5 mr-1" alt="Phone" />
          (123) 456-7890
          <img :src="clockIcon" class="w-5 h-5 mr-1" alt="Clock" />
          20h - 8h
        </div>
        <div class="bg-white border border-[#ededed] rounded-[10px] flex items-start px-[13px] py-3 mt-1 gap-4">
          <div class="flex items-center justify-center">
            <img :src="calendarIcon" class="w-[38px] h-[38px]" alt="Calendar" />
          </div>
          <div class="flex flex-col justify-center min-w-[175px] gap-1">
            <div class="text-[#43A047] font-medium text-[15px]">Lundi le 17 Juin 2025, En ligne</div>
            <div class="flex items-center text-[14px] text-[#4B5563] gap-[6px] font-normal">
              <img :src="ellipseIcon" alt="Ellipse" class="w-[10px] h-[10px]" />
              Avec Jand Doe
            </div>
          </div>
          <!-- Bloc heure custom -->
          <div class="flex-1 flex justify-end">
            <div class="self-stretch inline-flex justify-center items-center gap-5">
              <div class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal">
                8:45 <br />AM
              </div>
              <div class="w-6 h-6 relative">
                <div class="w-[5.01px] h-[5.02px] left-[15.49px] top-[14.99px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-gray-100"></div>
                <div class="w-4 h-0 left-[3.5px] top-[14.99px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-gray-100"></div>
                <div class="w-[5.01px] h-[5.02px] left-[3.5px] top-[3.99px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-gray-100"></div>
                <div class="w-4 h-0 left-[3.5px] top-[9.01px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-gray-100"></div>
                <div class="w-6 h-6 left-[24px] top-[24px] absolute origin-top-left -rotate-180 opacity-0"></div>
              </div>
              <div class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal">
                10:45 <br />AM
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========= BLOC 4 ========= -->
      <div class="bg-white border border-[#ededed] rounded-[11px] mb-[18px] px-[18px] pt-4 pb-[14px]">
        <div class="flex justify-between items-center">
          <span class="overflow-hidden text-[#43A047] text-ellipsis font-['League_Spartan'] text-[16px] font-extrabold">
            Clinique vétérinaire Centrale
          </span>
          <button class="text-[#32a852] font-medium text-[15px] flex items-center gap-[7px] px-[11px] py-[7px] cursor-pointer">
            <img :src="chatGreen" alt="Message" class="w-[22px] h-[22px]" />
            Message
          </button>
        </div>
        <div class="flex items-center text-[15px] text-[#4B5563] gap-2 mt-2 mb-3">
          <img :src="locationIcon" class="w-5 h-5 mr-1" alt="Location" />
          345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          <img :src="phoneIcon" class="w-5 h-5 mr-1" alt="Phone" />
          (123) 456-7890
          <img :src="clockIcon" class="w-5 h-5 mr-1" alt="Clock" />
          20h - 8h
        </div>
        <div class="bg-white border border-[#ededed] rounded-[10px] flex items-start px-[13px] py-3 mt-1 gap-4">
          <div class="flex items-center justify-center">
            <img :src="calendarIcon" class="w-[38px] h-[38px]" alt="Calendar" />
          </div>
          <div class="flex flex-col justify-center min-w-[175px] gap-1">
            <div class="text-[#232323] font-medium text-[15px]">Suivi de santé de Sandra</div>
            <div class="flex items-center text-[14px] text-[#4B5563] gap-[6px] font-normal">
              <img :src="ellipseIcon" alt="Ellipse" class="w-[10px] h-[10px]" />
              Avec Alex
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import phoneIcon from '@/assets/icons/phone.svg'
import locationIcon from '@/assets/icons/location.svg'
import clockIcon from '@/assets/icons/clock.svg'
import calendarIcon from '@/assets/icons/calendar.svg'
import ellipseIcon from '@/assets/layers/Ellipse.svg'
import chatGreen from '@/assets/icons/chat-Green.svg'
</script>

<style scoped>
.font-inter { font-family: 'Inter', Arial, sans-serif; }
.font-league-spartan { font-family: 'League Spartan', Arial, sans-serif; }
</style>
