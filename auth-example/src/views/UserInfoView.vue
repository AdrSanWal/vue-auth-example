<template>
  <Navbar/>
  <div>
    <!-- <ul>
      <li v-for="data in st.user" :key="data.id">{{ data }}</li>
    </ul> -->
    <p>User</p>
    <p>{{ userStore.userInfo }}</p>
  </div>
</template>

<script setup>
  import Navbar from '../components/Navbar.vue'
  import { useUserStore } from '../store/userStore'

  const userStore = useUserStore()

</script>

<style lang="scss" scoped>

</style>
