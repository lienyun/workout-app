<template lang="">
  <v-navigation-drawer v-model="props.drawer" location="left" temporary>
    <v-list>
      <router-link :to="item.href" v-for="item in items" class="text-linkColor">
        <v-list-item>
          {{ item.title }}
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { ref } from "vue";
const drawer = ref(false);
const items = ref([
  { title: "投稿健身影片", value: "form", href: "/form" },
  { title: "開發者資訊", value: "developer", href: "/developer" },
  { title: "版權資訊", value: "copyright", href: "/copyright" },

]);

const props = defineProps({
  drawer: Boolean
})


</script>
<style scoped>
a {
  text-decoration: none;
}
  
</style>