
import { defineStore } from 'pinia'
import { fetchApi } from '../composables/useApi'

export const useProductStore = defineStore('product', {
  state: () => ({
      products : [],
      categories: [],
      pageProductSkip: 0,
      pageProductLimit: 20,
  }),

  actions: {
    async getProducts(category=null) {
      let path = `/products?limit=${this.pageProductLimit}&skip=${this.pageProductSkip}`
      if (category) {
        path = `/products/category/${category}?limit=${this.pageProductLimit}&skip=${this.pageProductSkip}`
      }
      const method = 'GET'
      const response = await fetchApi(path, method)
      this.products = response.products
    },

    async getCategories() {
      const path = `/products/categories`
      const method = 'GET'
      const response = await fetchApi(path, method)
      this.categories = response
    },

    selectProductById(id) {
      return this.products.find(element => element.id == id)
    }
  }
})
