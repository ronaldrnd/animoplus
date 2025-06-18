import { reactive } from 'vue'

export const auth = reactive({
  isAuthenticated: false,
  role: null // 'client' | 'pro' | null
})