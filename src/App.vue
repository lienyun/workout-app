<template>
  <v-app class="ma-5">
    <v-main>
      <h1 class="text-center mb-5">今天健什麼？</h1>
      <SearchCard @video="video"/>
      <v-card class="mt-5">
        <h1 class="text-center mb-5 mt-5">就決定做這支了！</h1>
        <div class="ma-5 youtube">
          <h2>{{ resultVideo.title }}</h2>
          <iframe :src="resultVideo.embeddedUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SearchCard from "./components/SearchCard.vue";

const resultVideo = ref({})

const video = (val)=>{
  resultVideo.value = val
}
// const variable = import.meta.env.VITE_KEY
// console.log(variable)


</script>

<style scoped>

.youtube iframe {
  width: 100%;
  height: 500px;
}

</style>
