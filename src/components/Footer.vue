<template>
    <div class="flex flex-col justify-start items-start gap-6 w-full p-8 bg-white">
        <div class="w-full h-0.5 bg-primary-600"></div>
        <div class="self-stretch inline-flex justify-between items-center">
            <div class="p-3 bg-primary-600 inline-flex flex-col justify-start items-start gap-2.5">
                <img class="w-36 h-11" src="../assets/logo_header.png" />
            </div>
            <div class="flex flex-col gap-4 items-start">
                <div class="flex justify-center items-start gap-2">
                    <img :src="marker" alt="icon" />
                    <div class="justify-start text-black text-base font-normal font-['League_Spartan']">345 Faulconer
                        Drive,
                        Suite 4 • Charlottesville, CA, 12345
                    </div>
                </div>
                <div class="flex justify-center items-start gap-2">
                    <img :src="phone" alt="icon" />
                    <div class="justify-start text-black text-base font-normal font-['League_Spartan']">(123) 456-7890
                    </div>
                </div>
                <div class="flex justify-center items-start gap-2">
                    <img :src="date" alt="icon" />
                    <div class="justify-start text-black text-base font-normal font-['League_Spartan']">(123) 456-7890
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-px opacity-20 bg-lime-500"></div>
        <div class="self-stretch inline-flex justify-between items-center">
            <div class="flex justify-start items-center gap-16">
                <div class="justify-start text-slate-900 text-lg font-normal font-['League_Spartan'] uppercase">Contact
                    us</div>
                <div class="justify-start text-slate-900 text-lg font-normal font-['League_Spartan'] uppercase">Help
                </div>
                <div class="justify-start text-slate-900 text-lg font-normal font-['League_Spartan'] uppercase">Privacy
                    Policy</div>
            </div>
            <div class="opacity-50 justify-start text-slate-900 text-lg font-normal font-['League_Spartan']">Copyright ©
                2025 • Doctopet.</div>
        </div>
    </div>
</template>

<script setup>
import date from '@/assets/icons/small-calendar.svg';
import marker from '@/assets/icons/small-marker.svg';
import phone from '@/assets/icons/small-phone.svg';
</script>

<style></style>