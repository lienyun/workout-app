<template lang="">
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title
      ><router-link to="/search">今天健什麼</router-link></v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-filter" @click="dialog = true"></v-btn>

    <v-dialog v-model="dialog" width="auto" scrollable>
      <SearchCard @video="video" @closeDialog="closeDialog" @filter="filter" />
    </v-dialog>

    <!-- <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
  </v-app-bar>

  <NavigationDrawer :drawer="drawer"></NavigationDrawer>

  <v-main>
    <div class="ma-5">
      <div
        class="mt-5 d-flex flex-column align-center"
        v-if="hasResult === 'beforeSearch'"
      >
        <img src="/lunges.png" alt="" class="w-50" />
        <v-btn
          @click="allRandomSearch"
          prepend-icon="mdi-magnify"
          rounded="default"
          color="success"
          block
          class="mt-5"
          >隨機選擇</v-btn
        >
      </div>
      <v-card class="mt-5 pa-5" v-if="hasResult === 'result'">
        <h2 class="text-center mt-5">就決定做這支了！</h2>
        <div class="youtube text-center">
          <v-chip class="mb-3 mt-3" color="primary">{{ resultVideo.author }}</v-chip>
          <h3 :class="resultVideo.equimentType ? '' : 'mb-3'">
            {{ resultVideo.title }}
          </h3>
          <h4 v-if="resultVideo.equimentType" class="mb-3">
            器材：{{ resultVideo.equimentType }}
          </h4>
          <div class="video-box">
            <iframe
              :src="resultVideo.embeddedUrl"
              title="YouTube video player"
              frameborder="0"
              allowFullScreen="true"
            ></iframe>
          </div>

          <v-btn
            @click="originalSearch"
            prepend-icon="mdi-magnify"
            rounded="default"
            color="success"
            block
            class="mt-5"
            >依照原條件搜尋</v-btn
          >
          <v-btn
            @click="dialog = true"
            prepend-icon="mdi-magnify"
            rounded="default"
            color="warning"
            block
            class="mt-3"
            >修改條件重新搜尋</v-btn
          >
        </div>
      </v-card>
      <div
        class="mt-5 d-flex flex-column align-center"
        v-if="hasResult === 'noResult'"
      >
        <img src="/empty-box.png" alt="" class="w-50" />
        <p class="mt-3 text-center">
          你條件太嚴苛了！資料庫目前沒有資料QQ
          <br />
          歡迎填寫表單協助我壯大資料庫🏋️
        </p>
        <v-btn
          @click="dialog = true"
          prepend-icon="mdi-magnify"
          rounded="default"
          color="success"
          block
          class="mt-3"
          >重新搜尋</v-btn
        >
      </div>
    </div>
  </v-main>
</template>
<script setup>
import { ref, watch, onMounted, reactive } from "vue";
import { useDataStore } from "../stores/getData";
import SearchCard from "../components/SearchCard.vue";
import NavigationDrawer from "../components/NavigationDrawer.vue";

const store = useDataStore();
const allData = ref([]);

onMounted(async () => {
  await store.getData();
  allData.value = store.allData;
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
  dialog.value = val;
};

const group = ref(null);
const drawer = ref(false);

watch(group, () => {
  drawer.value = false;
});

const dialog = ref(false);

const allRandomSearch = () => {
  let randomIndex = Math.floor(Math.random() * allData.value.length);
  let randomObject = allData.value[randomIndex];
  resultVideo.value = randomObject;
  hasResult.value = "result";
};

const searchFilter = ref();

const filter = (val) => {
  searchFilter.value = val;
};

const originalSearch = () => {
  let filter = searchFilter.value;
  if (filter) {
    let filterdData = allData.value.filter((item) => {
      if (filter.author !== null && item.author !== filter.author) {
        return false;
      }
      if (filter.bodyPart !== null) {
        if (!item.bodyPart.includes(...filter.bodyPart)) {
          return false;
        }
      }
      if (
        filter.noEquipment !== null &&
        item.noEquipment !== filter.noEquipment
      ) {
        return false;
      }
      if (filter.difficuity !== null && item.difficuity !== filter.difficuity) {
        return false;
      }
      if (filter.type !== null && item.type !== filter.type) {
        return false;
      }
      if (filter.time !== null && item.time !== filter.time) {
        return false;
      }
      return true;
    });

    let randomIndex = Math.floor(Math.random() * filterdData.length);
    let randomObject = filterdData[randomIndex];
    resultVideo.value = randomObject;
  } else {
    allRandomSearch();
  }
};
</script>
<style scoped>
.video-box {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.video-box iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-box embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
