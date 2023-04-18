<template>
  <MainLayout>
    <template #main>
      <table>
        <tr>
          <th @click="cartStore.sortBy('title')">Title</th>
          <th @click="cartStore.sortBy('quantity')">Cant</th>
          <th @click="cartStore.sortBy('price')">Price</th>
          <th @click="cartStore.sortBy('discountPercentage')">Discount</th>
          <th @click="cartStore.sortBy('discountedPrice')">Final Price</th>

        </tr>
        <tr v-for="item in cartStore.cart"
            :key="item.id"
            class="info"
            @click="$router.push({name: 'product', params: {id: item.id}})">
          <td>{{ item.title }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }} €</td>
          <td>{{ item.discountPercentage }} %</td>
          <td>{{ item.discountedPrice }} €</td>
          <td class="imgtd" @click.stop="cartStore.removeItem(item.id)">
            <div class="imgdiv">
              <img class="img" :src ="`${publicPath}delete.png`">
            </div></td>
        </tr>
        <tr class="bold">
          <td></td>
          <td>{{ cartStore.totalQuantity }}</td>
          <td>{{ cartStore.total }} €</td>
          <td></td>
          <td>{{ cartStore.discountedTotal }} €</td>
        </tr>
      </table>
    </template>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  import { useCartStore } from '../store/cartStore';

  const cartStore = useCartStore()
  const publicPath= process.env.BASE_URL

</script>

<style lang="scss" scoped>
table {
  margin-top: 30px;
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: $secondary-color;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}


table tr:not(:last-child) tr:not(:first-child) {
  cursor: pointer;
}

.bold {
  font-weight: bold;
}

.info:hover td:not(:last-child) {
  background-color: $primary-color;
  color:whitesmoke;
  cursor: pointer;
}

.imgdiv {
  padding:5px;
  cursor: pointer;
}

.imgtd:hover .img {
  transform: scale(2);
}

.img {
  width: 15px;
  height: 15px;
}

</style>
