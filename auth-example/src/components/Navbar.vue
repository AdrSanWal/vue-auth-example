<template>
    <div class="nav">
      <div id="nav-left">
        Navbar

        <router-link :to="{name: 'products'}">Products</router-link>
        <router-link :to="{name: 'carts'}">Charts</router-link>

      </div>
      <!-- <div id="nav-right">
        {{ st.user.username }}
      </div> -->
    </div>
</template>

<script setup>
  // import store from '../store/authStore'
  // const st = store()
  // console.log(st.user)

</script>

<style lasng="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 15px;
  overflow: hidden;
  background-color: grey;
  font-size: 22px;
}

.nav > div {
  color: whitesmoke;
}

#nav-left > a {
  text-decoration:none;
  color: whitesmoke;
}
</style>
