<template>
  <div class="stock-container">
    <div class="header-row">
      <h2>Gestion de stock</h2>
      <button class="see-list-btn">Voir la liste</button>
    </div>
    <hr class="separator" />

    <div class="add-title"><strong>Ajouter un produit</strong></div>

    <!-- Tableau commande -->
    <table class="order-table">
      <thead>
        <tr>
          <th>PRODUIT</th>
          <th>STOCK ACTUEL</th>
          <th>QUANTITÉ RECOMMANDÉE</th>
          <th>SEUIL MINIMAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paracétamol 500mg</td>
          <td class="low">5</td>
          <td>80</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Amoxicilline 250mg</td>
          <td class="low">8</td>
          <td>40</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
    <hr class="separator" />

    <!-- Détails de l'envoi -->
    <div class="section-title"><strong>Détails de l'envoi</strong></div>
    <form class="send-details">
      <div class="form-group">
        <label>Adresse email du fournisseur</label>
        <input type="email" placeholder="exemple@gmail.com" />
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea rows="4" placeholder="">
            Bonjour,
            Veuillez trouver ci-dessous la commande automatique pour les produits dont le stock est inférieur ou seuil :

            - Paracétamol 500mg : 30 unités
            - Ibuprofène 200mg : 20 unités
        </textarea>
      </div>
      <div class="form-actions">
        <button type="button" class="cancel-btn">Annuler</button>
        <button type="submit" class="send-btn">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.stock-container {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ededed;
  padding: 24px 16px 18px 16px;
  font-family: 'Inter', Arial, sans-serif;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.header-row h2 {
  font-size: 19px;
  font-weight: 700;
  color: #232323;
  margin: 0;
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
  font-size: 16px;
  margin-bottom: 20px;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  background: #fff;
  margin-bottom: 10px;
}
.order-table th {
  background: #fafafa;
  padding: 12px 8px;
  font-weight: 600;
  color: #232323;
  border-bottom: 1px solid #ececec;
  text-align: left;
  letter-spacing: 0.02em;
}
.order-table td {
  padding: 12px 8px;
  border-bottom: 1px solid #ececec;
}
.order-table tr:last-child td {
  border-bottom: none;
}
.order-table .low {
  color: #db5757;
  font-weight: 500;
}

/* Section Détails de l'envoi */
.section-title {
  font-size: 16px;
  margin: 30px 0 15px 0;
}

.send-details {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.form-group label {
  font-size: 15px;
  color: #232323;
  font-weight: 500;
}

.form-group input, .form-group textarea {
  border: 1px solid #e5e7eb;
  border-radius: 7px;
  font-size: 15px;
  padding: 12px 16px;
  background: #fafafa;
  color: #232323;
  outline: none;
  transition: border 0.2s;
}


.form-group textarea {
  resize: none;
  min-height: 100px;
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

.send-btn {
  background: var(--Primary---600, #43A047);
  color: #fff;
  border: none;
  border-radius: 7px;
  font-weight: 600;
  font-size: 15px;
  padding: 9px 24px;
  cursor: pointer;
  transition: filter 0.19s;
}
</style>
