<template>
  <div class="stock-container">
    <div class="header-row">
      <h2>Gestion de stock</h2>
      <button class="add-btn">
        <span class="plus">+</span>
        Ajouter un produit
      </button>
    </div>
    <table class="stock-table">
      <thead>
        <tr>
          <th>NOM</th>
          <th>QUANTITÉ</th>
          <th>PRIX UNITAIRE</th>
          <th>SEUIL MINIMUM</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paracétamol 500mg</td>
          <td class="low">5</td>
          <td>4 €</td>
          <td>10</td>
          <td>
            <button class="edit-btn">Modifier</button>
            <button class="delete-btn">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>Amoxicilline 250mg</td>
          <td>40</td>
          <td>4 €</td>
          <td>10</td>
          <td>
            <button class="edit-btn">Modifier</button>
            <button class="delete-btn">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>Paracétamol 500mg</td>
          <td class="low">5</td>
          <td>4 €</td>
          <td>10</td>
          <td>
            <button class="edit-btn">Modifier</button>
            <button class="delete-btn">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>Amoxicilline 250mg</td>
          <td>40</td>
          <td>4 €</td>
          <td>10</td>
          <td>
            <button class="edit-btn">Modifier</button>
            <button class="delete-btn">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>Paracétamol 500mg</td>
          <td>40</td>
          <td>4 €</td>
          <td>10</td>
          <td>
            <button class="edit-btn">Modifier</button>
            <button class="delete-btn">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>Amoxicilline 250mg</td>
          <td class="low">8</td>
          <td>4 €</td>
          <td>10</td>
          <td>
            <button class="edit-btn">Modifier</button>
            <button class="delete-btn">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>Paracétamol 500mg</td>
          <td class="low">10</td>
          <td>4 €</td>
          <td>10</td>
          <td>
            <button class="edit-btn">Modifier</button>
            <button class="delete-btn">Supprimer</button>
          </td>
        </tr>
        <tr>
          <td>Amoxicilline 250mg</td>
          <td>50</td>
          <td>4 €</td>
          <td>10</td>
          <td>
            <button class="edit-btn">Modifier</button>
            <button class="delete-btn">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

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
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.header-row h2 {
  font-size: 19px;
  font-weight: 700;
  color: #232323;
  margin: 0;
}

.add-btn {
  background: #b86b38;
  color: #fff;
  font-size: 15px;
  border-radius: 18px;
  border: none;
  padding: 10px 24px 10px 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: filter 0.2s;
}

.add-btn .plus {
  font-size: 19px;
  margin-right: 8px;
}

.stock-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  background: #fff;
}

.stock-table thead th {
  background: #fafafa;
  padding: 12px 8px;
  font-weight: 600;
  color: #232323;
  border-bottom: 1px solid #ececec;
  text-align: left;
  letter-spacing: 0.02em;
}

.stock-table tbody td {
  padding: 10px 8px;
  border-bottom: 1px solid #ececec;
}

.stock-table tbody tr:last-child td {
  border-bottom: none;
}

.stock-table th:nth-child(1), .stock-table td:nth-child(1) { width: 130px; }
.stock-table th:nth-child(2), .stock-table td:nth-child(2) { width: 130px; }
.stock-table th:nth-child(3), .stock-table td:nth-child(3) { width: 160px; }
.stock-table th:nth-child(4), .stock-table td:nth-child(4) { width: 150px; }
.stock-table th:nth-child(5), .stock-table td:nth-child(5) { width: 150px; }

.stock-table th, .stock-table td {
  padding-left: 24px;
  padding-right: 24px;
}

.low {
  color: #db5757; /* Rouge pour les quantités basses */
  font-weight: 500;
}

.edit-btn {
  background: #e6f6ee;
  color: #46b07b;
  border: none;
  border-radius: 7px;
  padding: 6px 14px;
  font-weight: 500;
  font-size: 14px;
  margin-right: 8px;
  cursor: pointer;
  transition: filter 0.2s;
}

.delete-btn {
  background: #ffecec;
  color: #db5757;
  border: none;
  border-radius: 7px;
  padding: 6px 14px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: filter 0.2s;
}

/* Section Commande automatique */
.auto-order-section {
  margin-top: 28px;
  border-left: 6px solid var(--Accent---500, #A0522D);
  background: rgba(245, 158, 11, 0.15);
  border-radius: 10px;
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
  color: var(--Accent---500, #A0522D);
}

.icon {
  font-size: 18px;
}

.auto-order-title {
  font-size: 15px;
}

.auto-order-text {
  font-size: 14px;
  color: var(--Black, #222);
  margin: 0;
}

.auto-order-btn {
  background: var(--Accent---500, #A0522D);
  box-shadow: 0px 4px 12px 0px rgba(245, 158, 11, 0.25);
  color: #fff;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 15px;
  padding: 9px 24px;
  align-self: flex-start;
  margin-top: 6px;
  cursor: pointer;
  transition: filter 0.2s;
}
.auto-order-btn:hover { filter: brightness(0.92); }
</style>
