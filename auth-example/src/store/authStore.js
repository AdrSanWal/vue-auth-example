
import { defineStore } from 'pinia'
import { fetchApi } from '../composables/useApi'


export const useAuthStore = defineStore('auth', {
  state: () => ({
      user : {},
      token: '',
  }),

  actions: {

    async getUserInfo(idUser, token) {
      const path = `/auth/users/${idUser}`
      const method = 'GET'
      const auth = {"Authorization": `Bearer ${token}`}
      const response = await fetchApi(path, method, auth)
      this.user = response
    },

    async signIn(name, password) {
      const path = '/auth/login'
      const method = 'POST'
      const body = {'username': name, 'password': password }
      const response = await fetchApi(path, method, null, body)

      if (!('message' in response)) {
        this.token = response.token
        this.user = this.getUserInfo(response.id, this.token)
        return true
      } return false
    },

    signOut () {
      this.user = {}
      this.token = ''
    },
  },
  persist: true,
})
