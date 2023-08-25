<template lang="">
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>今天健什麼</v-toolbar-title>

    <v-spacer></v-spacer>

    <router-link to="/search">
      <v-btn variant="text" icon="mdi-magnify" color="white"></v-btn>
    </router-link>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>

  <NavigationDrawer :drawer="drawer"></NavigationDrawer>

  <v-main class="ma-5">
    <div class="text-center mb-5">
      <img src="/letter.png" alt="" class="w-25" />
      <h3 class="mt-3">想推薦影片？歡迎投稿！</h3>
      <p>每一支影片我都會親自做過，這種開發者你見過嗎！</p>
    </div>

    <v-text-field
      label="暱稱"
      variant="outlined"
      prepend-inner-icon="mdi-account-box"
      :rules="nameRules"
      v-model="sendInfo.name"
    ></v-text-field>

    <v-text-field
      label="YouTube連結"
      variant="outlined"
      prepend-inner-icon="mdi-youtube"
      :rules="urlRules"
      v-model="sendInfo.url"
      class="mt-3"
    ></v-text-field>

    <v-textarea
      label="留言給我"
      variant="outlined"
      prepend-inner-icon="mdi-message"
      v-model="sendInfo.message"
      class="mt-3"
    ></v-textarea>
    <div class="text-right">
      <v-btn rounded="default" color="success" prepend-icon="mdi-check-bold"
        >確認</v-btn
      >
      <v-btn
        rounded="default"
        color="warning"
        prepend-icon="mdi-close"
        class="ms-3"
        >取消</v-btn
      >
    </div>
  </v-main>
</template>
<script setup>
import { ref, reactive } from "vue";
import NavigationDrawer from "../components/NavigationDrawer.vue";


const drawer = ref(false)

const sendInfo = reactive({
  name: null,
  url: null,
  message: null,
});

const nameRules = [
  (value) => {
    if (value) return true;
    return "此為必填項目";
  },
];

const urlRules = [
  (value) => {
    if (value) return true;
    return "此為必填項目";
  },
  (value) => {
    let validate =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (validate.test(value)) return true;
    return "請輸入正確格式";
  },
];
</script>
<style lang=""></style>
