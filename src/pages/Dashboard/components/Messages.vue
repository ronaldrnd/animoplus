<template>
    <CardLayout title="Mes messages">
        <div class="self-stretch inline-flex flex-col justify-start items-center">
            <div v-for="(message, index) in messages" :key="index"
                class="self-stretch px-6 py-3 border-b border-slate-100 flex flex-col justify-center items-center gap-2.5"
                :class="{ 'bg-gray-50': message.unread }">
                <div class="self-stretch inline-flex justify-start items-start gap-3.5">
                    <div class="relative">
                        <img class="w-12 h-12 rounded-lg" :src="message.image" alt="Avatar" />
                        <div class="absolute top-[-2px] right-[-2px] w-2 h-2 rounded-full"
                            :class="message.unread ? 'bg-indigo-500' : 'bg-slate-300'">
                        </div>
                    </div>
                    <div class="flex-1 self-stretch inline-flex flex-col justify-between items-start">
                        <div class="self-stretch inline-flex justify-between items-center">
                            <div class="justify-start text-zinc-700 text-base font-medium font-['League_Spartan']">
                                {{ message.name }}
                            </div>
                            <div class="opacity-0 flex justify-start items-start gap-2">
                                <div class="justify-start text-gray-400 text-xs font-normal font-['League_Spartan']">
                                    12 Sept 2022
                                </div>
                            </div>
                            <div v-if="message.unread" class="flex justify-start items-center gap-3">
                                <div
                                    class="px-1.5 py-0.5 bg-orange-50 rounded-lg flex justify-start items-start gap-2.5">
                                    <div
                                        class="text-right justify-start text-zinc-900 text-xs font-normal font-['League_Spartan']">
                                        Non lu
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="self-stretch inline-flex justify-between items-end">
                            <div
                                class="flex-1 justify-start text-neutral-400 text-xs font-normal font-['League_Spartan']">
                                {{ message.content }}
                            </div>
                            <div class="flex justify-start items-start gap-14">
                                <div
                                    class="text-right justify-start text-neutral-400 text-xs font-normal font-['League_Spartan']">
                                    {{ message.time }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardLayout>
</template>

<script setup>
import CardLayout from "./CardLayout.vue";

const messages = [
    {
        name: "Jane Doe",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?_gl=1*196xn2d*_ga*MTc4MDAwOTUxOC4xNzQ5OTgwMjgw*_ga_8JE65Q40S6*czE3NTAzMzEyMTQkbzMkZzEkdDE3NTAzMzEyMzMkajQxJGwwJGgw",
        content: "Hi, I want make enquiries about you...",
        time: "12:55 am",
        unread: true,
    },
    {
        name: "Janet Adebayo",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?_gl=1*196xn2d*_ga*MTc4MDAwOTUxOC4xNzQ5OTgwMjgw*_ga_8JE65Q40S6*czE3NTAzMzEyMTQkbzMkZzEkdDE3NTAzMzEyMzMkajQxJGwwJGgw",
        content: "Hi, I want make enquiries about you...",
        time: "12:55 am",
        unread: false,
    },
    {
        name: "Kunle Adekunle",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?_gl=1*196xn2d*_ga*MTc4MDAwOTUxOC4xNzQ5OTgwMjgw*_ga_8JE65Q40S6*czE3NTAzMzEyMTQkbzMkZzEkdDE3NTAzMzEyMzMkajQxJGwwJGgw",
        content: "Hi, I want make enquiries about you...",
        time: "12:55 am",
        unread: false,
    },
    {
        name: "Kunle Adekunle",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?_gl=1*196xn2d*_ga*MTc4MDAwOTUxOC4xNzQ5OTgwMjgw*_ga_8JE65Q40S6*czE3NTAzMzEyMTQkbzMkZzEkdDE3NTAzMzEyMzMkajQxJGwwJGgw",
        content: "Hi, I want make enquiries about you...",
        time: "12:55 am",
        unread: false,
    },
    {
        name: "Kunle Adekunle",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?_gl=1*196xn2d*_ga*MTc4MDAwOTUxOC4xNzQ5OTgwMjgw*_ga_8JE65Q40S6*czE3NTAzMzEyMTQkbzMkZzEkdDE3NTAzMzEyMzMkajQxJGwwJGgw",
        content: "Hi, I want make enquiries about you...",
        time: "12:55 am",
        unread: false,
    },
];
</script>
