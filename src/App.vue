<template>
  <v-app>
    <router-view></router-view>
    <router-link to="/search" v-if="$route.name !== 'home' && $route.name !== 'search'">
      <v-btn icon="mdi-magnify" class="search-btn" size="x-large" rounded="round"></v-btn>
    </router-link>
  </v-app>
</template>

<script setup>

</script>

<style scoped>
.search-btn {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
}

</style>
