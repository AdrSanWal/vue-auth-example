<template>
  <Navbar/>
  <div id="products-page">
    <div id="products-filter">
      <div id="categories">
        <a class="category"
           v-for="(category, id) in categories"
           :key="id"
           @click="filterByCategory(category)" active>
            {{ category }}
      </a>
      </div>


      <!-- <ul id="categories">
        <li class="category"
            v-for="(category, id) in categories"
            :key="id"
            @click="filterByCategory(category)">{{ category }}

         </li>
      </ul> -->
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
  const productService = new ProductService()
  const products = productService.getProducts()
  const categories = productService.getCategories()

  onBeforeMount(async () => {
    await productService.fetchProducts(pageProductLimit)
    await productService.fetchCategories()
  })

  const filterByCategory = (category) => {
    productService.fetchCategoryProducts(category, pageProductLimit)
  }

</script>

<style lang="scss" scoped>
#products-page {
  margin: 0;
  display: flex;
  flex-direction: row;
}

#products-filter {
  background-color: $secondary-color;
  min-width: 200px;
  text-align: left;
  padding-top: 10px;

  #categories {
    display: flex;
    flex-direction: column;

    .category  {
      color: inherit;
      text-decoration: none;
      padding: 6px 25px;
      cursor: pointer;

      &:hover {
        background-color: $primary-color;
        color: whitesmoke;
      }

    }

  }

  // #categories {
  //   width:100%;
  //   list-style-type: none;
  //   margin: 0;
  //   padding: 0;

  //   .category {
  //     margin: 0px;
  //     padding: 10px 25px;
  //     cursor: pointer;

  //     &:hover {
  //       background-color: $primary-color;
  //       color:white;
  //     }
  //   }
  // }
}


#list-products {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
}

</style>
