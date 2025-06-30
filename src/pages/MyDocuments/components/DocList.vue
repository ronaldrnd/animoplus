<template>
    <div class="bg-white p-5 rounded-[10px] shadow-sm max-w-[960px] mx-auto mt-10 font-sans">
        <h3 class="text-[#2E2E30] font-league font-bold text-[18px] mb-2">Mes Documents Médicaux</h3>

        <!-- Ligne de séparation principale -->
        <hr class="w-full border-t border-[rgba(197,197,197,0.5)] mb-5" />

        <div>
            <!-- En-tête de section avec icône + titre -->
            <div class="flex items-center gap-2 mb-4">
                <img :src="fileIcon" alt="fichier" class="file-icon" />
                <span class="section-title">Fichiers reçus</span>
            </div>

            <!-- Si aucun fichier -->
            <div v-if="files.length === 0" class="flex items-start gap-2 bg-[#e6f7f1] border-l-[4px] border-[#43A047] p-4 rounded-[5px] ml-[5px]">
                <img :src="alertIcon" alt="alerte" class="alert-icon" />
                <p class="alert-text">Aucun fichier disponible.</p>
            </div>

            <!-- Sinon afficher la liste -->
            <ul class="list-none p-0 m-0">
                <template v-for="(file, index) in files" :key="index">
                    <li class="flex justify-between items-center px-5 py-2.5 mb-1 bg-white -ml-5">
                        <div class="flex items-center gap-2">
                            <img :src="pdfIcon" class="w-6 h-6" :alt="file.name" />
                            <div class="flex flex-col">
                                <strong class="file-name">{{ file.name }}</strong>
                                <span class="file-size">{{ file.size }}</span>
                            </div>
                        </div>

                        <button class="flex items-center text-[10px] text-[#5F5F5F] bg-[#f4f4f4] border border-[#C5C5C5] rounded-[8px] px-2.5 py-1 cursor-pointer">
                            <img :src="eyeIcon" alt="voir" class="icon-eye" />
                            Voir le document
                        </button>
                    </li>

                    <!-- Ligne horizontale si ce n'est pas le dernier fichier -->
                    <div v-if="index !== files.length - 1" class="flex justify-center">
                        <hr class="w-[90%] border-t border-[rgba(197,197,197,0.5)] mb-2" />
                    </div>
                </template>
            </ul>
        </div>
    </div>
</template>



<script setup>
import fileIcon from '@/assets/icons/File-yellow.svg'
import pdfIcon from '@/assets/icons/pdf.svg'
import eyeIcon from '@/assets/icons/eye.svg'
import alertIcon from '@/assets/icons/alert-icon.svg'

const files = [
//   { name: 'draft_01_proposal.pdf', size: '4.2 ko', icon: pdfIcon },
//   { name: 'UX_notes_v2_final.docx', size: '4.2 ko', icon: pdfIcon },
//   { name: 'report_2025_Q1.xlsx', size: '250 Mo', icon: pdfIcon },
//   { name: 'concept_sketch_04.png', size: '4.2 ko', icon: pdfIcon },
//   { name: 'report_2025_Q1.xlsx', size: '250 Mo', icon: pdfIcon }
]
</script>


<style scoped>
/* Police personnalisée utilisée dans le projet */
.font-league {
  font-family: 'League Spartan', sans-serif;
}

/* Icône document dans l'en-tête */
.file-icon {
  width: 20px;
  height: 20px;
}

/* Titre de section */
.section-title {
  font-weight: 500;
  color: #2C2D33;
  font-family: "League Spartan";
  font-size: 16px;
}

/* Nom du fichier */
.file-name {
  font-size: 14px;
  font-family: "League Spartan";
  color: #000;
}

/* Taille du fichier */
.file-size {
  font-size: 12px;
  color: gray;
  font-family: "League Spartan";
}

/* Icône œil */
.icon-eye {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  vertical-align: middle;
}

/* Texte dans l'alerte verte */
.alert-text {
  color: #43A047;
  font-size: 14px;
  font-family: "League Spartan";
}

/* Icône dans l'alerte */
.alert-icon {
  width: 18px;
  height: 18px;
  margin-top: 2px;
}
</style>

