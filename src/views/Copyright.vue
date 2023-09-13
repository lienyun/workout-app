<template lang="">
  <AppBar></AppBar>
  <v-main class="ma-5">
    <div class="text-center mb-5">
      <h3>版權資訊</h3>
      <p>影片版權均為以下健身Youtuber所有</p>
    </div>

    <v-row>
      <v-col cols="12" md="3" v-for="item in ytrInfo">
        <v-card class="mx-auto mb-5" max-width="400">
          <v-img
            class="align-end text-white"
            :src="item.imgUrl"
            cover
            height="250"
          >
            <v-card-title>{{ item.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">{{ item.subtitle }}</v-card-subtitle>
          <v-card-text>
            {{ item.intro }}
          </v-card-text>
          <v-card-actions>
            <a :href="item.igUrl" target="_blank"
              ><v-btn color="orange">Instagram</v-btn></a
            >
            <a :href="item.ytUrl" target="_blank"
              ><v-btn color="green">YouTube</v-btn></a
            >
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
    imgUrl:
      "https://ddxoxfdaskxgb.cloudfront.net/wp-content/uploads/2021/11/%E5%88%9D%E9%9A%8E%E5%B1%85%E5%AE%B6%E7%BF%B9%E8%87%80%E9%A4%8A%E6%88%90-May-768x512.jpg",
    subtitle: "引進台灣女生健身風氣的一大推手",
    intro: "講話超慢的健身YTR，最近去美國念書了，可以發樓她IG很多東西吃(?)",
    igUrl: "https://www.instagram.com/may8572fit/",
    ytUrl: "https://www.youtube.com/@MayFit8572",
  },
  {
    name: "Coffee林芊妤",
    imgUrl: "https://img.soundofhope.org/2020-06/1-1592656582966.jpg",
    subtitle: "香港健身女教練代表之一",
    intro: "Coffee都邊喊數邊帶動作，肺活量很驚人",
    igUrl: "https://www.instagram.com/coffee89921/",
    ytUrl: "https://www.youtube.com/channel/UCxCZqbizSsnntlz6w0fN8hA",
  },
  {
    name: "Emi Wong",
    imgUrl: "https://cdn.i-scmp.com/sites/default/files/styles/landscape/public/d8/yp/images/cx040_3dc4_9.jpg?itok=PtavjDTd&v=1536913650",
    subtitle: "香港健身女教練代表之一",
    intro: "Emi做的速度都超快，同時練肌力跟cardio",
    igUrl: "https://www.instagram.com/emiwong_/",
    ytUrl: "https://www.youtube.com/c/EmiWong",
  },
  {
    name: "Solarsido",
    imgUrl: "https://www.kpopdays.com/wp-content/uploads/2022/03/006-47.jpg",
    subtitle: "韓國女團MAMAMOO主唱頌樂開的個人YT頻道",
    intro: "影片長度都不長，很適合想發懶又想加減練一下的人",
    igUrl: "https://www.instagram.com/solarkeem/",
    ytUrl: "https://www.youtube.com/channel/UCNx0TXIuGVEA_TWB5H2I6Lg",
  },
  {
    name: "Pamela Reif",
    imgUrl: "https://www.technogym.com/wpress/wp-content/uploads/2020/07/pamelareif_img1.jpg",
    subtitle: "德國健身女王Pamela Reif",
    intro: "看得賞心悅目！！Pamela還常常邊跟著音樂對嘴邊帶動作，臉上始終掛著微笑😍只能說有夠漂亮",
    igUrl: "https://www.instagram.com/solarkeem/",
    ytUrl: "https://www.youtube.com/channel/UCNx0TXIuGVEA_TWB5H2I6Lg",
  },
]);
</script>
<style scoped>

</style>
