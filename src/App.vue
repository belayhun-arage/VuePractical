<template>
  <HomeViewVue></HomeViewVue>
</template>

<script>
import HomeViewVue from './views/HomeView.vue';
export default {
  name: 'App',
  components: {
    HomeViewVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
