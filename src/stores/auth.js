import { reactive } from 'vue'

// Fonction pour charger les données depuis localStorage
const loadAuthState = () => {
  try {
    const savedAuth = localStorage.getItem('auth')
    if (savedAuth) {
      return JSON.parse(savedAuth)
    }
  } catch (error) {
    console.error('Erreur lors du chargement de l\'état d\'authentification:', error)
  }
  
  // Valeurs par défaut si rien n'est sauvegardé
  return {
    isAuthenticated: false,
    role: null
  }
}

// Fonction pour sauvegarder les données dans localStorage
const saveAuthState = (state) => {
  try {
    localStorage.setItem('auth', JSON.stringify({
      isAuthenticated: state.isAuthenticated,
      role: state.role
    }))
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de l\'état d\'authentification:', error)
  }
}

// Création du store réactif avec les données chargées
export const auth = reactive(loadAuthState())

// Méthodes pour gérer l'authentification
export const authMethods = {
  login(role) {
    auth.isAuthenticated = true
    auth.role = role
    saveAuthState(auth)
  },
  
  logout() {
    auth.isAuthenticated = false
    auth.role = null
    saveAuthState(auth)
  },
  
  // Méthode pour vérifier le rôle
  hasRole(role) {
    return auth.isAuthenticated && auth.role === role
  },
  
  // Méthode pour nettoyer complètement (équivalent à vider cache/cookies)
  clearAuth() {
    localStorage.removeItem('auth')
    auth.isAuthenticated = false
    auth.role = null
  }
}

// Watcher pour sauvegarder automatiquement les changements
import { watch } from 'vue'

watch(
  () => ({ isAuthenticated: auth.isAuthenticated, role: auth.role }),
  (newState) => {
    saveAuthState(newState)
  },
  { deep: true }
)