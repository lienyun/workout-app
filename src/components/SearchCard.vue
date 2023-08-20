<template lang="">
<v-card class="pa-5">
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              label="訓練部位"
              variant="outlined"
              density="compact"
              hide-details
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-checkbox label="跳躍" hide-details></v-checkbox>
          </v-col>
          <v-col cols="12" md="3">
            <v-checkbox label="需要器材" hide-details></v-checkbox>
          </v-col>

          <v-col cols="12" md="3">
            <v-select
              label="難易度"
              variant="outlined"
              density="compact"
              hide-details
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="鍛鍊類型"
              variant="outlined"
              density="compact"
              hide-details
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="時間長度"
              variant="outlined"
              density="compact"
              hide-details
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              label="作者"
              variant="outlined"
              density="compact"
              hide-details
            >
            </v-select>
          </v-col>
          <v-col cols="12" md="3" class="text-center">
            <v-btn>搜尋</v-btn>
            <v-btn class="ml-5">清除</v-btn>
          </v-col>
        </v-row>
      </v-card>
</template>
<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

const data = ref([]);

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

};


</script>
<style lang="">
  
</style>