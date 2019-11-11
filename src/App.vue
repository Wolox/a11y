<template lang="pug">
  #app.app-container
    navbar
    router-view
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import './scss/application';

.app-container {
  height: 100vh;
}
</style>
