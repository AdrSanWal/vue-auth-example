
import { defineStore } from 'pinia'
import { fetchApi } from '../composables/useApi'

export const useUserStore = defineStore('user', {
  state: () => ({
      userInfo : {},
  }),

  actions: {
    async getUserInfo(idUser, token) {
      const path = `/auth/users/${idUser}`
      const method = 'GET'
      const auth = {"Authorization": `Bearer ${token}`}
      const rawResponse = await fetchApi(path, method, auth)
      if (rawResponse.status == 200) {
        this.userInfo = await rawResponse.json()
        return true
      } else { return false }
    },
  }
})
