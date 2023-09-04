<template lang="">
  <AppBar></AppBar>
  <v-main class="ma-5">
    <div class="text-center mb-5">
      <h3>版權資訊</h3>
      <p>影片版權均為以下健身Youtuber所有</p>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="400" v-for="item in ytrInfo">
          <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          >
            <v-card-title>{{ item.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">{{ item.subtitle }}</v-card-subtitle>
          <v-card-text>
            {{ item.intro }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="pink" :href="item.igUrl"> Instagram </v-btn>
            <v-btn color="red" :href="item.ytUrl"> YouTube </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>
<script setup>
import { ref, reactive } from "vue";
import AppBar from "../components/AppBar.vue";

const drawer = ref(false);

const ytrInfo = ref([
  {
    name: "May Fit",
    imgUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    subtitle: "引進台灣女生健身風氣的一大推手",
    intro: "Nuli創立成員之一，我最常看她的影片健身😍",
    igUrl: "",
    ytUrl: "",
  },
]);
</script>
<style lang=""></style>
