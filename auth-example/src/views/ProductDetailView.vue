<template>
  <MainLayout>
    <template #main>
      <div class="product-detail">
        <div class="product-image">
          <p id="discount">SALE<br/>{{ product.discountPercentage }} %<br/>OFF</p>
          <button class="btn left" @click="changeImage('<')">&lt;</button>
            <img class="image"
                 :src="product.images[image]">
          <button class="btn right" @click="changeImage('>')">&gt;</button>
        </div>
        <div class="product-info">
          <h2>{{ product.title }} - {{ product.brand }}</h2>
          <p>{{ product.description }}</p>
          <div class="aux-info">
            <p id="price-before">Before: {{ product.price }} €</p>
            <p id="price">Now: {{ after }} €</p>
            <p>{{ product.stock }} in stock</p>
            <p>valoration: {{ product.rating }}</p>
          </div>
          <div class="add">
            <label>Quantity:</label>
            <input class="quantity-item" type="number" v-model="quantity"/>
            <button class="add-item" @click="cartStore.addItem(product, quantity)">Add to Cart</button>

          </div>
        </div>
      </div>
    </template>
  </MainLayout>

</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import { ref, computed } from 'vue'
import { useProductStore } from '../store/productStore.js'
import { useCartStore } from '../store/cartStore';
import { useRoute } from 'vue-router';

  const route = useRoute()
  const productStore = useProductStore()
  const cartStore = useCartStore()
  const product = productStore.selectProductById(route.params.id)


  const image = ref(0)
  const quantity = ref(1)
  const imgIndex = [...Array(product.images.length).keys()]

  const changeImage = (direction) => {
    console.log(product.images[0])
    if (direction == '<') {
      if ( image.value == 0 ) {
        image.value = imgIndex.at(-1)
      } else { image.value-- }
    } else {
      if ( image.value == imgIndex.at(-1)) {
        image.value = 0
      } else { image.value++ }
    }
  }

  const after = computed(()=> (product.price * (1 - product.discountPercentage / 100)).toFixed(2))

</script>

<style lang="scss" scoped>
.product-detail {
  margin: 20px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 300px;
}

.image {
  height: 300px;
  width: 500px;
}

.btn {

  border-radius: 50%;
  border: solid rgb(126, 156, 126) 5px;
  font-size: x-large;
  font-weight: bolder;
  color: $primary-color;
  background-color: whitesmoke;
  cursor: pointer;

  &:hover {
    border: solid rgb(97, 121, 97) 5px;
    background-color: rgb(142, 179, 142);
  }
}

.left {
  transform: translateX(120%);
}

.right {
  transform: translateX(-120%);
}

#price {
  color: green;
  font-weight: bolder;
}

.aux-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;
}

#discount {
  color: red;
  position: absolute;
  font-size:larger;
  font-weight: bolder;
  top: 10px;
  right: 10%;
  rotate: 18deg;
}

.add {
  display: flex;
  justify-content: center;
  gap: 5px;
  .add-item {
  width: 100px;
  align-self: center;
  border-radius: 5px;
  background-color: $primary-color;
  color: whitesmoke;
  font-weight: bold;
  cursor: pointer;
}

.quantity-item {
  height: 100%;
  width: 40px;
  align-self: center;
}

}


</style>
