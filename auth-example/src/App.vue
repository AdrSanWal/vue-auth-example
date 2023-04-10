<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

// body {
//   background-image: url("./assets/login.jpg");
//   background-position: center center;
//   background-size: cover;
//   background-repeat: no-repeat;
// }

</style>
