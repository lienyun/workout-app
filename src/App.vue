<template>
  <v-layout>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>今天健什麼</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn> -->
      <v-btn variant="text" icon="mdi-filter" @click="dialog = true"></v-btn>

      <v-dialog
      v-model="dialog"
      width="auto"
    >
      <SearchCard @video="video" @closeDialog="closeDialog"/>
    </v-dialog>
    
      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
    <v-main>
      <div class="ma-5">
        
      <div class="mt-5 d-flex flex-column align-center" v-if="hasResult === 'beforeSearch'">
        <img src="/lunges.png" alt="" class="w-50">
        <v-btn @click="search" prepend-icon="mdi-magnify" rounded="default" color="success" block class="mt-5">隨機選擇</v-btn>
      </div>
      <v-card class="mt-5" v-if="hasResult === 'result'">
        <h2 class="text-center mt-5">就決定做這支了！</h2>
        <div class="ma-5 youtube">
          <h3 class="text-center mb-3">{{ resultVideo.title }}</h3>
          <iframe
            :src="resultVideo.embeddedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <v-btn @click="search" prepend-icon="mdi-magnify" rounded="default" color="success" block class="mt-5">我ㄅ要，我要重新選擇</v-btn>
        </div>
      </v-card>
      <v-card class="mt-5" v-if="hasResult === 'noResult'">
        <h2 class="text-center">
          無條件搜尋結果，可以投稿影片給我納入資料庫！
        </h2>
      </v-card>
      </div>
      
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import SearchCard from "./components/SearchCard.vue";
import { useDataStore } from './stores/getData'

const store = useDataStore()
const allData = ref([])

onMounted(async() => {
  await store.getData()
  allData.value = store.allData
});

const resultVideo = ref({});
const hasResult = ref("beforeSearch");

const video = (val) => {
  resultVideo.value = val;
  if (val) {
    hasResult.value = "result";
  } else {
    hasResult.value = "noResult";
  }
};

const closeDialog = (val) => {
  dialog.value = val
};

const drawer = ref(false);
const group = ref(null);
const items = ref([
  { title: "投稿健身影片", value: "form" },
  { title: "開發者資訊", value: "developer" },
]);

watch(group, () => {
  drawer.value = false;
});

const dialog = ref(false)

const search = ()=>{
  let randomIndex = Math.floor(Math.random() * allData.value.length);
  let randomObject = allData.value[randomIndex];
  resultVideo.value = randomObject;
  hasResult.value = "result";
}

</script>

<style scoped>
.youtube iframe {
  width: 100%;
  height: 500px;
}
</style>
