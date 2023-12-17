<template>
  <div id="app">
    <!-- <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'PromoFirst' }">PromoFirst</router-link>
    <router-link :to="{ name: 'PromoSecond' }">PromoSecond</router-link>
    <router-link to="/404/">Несуществующая страница</router-link> -->
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {HeaderComponent}
};
</script>

