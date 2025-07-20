<template>
  <div class="comptabilite-wrapper">
    <!-- Titre principal -->
    <h2 class="main-title">Comptabilité</h2>

    <!-- Séparateur -->
    <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

    <!-- Bloc Mois -->
    <div class="mois-section">
      <!-- Juin -->
      <div class="mois-row">
        <span class="mois-title">Juin</span>
        <div class="cards-row">
          <div class="stat-card gain">
            <span class="card-title">Gain</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
          <div class="stat-card depense">
            <span class="card-title">Dépenses</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
          <div class="stat-card benefice">
            <span class="card-title">Bénéfices</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Séparateur -->
      <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />

      <!-- Mai -->
      <div class="mois-row">
        <span class="mois-title">Mai</span>
        <div class="cards-row">
          <div class="stat-card gain">
            <span class="card-title">Gain</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
          <div class="stat-card depense">
            <span class="card-title">Dépenses</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
          <div class="stat-card benefice">
            <span class="card-title">Bénéfices</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Séparateur -->
      <hr class="h-px bg-[rgba(197,197,197,0.5)] my-4 border-none" />
      
      <!-- Avril -->
      <div class="mois-row">
        <span class="mois-title">Avril</span>
        <div class="cards-row">
          <div class="stat-card gain">
            <span class="card-title">Gain</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
          <div class="stat-card depense">
            <span class="card-title">Dépenses</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
          <div class="stat-card benefice">
            <span class="card-title">Bénéfices</span>
            <div class="card-value">
              <span class="value-main">7,265</span>
              <span class="value-variation">
                + 7,265
                <img :src="arrowUp" alt="augmentation" class="arrow-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ajouter une dépense -->
    <div class="ajouter-depense-section">
      <h3 class="ajouter-title">Ajouter une dépense</h3>
      <div class="form-row">
        <div class="form-group">
          <label for="titre">Titre</label>
          <input type="text" id="titre" placeholder="Ex: Achat seringues" />
        </div>
        <div class="form-group">
          <label for="montant">Montant (€)</label>
          <input type="text" id="montant" value="600" />
        </div>
      </div>
      <div class="form-actions">
        <button class="btn-cancel">Annuler</button>
        <button class="btn-add">Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import arrowUp from '@/assets/icons/arrow-up.svg'
</script>


<style scoped>
.comptabilite-wrapper {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 32px 24px 24px 24px;
 width: 100%;
  margin: 0 auto;
  font-family: 'Poppins', Arial, sans-serif;
}
.main-title {
  color: #2E2E30;
  font-family: "League Spartan";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.mois-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.mois-row {
  margin-bottom: 4px;
}
.mois-title {
  font-size: 20px;
  font-weight: 500;
  color: var(--Primary---600, #43A047);
  font-family: "League Spartan";
  margin-bottom: 10px;
  display: block;
  margin-left: 4px;
}
.cards-row {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}
.stat-card {
  flex: 1;
  border-radius: 12px;
  padding: 18px 24px 30px 30px;
  min-width: 200px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.stat-card.gain {
  background: #a5d6a7;
}
.stat-card.depense {
  background: #e5cfc6;
}
.stat-card.benefice {
  background: #e3e5e8;
}
.card-title {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
}
.card-value {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.value-main {
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
}
.value-variation {
  font-size: 13px;
  color: #000000;
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.arrow-icon {
  width: 16px;
  height: 16px;
  margin-left: 4px;
  vertical-align: middle;
  display: inline-block;
}

.ajouter-depense-section {
  background: #fff;
  border-radius: 10px;
  margin-top: 32px;
  padding-top: 16px;
}
.ajouter-title {
  color: #000;
  font-family: "League Spartan";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
}
.form-row {
  display: flex;
  gap: 18px;
  margin-bottom: 12px;
}
.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
  color: var(--Neutral---600, #4B5563);
  font-family: "League Spartan";
}
.form-group input {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 15px;
}
.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
.btn-cancel {
  background: none;
  color: var(--Neutral---600, #4B5563);
  font-family: "League Spartan";
  border: none;
  font-size: 16px;
  padding: 8px 18px;
  border-radius: 7px;
  cursor: pointer;
}
.btn-add {
  background: var(--Primary---600, #43A047);
  color: #fff;
  border: none;
  font-size: 15px;
  padding: 8px 22px;
  border-radius: 7px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.15s;
}

</style>
