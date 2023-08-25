<template lang="">
    <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>今天健什麼</v-toolbar-title>

    <v-spacer></v-spacer>

    <router-link to="/search">
      <v-btn variant="text" icon="mdi-magnify" color="white"></v-btn>
    </router-link>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>

  <NavigationDrawer :drawer="drawer"></NavigationDrawer>
  
  <v-main>
    <h3>Wendy Chang</h3>
  </v-main>
</template>
<script setup>
import { ref } from 'vue'
import NavigationDrawer from '../components/NavigationDrawer.vue';

const drawer = ref(false)
</script>
<style lang=""></style>
