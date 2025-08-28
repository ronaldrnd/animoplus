<template>
  <div class="w-full flex items-center justify-center my-16">
    <div class="background absolute inset-0 bg-cover bg-center bg-no-repeat z-0"></div>

    <div
      class="w-[572px] z-10 px-10 py-8 bg-white shadow-[0px_82px_40px_-14px_rgba(100,100,100,0.08)] outline outline-1 outline-neutral-200 rounded-xl flex flex-col items-center gap-8">

      <h1 class="text-primary-600 text-3xl font-bold text-center">Inscription</h1>
      <p class="text-neutral-500 text-lg text-center">Créez votre compte pour prendre soin de votre compagnon</p>

      <form @submit.prevent="handleRegister" class="w-full flex flex-col gap-4">
        <!-- Nom complet -->
        <label class="w-full flex flex-col gap-1">
          <span class="text-zinc-600 text-sm font-medium uppercase">Nom complet</span>
          <input 
            v-model="form.name"
            type="text" 
            placeholder="John Doe"
            required
            class="w-full h-12 px-4 bg-white border border-neutral-200 rounded outline-none focus:ring-2 focus:ring-primary-600" 
          />
        </label>

        <!-- Email -->
        <label class="w-full flex flex-col gap-1">
          <span class="text-zinc-600 text-sm font-medium uppercase">Adresse email</span>
          <input 
            v-model="form.email"
            type="email" 
            placeholder="johndoe@example.com"
            required
            class="w-full h-12 px-4 bg-white border border-neutral-200 rounded outline-none focus:ring-2 focus:ring-primary-600" 
          />
        </label>

        <!-- Mot de passe -->
        <label class="w-full flex flex-col gap-1">
          <span class="text-zinc-600 text-sm font-medium uppercase">Mot de passe</span>
          <input 
            v-model="form.password"
            type="password" 
            placeholder="********"
            required
            class="w-full h-12 px-4 bg-white border border-neutral-200 rounded outline-none focus:ring-2 focus:ring-primary-600" 
          />
        </label>

        <!-- Confirmation mot de passe -->
        <label class="w-full flex flex-col gap-1">
          <span class="text-zinc-600 text-sm font-medium uppercase">Confirmer le mot de passe</span>
          <input 
            v-model="form.password_confirmation"
            type="password" 
            placeholder="********"
            required
            class="w-full h-12 px-4 bg-white border border-neutral-200 rounded outline-none focus:ring-2 focus:ring-primary-600" 
          />
        </label>

        <!-- Message d'erreur -->
        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <!-- Message de succès -->
        <div v-if="success" class="text-green-500 text-sm text-center">
          {{ success }}
        </div>

        <!-- Bouton d'inscription -->
        <button 
          type="submit"
          :disabled="isLoading"
          class="w-full py-3 bg-primary-600 text-white rounded-xl text-lg font-medium hover:bg-primary-500 transition disabled:opacity-50 disabled:cursor-not-allowed">
          <span v-if="isLoading">Inscription en cours...</span>
          <span v-else>S'inscrire</span>
        </button>
      </form>

      <p class="text-gray-600 text-lg">
        Déjà un compte ?
        <router-link to="/login" class="text-primary-600 font-semibold underline">Connectez-vous</router-link>
      </p>
    </div>

    <!-- Toast de succès -->
    <div v-if="showToast" 
         class="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="font-medium">Votre compte a été bien créé !</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth, authMethods } from '@/stores/auth'

const router = useRouter()

// État du formulaire
const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const isLoading = ref(false)
const error = ref('')
const success = ref('')
const showToast = ref(false)

// Redirection automatique si déjà connecté
onMounted(() => {
  if (auth.isAuthenticated) {
    router.push('/dashboard')
  }
})

// Fonction d'inscription
async function handleRegister() {
  // Reset des messages
  error.value = ''
  success.value = ''
  
  // Validation côté client
  if (form.value.password !== form.value.password_confirmation) {
    error.value = 'Les mots de passe ne correspondent pas'
    return
  }

  if (form.value.password.length < 6) {
    error.value = 'Le mot de passe doit contenir au moins 6 caractères'
    return
  }

  isLoading.value = true

  try {
    const response = await fetch('http://localhost:8000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        password_confirmation: form.value.password_confirmation
      })
    })

    const data = await response.json()

    if (response.ok) {
      // Afficher le toast de succès
      showToast.value = true
      
      // Si le backend retourne un token, on peut l'utiliser pour connecter automatiquement l'utilisateur
      if (data.access_token) {
        // Stocker le token
        localStorage.setItem('token', data.access_token)
      }
      
      // Connecter automatiquement l'utilisateur après inscription
      // Par défaut, on considère que c'est un client, mais cela peut être ajusté selon votre logique
      authMethods.login('client')
      
      // Masquer le toast et rediriger après un délai
      setTimeout(() => {
        showToast.value = false
        router.push('/dashboard')
      }, 2000)
      
    } else {
      // Gestion des erreurs du backend
      if (data.errors) {
        // Si le backend retourne des erreurs de validation
        const errorMessages = Object.values(data.errors).flat()
        error.value = errorMessages.join(', ')
      } else if (data.message) {
        error.value = data.message
      } else {
        error.value = 'Une erreur est survenue lors de l\'inscription'
      }
    }
  } catch (err) {
    console.error('Erreur lors de l\'inscription:', err)
    error.value = 'Erreur de connexion au serveur. Veuillez réessayer.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.background {
  background-image: url("../../assets/images/bg-login.svg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
