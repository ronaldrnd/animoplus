<template>
    <CardLayout title="Mes documents">
        <div class="self-stretch flex flex-col justify-start items-start gap-2.5">
            <template v-for="(doc, index) in documents" :key="index">
                <div class="self-stretch h-14 inline-flex justify-start items-center gap-6">
                    <div class="w-8 h-8 relative overflow-hidden">
                        <img :src="pdfIcon" alt="pdf icon" />
                    </div>
                    <div class="inline-flex flex-col justify-start items-start gap-1">
                        <div class="justify-start text-black text-base font-semibold font-['League_Spartan']">
                            {{ doc.name }}
                        </div>
                        <div class="opacity-50 justify-start text-black text-sm font-normal font-['League_Spartan']">
                            {{ doc.size }}
                        </div>
                    </div>
                </div>
                <hr v-if="index !== documents.length - 1" />
            </template>
        </div>
    </CardLayout>
</template>

<script setup>
import pdfIcon from "@/assets/icons/pdf.svg";
import CardLayout from "./CardLayout.vue";

const documents = [
    { name: "draft_01_proposal.pdf", size: "4.2 ko" },
    { name: "UX_notes_v2_final.docx", size: "4.2 ko" },
    { name: "report_2025_Q1.xlsx", size: "250 Mo" },
    { name: "concept_sketch_04.png", size: "4.2 ko" }
];
</script>

<style scoped>
hr {
    width: 100%;
    border-color: var(--color-neutral-200);
}
</style>
