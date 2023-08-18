<template>
  <v-app class="ma-5">
    <v-main>
      <h1 class="text-center mb-5">今天健什麼？</h1>
      <SearchCard />
      <v-btn @click="getData">讀取所有資料</v-btn>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useGapi } from "vue-gapi";
import SearchCard from "./components/SearchCard.vue";

const gapi = useGapi();
const data = ref([]);

const getData = async () => {
  // await gapi.getGapiClient().then(({ currentUser, gapi, hasGrantedScopes }) => {
  //   console.log({ currentUser, gapi, hasGrantedScopes });
  // });
  try {
    const response = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: "1a1ZEwm3fTbg5ZqMUkSV-QXRt2C3nnBmBjfTxGd3e5TQ",
      range: "A1:J39", 
    });
    console.log(response.result.values)
    data.value = response.result.values;
  } catch (error) {
    console.error("Error getting data:", error);
  }
};
</script>
