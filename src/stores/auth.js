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
    role: null,
    user: null
  }
}

// Fonction pour sauvegarder les données dans localStorage
const saveAuthState = (state) => {
  try {
    localStorage.setItem('auth', JSON.stringify({
      isAuthenticated: state.isAuthenticated,
      role: state.role,
      user: state.user
    }))
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de l\'état d\'authentification:', error)
  }
}

// Création du store réactif avec les données chargées
export const auth = reactive(loadAuthState())

// Méthodes pour gérer l'authentification
export const authMethods = {
  async register(userData) {
    try {
      const response = await fetch('http://localhost:8000/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      const data = await response.json()

      if (response.ok) {
        // Stocker le token (access_token dans la nouvelle réponse)
        if (data.access_token) {
          localStorage.setItem('token', data.access_token)
        }
        
        // Connecter automatiquement l'utilisateur après inscription
        auth.isAuthenticated = true
        auth.role = data.user?.role || 'client'
        auth.user = data.user || { name: userData.name, email: userData.email }
        saveAuthState(auth)
        
        return { success: true, data }
      } else {
        return { success: false, error: data }
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error)
      return { success: false, error: { message: 'Erreur de connexion au serveur' } }
    }
  },

  async loginWithCredentials(email, password) {
    try {
      const response = await fetch('http://localhost:8000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (response.ok) {
        // Stocker le token (access_token dans la nouvelle réponse)
        if (data.access_token) {
          localStorage.setItem('token', data.access_token)
        }
        
        auth.isAuthenticated = true
        auth.role = data.user?.role || 'client'
        auth.user = data.user
        saveAuthState(auth)
        
        return { success: true, data }
      } else {
        return { success: false, error: data }
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error)
      return { success: false, error: { message: 'Erreur de connexion au serveur' } }
    }
  },

  login(role) {
    auth.isAuthenticated = true
    auth.role = role
    saveAuthState(auth)
  },
  
  logout() {
    auth.isAuthenticated = false
    auth.role = null
    auth.user = null
    localStorage.removeItem('token')
    saveAuthState(auth)
  },
  
  // Méthode pour vérifier le rôle
  hasRole(role) {
    return auth.isAuthenticated && auth.role === role
  },
  
  // Méthode pour nettoyer complètement (équivalent à vider cache/cookies)
  clearAuth() {
    localStorage.removeItem('auth')
    localStorage.removeItem('token')
    auth.isAuthenticated = false
    auth.role = null
    auth.user = null
  }
}

// Watcher pour sauvegarder automatiquement les changements
import { watch } from 'vue'

watch(
  () => ({ isAuthenticated: auth.isAuthenticated, role: auth.role, user: auth.user }),
  (newState) => {
    saveAuthState(newState)
  },
  { deep: true }
)