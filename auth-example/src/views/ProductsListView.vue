<template>
  <MainLayout>
    <template #main>
      <div id="categories-filter">
        <div id="categories">
          <a class="category"
            v-for="(category, id) in productStore.categories"
            :key="id"
            @click="filterByCategory(category)">
              {{ category }}
          </a>
        </div>
      </div>
      <div id="list-products">
        <Product v-for="product in productStore.products"
                :key="product.id"
                :product="product"
                @click="$router.push({name: 'product', params: {id: product.id}})"/>
      </div>
    </template>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  import Product from '../components/Product.vue'
  import { onBeforeMount } from 'vue';
  import { useProductStore } from '../store/productStore';


  const productStore = useProductStore()

  onBeforeMount(async () => {
    await productStore.getProducts()
    await productStore.getCategories()
  })

  const filterByCategory = (category) => {
    productStore.getProducts(category)
  }

</script>

<style lang="scss" scoped>
#categories-filter {
  background-color: $secondary-color;
  min-width: $sidebar-width;
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
  justify-content: center;
  margin-left: $sidebar-width;
}
  </style>
