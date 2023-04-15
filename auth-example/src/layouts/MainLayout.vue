<template>
  <div class="container">
    <div class="navbar">
      <NavBar/>
    </div>
    <div class="main-content-container">
      <div class="main-content">
        <slot name="main"></slot>
      </div>
    </div>
    <div class="footer">
      <FooterBar/>
    </div>
  </div>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue';
  import FooterBar from '@/components/FooterBar.vue';
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;

}

.main-content-container {
  display: flex;
  flex-direction: row;
  justify-content: center;

  .main-content {
    display: flex;
  }
}

</style>
