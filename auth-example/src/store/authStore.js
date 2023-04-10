
import { defineStore } from 'pinia'
import { fechApi } from '../composables/useApi'

export const store = defineStore('auth', {
  state: () => {
    return {
      user : {
        id: '',
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
      const rawResponse = await fechApi(path, method, headers, body)
      if (rawResponse.status == 200) {
        this.user = rawResponse.json()
        return true
      } else { return false }
      }
    }
    // async signIn(name, password) {
    //   const rawResponse = await fetch("https://dummyjson.com/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify({ 'username': name, 'password': password }),
    //   });
    //   console.log(rawResponse)
    //   const data = await rawResponse.json();
    //   this.user = data;
    // },
//   }
})
