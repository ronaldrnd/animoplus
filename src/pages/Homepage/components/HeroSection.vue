<template>
    <section class="hero">
        <div class="container">
            <!-- Titre principal -->
            <h1>PRENEZ SOIN DE VOTRE<br>COMPAGNON EN 1 CLIC</h1>

            <!-- Sous-titre  -->
            <p class="subtitle">La plateforme qui connecte les propriétaires d'animaux aux meilleurs professionnels<br>vétérinaires |</p>

            <!-- Barre d'actions avec les 3 éléments -->
            <div class="action-bar">
                <!-- Champ email -->
                <div class="action-item email-container">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        class="email-input"
                    >
                </div>

                <!-- Adresse -->
                <div class="action-item address-container">
                    <p class="address">Antananarivo 101</p>
                </div>

                <!-- Bouton RDV -->
                <div class="action-item">
                    <button class="appointment-button">
                        Prendre un rendez-vous
                    </button>
                </div>
            </div>

            <div class="features">
                <div class="feature-card">
                    <img src="../assets/icônes/urgence-icon.svg" alt="Urgence" class="feature-icon">
                    <h3>URGENCE</h3>
                    <p>En cas d'urgence pour votre animal, chaque minute compte. Nos partenaires<br>vétérinaires qualifiés sont là pour sauver la santé de vos compagnons.</p>
                    <button class="button">Contacter maintenant</button>
                </div>

                <div class="feature-card">
                    <img src="../assets/icônes/chat-icon.svg" alt="Conseil IA" class="feature-icon">
                    <h3>CONSEIL IA</h3>
                    <p>Vous avez un doute concernant votre animal et vous ne savez pas quoi faire ?<br>Notre conseiller virtuel est là pour vous 7j/7 et 24h/24.</p>
                    <button class="button">Démarrer le chat</button>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.hero {
    background: 
        linear-gradient(180deg, #43A047 0%, rgba(255, 255, 255, 0.8) 100%),
        url('../assets/images/hero-bg.svg') no-repeat center center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.hero h1 {
    color: #FFF;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    font-size: clamp(1rem, 4vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.subtitle {
    color: #FFF;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    font-size: clamp(0.75rem, 1.25vw, 1rem);
    font-weight: 400;
    line-height: 1.5;
    max-width: 800px;
    margin-bottom: 2rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.appointment-button {
    width: 100%;
    padding: 12px 15px;
    color: white;
    border: none;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
}

.features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    width: 100%;
}

.feature-card {
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 20px;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 550px;
    flex: 1 1 300px;
}

.feature-card h3 {
    color: #000;
    font-family: "League Spartan", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

.feature-card p {
    color: #333;
    font-family: "League Spartan", sans-serif;
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex-grow: 1;

}

.button {
    background-color: #43A047;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 9px;
    font-family: "League Spartan", sans-serif;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #43A047;
}

@media (max-width: 768px) {
    .features {
        flex-direction: column;
    }
    
    .feature-card {
        width: 100%;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .subtitle {
        font-size: 1.1rem;
    }

}
</style>