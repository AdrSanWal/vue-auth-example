<template>
  <NavBar/>
  <div>
    <!-- <ul>
      <li v-for="data in st.user" :key="data.id">{{ data }}</li>
    </ul> -->
    <p>User</p>
    <p>{{ authStore.user }}</p>
  </div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue'
  import { useAuthStore } from '../store/authStore'

  const authStore = useAuthStore()

</script>

<style lang="scss" scoped>

</style>
