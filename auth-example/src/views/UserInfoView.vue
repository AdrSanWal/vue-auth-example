<template>
  <NavBar/>
  <div>
    <!-- <ul>
      <li v-for="data in st.user" :key="data.id">{{ data }}</li>
    </ul> -->
    <p>User</p>
    <p>{{ userStore.userInfo }}</p>
  </div>
</template>

<script setup>
  import NavBar from '../components/NavBar.vue'
  import { useUserStore } from '../store/userStore'

  const userStore = useUserStore()

</script>

<style lang="scss" scoped>

</style>
