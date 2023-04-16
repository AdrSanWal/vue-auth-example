<template>
  <div class="nav">
    <div id="nav-left">
      <router-link :to="{name: 'products'}" @click="productStore.getProducts()">Products</router-link>
      <router-link :to="{name: 'carts'}" v-if="authStore.user.username">My cart</router-link>

    </div>
    <div id="nav-right" v-if="authStore.user.username">
      <img :src="authStore.user.image" class="user-image"/>
      <router-link :to="{name: 'user'}"
                    id="username">
                      {{ authStore.user.username }}
      </router-link>
      <router-link :to="{name: 'products'}"
                    @click="authStore.signOut">Sign Out</router-link>
    </div>
    <div id="nav-right" v-else>
      <router-link :to="{name: 'login'}">Sign In</router-link>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../store/authStore'
import { useProductStore } from '../store/productStore';
const authStore = useAuthStore()
const productStore = useProductStore()

</script>

<style lang="scss" scoped>
.nav {
position: fixed;
top: 0;
z-index: 9999;
overflow: hidden;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
padding: 15px;
background-color: $primary-color;
font-size: 20px;

div {
  color: whitesmoke;
}
}

#nav-left > a {
text-decoration:none;
color: whitesmoke;
margin: 10px;
padding: 15px;

&:hover {
  background-color: whitesmoke;
  color: $primary-color;
}
}

#nav-right > a {
text-decoration:none;
color: whitesmoke;
margin: 5px;
padding: 10px;
font-size: smaller;
margin-right: 20px;
}

#username {
font-size: small;
color:greenyellow;
}

.user-image {
position: absolute;
transform: translate(-100%, -4px);
border: solid darkgreen 4px;
width: 25px;
height: 25px;
border-radius: 50%;
background-color: whitesmoke;
}
</style>
