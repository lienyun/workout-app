<template lang="">
  <v-card class="pa-5">
    <div class="d-flex align-center justify-space-between mb-5">
      <h3>篩選條件</h3>
      <v-btn icon="mdi-close" variant="text" color="info" @click="close"></v-btn>
    </div>

    <v-row>
      <v-col cols="12" md="3">
        <v-select
          label="訓練部位"
          variant="outlined"
          density="compact"
          hide-details
          multiple
          chips
          v-model="filter.bodyPart"
          :items="['上肢', '臀腿', '核心', '全身']"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-checkbox
          label="無跳躍"
          hide-details
          v-model="filter.noJump"
          density="compact"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" md="3">
        <v-checkbox
          label="無器材"
          hide-details
          v-model="filter.noEquipment"
          density="compact"
        ></v-checkbox>
      </v-col>

      <v-col cols="12" md="3">
        <v-select
          label="難易度"
          variant="outlined"
          density="compact"
          hide-details
          :items="['簡單', '適中', '困難']"
          v-model="filter.difficuity"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          label="鍛鍊類型"
          variant="outlined"
          density="compact"
          hide-details
          :items="['有氧', '肌力', '混合','瑜珈','拉筋']"
          v-model="filter.type"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          label="時間長度"
          variant="outlined"
          density="compact"
          hide-details
          :items="[
            '5-10分鐘',
            '10-20分鐘',
            '20-30分鐘',
            '30分鐘以上',
          ]"
          v-model="filter.time"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          label="作者"
          variant="outlined"
          density="compact"
          hide-details
          :items="['May Fit', 'Coffee', 'Emi Wong', 'Pamela','MIZI']"
          v-model="filter.author"
        >
        </v-select>
      </v-col>
      <v-col cols="12" md="3" class="d-flex justify-end align-center">
        <v-btn @click="clear" color="red" prepend-icon="mdi-window-close" rounded="default">清除</v-btn>
        <v-btn @click="search" class="ml-5" color="success" prepend-icon="mdi-magnify" rounded="default">搜尋</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import { useDataStore } from '../stores/getData'

const store = useDataStore()

const filter = reactive({
  author: null,
  bodyPart: null,
  noJump: null,
  noEquipment: null,
  equimentType: null,
  time: null,
  difficuity: null,
  type: null,
});

const props = defineProps({
  reSearch: Object
})

if(props.reSearch !== undefined){
  filter.author = props.reSearch.author
  filter.bodyPart = props.reSearch.bodyPart
  filter.noJump = props.reSearch.noJump
  filter.noEquipment = props.reSearch.noEquipment
  filter.equimentType = props.reSearch.equimentType
  filter.time = props.reSearch.time
  filter.difficuity = props.reSearch.difficuity
  filter.type = props.reSearch.type
}


const allData = ref([]);
const randomVideo = ref({});
const dialog = ref(true)
const emit = defineEmits(["searchVideo", "closeDialog", "filter"]);



const search = () => {
  allData.value = store.allData
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
  randomVideo.value = randomObject;

  emit("video", randomObject);
  emit("closeDialog", false)
  emit("filter", filter)
};

const clear = () => {
  filter.author = null
  filter.bodyPart = null
  filter.noJump = null
  filter.noEquipment = null
  filter.equimentType = null
  filter.time = null
  filter.difficuity = null
  filter.type = null
}

const close = () => {
  emit("closeDialog", false)
}
</script>
<style lang=""></style>
