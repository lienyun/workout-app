<template lang="">
<v-card class="pa-5">
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
              :items="['上肢','臀腿','核心','全身']"
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-checkbox label="跳躍" hide-details v-model="filter.noJump"></v-checkbox>
          </v-col>
          <v-col cols="12" md="3">
            <v-checkbox label="需要器材" hide-details v-model="filter.noEquipment"></v-checkbox>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              label="難易度"
              variant="outlined"
              density="compact"
              hide-details
              :items="['簡單','適中','困難']"
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
              :items="['有氧','肌力','混合']"
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
              :items="['5分鐘內','5-10分鐘','10-20分鐘','20-30分鐘','30分鐘以上']"
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
              :items="['May Fit','Coffee','Emi Wong','Pamela']"
              v-model="filter.author"
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="3" class="text-center">
            <v-btn @click="search">搜尋</v-btn>
            <v-btn class="ml-5">清除</v-btn>
          </v-col>
        </v-row>
      </v-card>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";

const data = ref([]);

const filter = reactive({
  title: null,
  url: null,
  author: null,
  bodyPart: null,
  noJump: null,
  noEquipment: null,
  equimentType: null,
  time: null,
  difficuity: null,
  type: null
})

// const variable = import.meta.env.VITE_KEY
// console.log(variable)

onMounted(()=>{
  getData()
})
const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREADSHEET_ID}/values/A1%3AJ39?key=${GOOGLE_APIKey}`
const getData = async () => {
  const res = await axios.get(url);
  const key = res.data.values[0]

  res.data.values.shift()
  let orgData = res.data.values

  let result = [];

  for (let i = 0; i < orgData.length; i++) {
    let obj = {};
    for (let j = 0; j < key.length; j++) {
      obj[key[j]] = orgData[i][j];
    }
    result.push(obj);
  }
  data.value = result
  console.log(result)
};


</script>
<style lang="">
  
</style>