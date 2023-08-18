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

</script>
<style lang="">
  
</style>