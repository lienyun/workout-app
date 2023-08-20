<template>
  <v-app class="ma-5">
    <v-main>
      <h1 class="text-center mb-5">今天健什麼？</h1>
      <SearchCard />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SearchCard from "./components/SearchCard.vue";
import axios from "axios";


// const variable = import.meta.env.VITE_KEY
// console.log(variable)


</script>
