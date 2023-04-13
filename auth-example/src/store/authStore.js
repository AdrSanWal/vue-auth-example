
import { defineStore } from 'pinia'
import { fetchApi } from '../composables/useApi'

export const store = defineStore('auth', {
  state: () => {
    return {
      user : {
        id: 0,
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        image: '',
        token: ''
      }
    }
  },

  actions: {
    async signIn(name, password) {
      const path = '/auth/login'
      const method = 'POST'
      const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
      const body = {'username': name, 'password': password }
      const rawResponse = await fetchApi(path, method, headers, body)
      if (rawResponse.status == 200) {
        this.user = rawResponse.json()
        return true
      } else { return false }
      },
    }
})
