<template>
    <CardLayout title="Mes rendez-vous">
        <div class="self-stretch flex flex-col justify-start items-start gap-2">
            <div class="self-stretch inline-flex justify-center items-center gap-5">
                <img :src="calendarIcon" class="text-primary-600" alt="appointment" />
                <div class="flex-1 inline-flex flex-col justify-start items-start gap-2">
                    <div
                        class="self-stretch justify-center text-color-gray-100 text-xs font-medium font-['League_Spartan'] leading-none">
                        Rendez-vous recent
                    </div>
                    <div class="self-stretch inline-flex justify-start items-center gap-2">
                        <div class="w-2.5 h-2.5 bg-red-700 rounded-full"></div>
                        <div
                            class="flex-1 justify-center text-color-gray-100 text-xs font-medium font-['League_Spartan'] leading-none">
                            Meeting with Prashant and Sh..
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            
            <div class="self-stretch inline-flex justify-center items-center gap-5">
                <div
                    class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal">
                    10:45 <br />AM
                </div>
                <div class="w-6 h-6 relative">
                    <div
                        class="w-[5.01px] h-[5.02px] left-[15.49px] top-[14.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100">
                    </div>
                    <div
                        class="w-4 h-0 left-[3.50px] top-[14.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100">
                    </div>
                    <div
                        class="w-[5.01px] h-[5.02px] left-[3.50px] top-[3.99px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100">
                    </div>
                    <div
                        class="w-4 h-0 left-[3.50px] top-[9.01px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-color-gray-100">
                    </div>
                    <div class="w-6 h-6 left-[24px] top-[24px] absolute origin-top-left -rotate-180 opacity-0"></div>
                </div>
                <div
                    class="justify-center text-neutral-800 text-base font-semibold font-['League_Spartan'] leading-normal">
                    10:45 <br />AM
                </div>
            </div>
            <div
                class="self-stretch px-4 py-1 bg-color-gray-10 rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-300/50 inline-flex justify-center items-center gap-2">
                <img :src="googleMeetIcon" alt="pdf icon" />
                <div
                    class="justify-center text-color-gray-80 text-sm font-normal font-['League_Spartan'] leading-tight">
                    Voir le lien
                </div>
            </div>
        </div>

    </CardLayout>
</template>

<script setup>
import CardLayout from "./CardLayout.vue";
import calendarIcon from "@/assets/icons/calendar.svg";
import googleMeetIcon from "@/assets/icons/google-meet.svg";

</script>
