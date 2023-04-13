import { ref } from 'vue'
import { fetchApi } from '../composables/useApi'


const basicHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json",
}


class ProductService {

  constructor() {
    this.products = ref([])
    this.categories = ref([])
    this.error = ref('')
  }

  getProducts() {
    return this.products
  }

  getCategories() {
    return this.categories
  }

  getError() {
    return this.error
  }

  async fetchProducts(limit, skip=0) {
    const path = `/products?limit=${limit}&skip=${skip}`
    const method = 'GET'
    const headers = {...basicHeaders}
    const rawResponse = await fetchApi(path, method, headers)
    const response = await rawResponse.json()

    if (rawResponse.status == 200) {
      this.products.value = response.products
    } else {
      this.error.value = response.message
    }
  }

  async fetchCategories() {
    const path = `/products/categories`
    const method = 'GET'
    const headers = {...basicHeaders}
    const rawResponse = await fetchApi(path, method, headers)
    const response = await rawResponse.json()
    console.log('categories', response)
    if (rawResponse.status == 200) {
      this.categories.value = response
    } else {
      this.error.value = response.message
    }
  }

  async fetchCategoryProducts(category, limit, skip=0) {
    const path = `/products/category/${category}?limit=${limit}&skip=${skip}`
    const method = 'GET'
    const headers = {...basicHeaders}
    const rawResponse = await fetchApi(path, method, headers)
    const response = await rawResponse.json()
    if (rawResponse.status == 200) {
      this.products.value = response.products
    } else {
      this.error.value = response.message
    }
  }

}

export default ProductService
