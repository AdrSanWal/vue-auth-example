
import { defineStore } from 'pinia'
import { fetchApi } from '../composables/useApi'
import { useUserStore } from './userStore'

export const useAuthStore = defineStore('auth', {
  state: () => ({
      user : {}
  }),

  actions: {
    async signIn(name, password) {
      const path = '/auth/login'
      const method = 'POST'
      const body = {'username': name, 'password': password }
      const rawResponse = await fetchApi(path, method, null, body)
      if (rawResponse.status == 200) {
        this.user = await rawResponse.json()
        localStorage.setItem ('user', JSON.stringify(this.user))
        return true
      } else { return false }
      },

    signOut () {
      const userStore = useUserStore()
      this.user = {}
      userStore.userInfo = {}
      localStorage.removeItem ('user')
    },

    isAlreadyLogged() {
      const userStore = useUserStore()
      const userLocalStorage = localStorage.getItem ('user')
      if (userLocalStorage) {
        this.user = JSON.parse(userLocalStorage)
        userStore.getUserInfo(this.user.id, this.user.token)
      }
    }
  }
})
