
import { defineStore } from 'pinia'
import { fetchApi } from '../composables/useApi'

export const useCartStore = defineStore('cart', {
  state: () => ({
      cart: [],

  }),

  getters: {
    total: (state) => state.cart.reduce((n, {price}) => n + price, 0),
    discountedTotal: (state) => state.cart.reduce((n, {discountedPrice}) => n + discountedPrice, 0),
    totalProducts: (state) => state.cart.length,
    totalQuantity: (state) => state.cart.reduce((n, {quantity}) => n + quantity, 0),
  },

  actions: {
    async getCartProducts(idUser, token) {
      const path = `/auth/carts/user/${idUser}`
      const method = 'GET'
      const auth = {"Authorization": `Bearer ${token}`}
      const response = await fetchApi(path, method, auth)
      this.cart = response.carts[0].products
    },

    sortBy(field) {
      console.log(field)
      const c = [...this.cart]
      const sortedC = c.sort((a, b) => (a[field] > b[field]) ? 1 : -1)
      console.log(this.cart, sortedC)
      if (this.cart == sortedC) {
        this.cart.reverse()
      } else {
        this.cart = sortedC
      }
    },

    removeItem(id) {
      this.cart = this.cart.filter((obj) => obj.id !== id);
    }

  },
  persist: {
    storage: sessionStorage,
  },
})
