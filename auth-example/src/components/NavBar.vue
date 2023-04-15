<template>
    <div class="nav">
      <div id="nav-left">
        <router-link :to="{name: 'products'}">Products</router-link>
        <router-link :to="{name: 'carts'}">Charts</router-link>

      </div>
      <div id="nav-right" v-if="st.user.username">
        <img src=""/>
        <router-link :to="{name: 'user'}"
                      id="username">
                        {{ st.user.username }}
        </router-link>
        <router-link :to="{name: 'products'}"
                      @click="st.signOut">Sign Out</router-link>
      </div>
      <div id="nav-right" v-else>
        <router-link :to="{name: 'login'}">Sign In</router-link>
      </div>
    </div>
</template>

<script setup>
  // import ProductService from '../services/ProductService';
  import { useAuthStore } from '../store/authStore'
  const st = useAuthStore()


//   const service = new ProductService()

//   const refreshProducts = async () => {
//     await service.fetchProducts(20)
//   }
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
}

#username {
  font-size: small;
}
</style>
