<template>

    <router-view/>

</template>

<script setup>
import { useAuthStore } from './store/authStore';
// Check if user is loged ('user' in localstorage)
  const authStore = useAuthStore()
  authStore.isAlreadyLogged()


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #18222c;
  display: flex;
  justify-content: center;
}

body {
  margin: 0;
  margin-top: $margin-top-page;
}

</style>
