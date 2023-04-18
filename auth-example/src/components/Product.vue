<template>
  <div class="product">
    <img :src="props.product.thumbnail">
    <ul class="product-info">
      <li>{{ props.product.title }}</li>
      <li>{{ props.product.brand }}</li>
      <li>{{ props.product.price }} €</li>
    </ul>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';


  const props = defineProps({
    product: Object
  })


</script>

<style lang="scss" scoped>

.product {
  position: relative;
  width: 250px;
  height: 200px;
  margin: 10px;
  padding: 10px;
  background-color: whitesmoke;
  border: solid rgb(212, 209, 209) 2px;
  border-radius: 5px;
  cursor: pointer;
}

img {
  width: 100%;
  height: 70%
}

.price {
  background-color: yellowgreen;
  padding: 1px 15px;
  border-radius: 20px;
  border: solid 1px red;
  rotate: 25deg;
  position: absolute;
  top: 5%;
  right: 10%;
  color: red;
  font-weight: bolder;
}

.product-info {
  font-size: small;
  list-style-type: none;
  padding: 0;
  margin:0;
  text-align:left;

  :last-child {
    color: red;
  }

  li {
    align-self: flex-start;
  }
}
</style>
