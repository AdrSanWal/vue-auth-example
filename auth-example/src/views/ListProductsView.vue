<template>
  <Navbar/>
  <div id="products-page">
    <div id="categories-filter">
      <div id="categories">
        <a class="category"
           v-for="(category, id) in categories"
           :key="id"
           @click="filterByCategory(category, $event)">
            {{ category }}
      </a>
      </div>
    </div>
    <div id="list-products">
      <Product v-for="product in products"
              :key="product.id"
              :product="product"/>
    </div>
  </div>
</template>

<script setup>
  import Navbar from '../components/Navbar.vue'
  import Product from '../components/Product.vue'
  import { onBeforeMount } from 'vue';
  import ProductService from '../services/ProductService'

  const pageProductLimit = 20
  const service = new ProductService()
  const products = service.getProducts()
  const categories = service.getCategories()
  let categoryElementActive = null

  onBeforeMount(async () => {
    await service.fetchProducts(pageProductLimit)
    await service.fetchCategories()
  })

  const filterByCategory = (category, el) => {
    if (categoryElementActive) {
      categoryElementActive.classList.remove("selected")
    }
    service.fetchCategoryProducts(category, pageProductLimit)
    el.target.classList.add("selected")
    categoryElementActive = el.target
  }


</script>

<style lang="scss" scoped>
#products-page {
  display: flex;
  flex-direction: row;
}

#categories-filter {
  background-color: $secondary-color;
  min-width: 200px;
  text-align: left;
  position: fixed;


  #categories {
    display: flex;
    flex-direction: column;

    .category  {
      color: inherit;
      text-decoration: none;
      padding: 7px 25px;
      cursor: pointer;

      &:hover {
        background-color: $primary-color;
        color: whitesmoke;
      }

    }

    .selected {
      background-color: $primary-color;
      color: whitesmoke;
    }

  }
}


#list-products {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  margin-left: 200px;
}

</style>
