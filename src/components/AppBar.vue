<template lang="">
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title><router-link to="/search">今天健什麼</router-link></v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- <router-link to="/search">
      <v-btn variant="text" icon="mdi-magnify" color="white"></v-btn>
    </router-link> -->

    <!-- <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
  </v-app-bar>

  <NavigationDrawer :drawer="drawer"></NavigationDrawer>
</template>
<script setup>
import { ref } from "vue";
import NavigationDrawer from "./NavigationDrawer.vue";

const drawer = ref(false);
</script>
<style scoped></style>
