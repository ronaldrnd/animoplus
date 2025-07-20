<template>
  <div class="stock-container">
    <div class="header-row">
      <h2>Gestion de stock</h2>
      <button class="see-list-btn">Voir la liste</button>
    </div>
    <hr class="separator" />

    <div class="add-title"><strong>Ajouter un produit</strong></div>

    <form class="add-form">
      <div class="form-group">
        <label>Nom du médicament</label>
        <input type="text" placeholder="Ex: Ibuprofen 200mg" />
      </div>
      <div class="form-group">
        <label>Quantité en stock</label>
        <input type="text" placeholder="Ex: 50" />
      </div>
      <div class="form-group">
        <label>Seuil d’alerte</label>
        <input type="text" placeholder="Ex: 10" />
      </div>
      <div class="form-group">
        <label>Prix unitaire (€)</label>
        <input type="text" placeholder="Ex: 600" />
      </div>
      <div class="form-actions">
        <button type="button" class="cancel-btn">Annuler</button>
        <button type="submit" class="add-btn">Ajouter</button>
      </div>
    </form>

    <div class="auto-order-section">
      <div class="auto-order-header">
        <img :src="storeIcon" alt="Store" class="icon" />
        <span class="auto-order-title">Commande automatique</span>
      </div>
      <p class="auto-order-text">
        Des produits sont en dessous du seuil minimal. Un email automatique peut être généré vers le fournisseur avec les quantités recommandées.
      </p>
      <button class="auto-order-btn">Générer une commande fournisseur</button>
    </div>
  </div>
</template>

<script setup>
import storeIcon from '@/assets/icons/store-icon.svg'
</script>

<style scoped>
.stock-container {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ededed;
  padding: 24px 16px 0 16px;
  font-family: 'Inter', Arial, sans-serif;
  margin-top: 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.header-row h2 {
  color: #2E2E30;
  text-align: center;
  font-family: "League Spartan";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.see-list-btn {
  background: var(--Accent---500, #A0522D);
  box-shadow: 0px 4px 12px 0px rgba(245, 158, 11, 0.25);
  color: #fff;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  padding: 10px 28px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s;
}

.separator {
  border: none;
  border-top: 1px solid #ededed;
  margin: 0 0 24px 0;
}

.add-title {
  color: #000;
  font-family: "League Spartan";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
}

.add-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.form-group label {
  font-size: 15px;
  color: var(--Neutral---600, #4B5563);
  font-weight: 500;
}

.form-group input {
  border: 1px solid #e5e7eb;
  border-radius: 7px;
  font-size: 15px;
  padding: 12px 16px;
  background: #fafafa;
  color: #232323;
  outline: none;
  transition: border 0.2s;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 5px;
}

.cancel-btn {
  background: transparent;
  color: #646464;
  border: none;
  font-size: 15px;
  font-weight: 500;
  padding: 9px 24px;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.18s;
}

.add-btn {
  background: var(--Primary---600, #43A047);
  color: #fff;
  border: none;
  border-radius: 9px;
  font-weight: 600;
  font-size: 15px;
  padding: 9px 24px;
  cursor: pointer;
  transition: filter 0.19s;
}

/* Section Commande automatique */
.auto-order-section {
  margin-top: 28px;
  background: #fdf4ec;
  border-radius: 10px;
  border-left: 6px solid #b86b38;
  padding: 16px 22px 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.auto-order-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #b86b38;
}

.icon {
  font-size: 18px;
  width: 28px;
  height: 28px;
}

.auto-order-title {
  font-size: 15px;
}

.auto-order-text {
  font-size: 14px;
  color: #8f6e51;
  margin: 0;
}

.auto-order-btn {
  background: #b86b38;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  padding: 9px 24px;
  align-self: flex-start;
  margin-top: 6px;
  cursor: pointer;
  transition: filter 0.2s;
}

</style>
