<template>
    <section class="speciality-section">
        <h2 class="section-title">Liste des Spécialités</h2>

        <!-- Séparateur -->
        <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

        <div class="speciality-grid">
            <div v-for="(item, index) in specialities" :key="index" class="speciality-card">
                <img :src="item.image" alt="speciality" class="speciality-img" />
                <h3 class="speciality-title">{{ item.title }}</h3>
                <p class="speciality-description">{{ item.description }}</p>
                <button class="speciality-btn">Voir les professionnels</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import chirurgienImg from '@/assets/images/chirurgien.svg'
import imagerieImg from '@/assets/images/imagerie.svg'
import dermatologueImg from '@/assets/images/dermatologue.svg'
import cardiologueImg from '@/assets/images/cardiologue.svg'
import ophtalmoImg from '@/assets/images/ophtalmo.svg'
import neurologueImg from '@/assets/images/neurologue.svg'

const specialities = [
    {
        title: "Vétérinaire Chirurgien",
        description: "Interventions chirurgicales vétérinaires, incluant les chirurgies courantes et spécifiques.",
        image: chirurgienImg
    },
    {
        title: "Vétérinaire en Imagerie Médicale",
        description: "Spécialistes de l’imagerie médicale pour le diagnostic et le suivi post-opératoire.",
        image: imagerieImg
    },
    {
        title: "Vétérinaire Dermatologue",
        description: "Diagnostic et traitement des affections de la peau des animaux.",
        image: dermatologueImg
    },
    {
        title: "Vétérinaire Cardiologue",
        description: "Spécialistes des maladies cardiaques et vasculaires chez les animaux.",
        image: cardiologueImg
    },
    {
        title: "Vétérinaire Ophtalmologue",
        description: "Diagnostic et traitement des pathologies oculaires chez les animaux.",
        image: ophtalmoImg
    },
    {
        title: "Vétérinaire Neurologue",
        description: "Diagnostic et traitement des troubles neurologiques chez les animaux.",
        image: neurologueImg
    }
]
</script>

<style scoped>
.speciality-section {
  border: 1px solid var(--Neutral---200, #E5E7EB);
  border-radius: 14px;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
}

.section-title {
  color: #2E2E30;
  font-family: "League Spartan";
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  font-family: sans-serif;
}

.speciality-card {
  border: 1px solid var(--Neutral---200, #E5E7EB);
  border-radius: 12px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05);
  padding: 12px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;
  flex: 1 0 0;
}

.speciality-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}


.speciality-img {
  width: 100%;
  height: 153px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  align-self: stretch;
}

.speciality-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 20px;
  color: var(--Neutral---600, #4B5563);
  line-height: normal;
}

.speciality-description {
  font-size: 14px;
  color: var(--Neutral---600, #4B5563);
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
}

.speciality-btn {
  background: var(--Primary---600, #43A047);
  color: white;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}
</style>