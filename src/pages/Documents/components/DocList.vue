<template>
    <section class="border border-neutral-200 rounded-[10px] p-8 flex flex-col gap-8">
        <TitleDashboard title="Mes Documents Médicaux" />

        <hr />

        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <img :src="fileIcon" alt="fichier" />
                <span class="text-lg text-primary-600 font-bold">Fichiers reçus</span>
            </div>

            <Alert v-if="files.length === 0" alert-description="Aucun fichier disponible." />

            <ul class="list-none p-0 m-0">
                <template v-for="(file, index) in files" :key="index">
                    <li class="flex justify-between items-center px-5 py-2.5 mb-1 bg-white -ml-5">
                        <div class="flex items-center gap-2">
                            <img :src="pdfIcon" :alt="file.name" />
                            <div class="flex flex-col">
                                <strong>{{ file.name }}</strong>
                                <span class="file-size">{{ file.size }}</span>
                            </div>
                        </div>

                        <a :href="file.url" target="_blank" rel="noopener noreferrer"
                            class="flex items-center gap-2 text-[14px] text-[#5F5F5F] bg-[#f4f4f4] border border-neutral-200 rounded-[8px] px-2.5 py-1 cursor-pointer">
                            <img :src="eyeIcon" alt="voir" />
                            <span>Voir le document</span>
                        </a>
                    </li>
                    <div v-if="index !== files.length - 1">
                        <hr />
                    </div>
                </template>
            </ul>
        </div>
    </section>
</template>



<script setup>
import fileIcon from '@/assets/icons/File-yellow.svg'
import pdfIcon from '@/assets/icons/pdf.svg'
import eyeIcon from '@/assets/icons/eye.svg'

import Alert from '@/components/common/Alert.vue'
import TitleDashboard from '@/components/common/TitleDashboard.vue'

const files = [
    { name: 'draft_01_proposal.pdf', size: '4.2 ko', icon: pdfIcon, url: '/documents/draft_01_proposal.pdf' },
    { name: 'UX_notes_v2_final.docx', size: '4.2 ko', icon: pdfIcon, url: '/documents/UX_notes_v2_final.docx' },
    { name: 'report_2025_Q1.xlsx', size: '250 Mo', icon: pdfIcon, url: '/documents/report_2025_Q1.xlsx' },
    { name: 'concept_sketch_04.png', size: '4.2 ko', icon: pdfIcon, url: '/documents/concept_sketch_04.png' },
    { name: 'report_2025_Q1.xlsx', size: '250 Mo', icon: pdfIcon, url: '/documents/report_2025_Q1.xlsx' }
]
</script>


<style scoped>
.file-size {
    font-size: 12px;
    color: gray;
    font-family: "League Spartan";
}
</style>
