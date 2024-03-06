<template lang="">
  <AppBar></AppBar>

  <v-main class="ma-5">

    <div class="myImg"></div>
    <h3 class="mt-3">Wendy Chang</h3>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
import AppBar from "../components/AppBar.vue";

const drawer = ref(false);
</script>

<style scoped>
.myImg {
  width: 300px;
  height: 300px;
  background-image: url('/me.JPG');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
