<template>
  <v-app>
    <router-view></router-view>

    <router-link to="/search" v-if="$route.name !== 'search'">
      <v-btn icon="mdi-magnify" class="search-btn"></v-btn>
    </router-link>
  </v-app>
</template>

<script setup>

</script>

<style scoped>
.search-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}

</style>
