<template>
  <MainLayout>
    <template #main>
      <div class="product-detail">
        <div class="product-image">
          <button>&lt;</button>
          <!-- <img :src="product.images[0]"> -->
            <p>{{ product.images[image] }}</p>
          <button>&gt;</button>
        </div>
        <p>{{ product }}</p>

      </div>
    </template>
  </MainLayout>

</template>

<script setup>
  import ProductService from '../services/ProductService';
  import MainLayout from '../layouts/MainLayout.vue';
  import { onBeforeMount, ref } from 'vue';
  import { useRoute } from 'vue-router';

  const productService = new ProductService()
  const route = useRoute();
  const product = productService.getProduct()
  const image = ref(0)

  onBeforeMount(async () => {
    await productService.fetchProductById(route.params.id)
  })
</script>

<style scoped>
.product-detail {
  margin-top: 20px;
}
</style>
