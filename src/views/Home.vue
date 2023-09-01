<template lang="">
  <v-main>
    <div class="wrapper">
      <div class="deco deco1 bg-primary"></div>
      <h1>
        Better late
        <br />
        than never.
      </h1>
      <div class="deco deco2 bg-primary"></div>

      <router-link to="/search" class="mt-5">
        <v-btn rounded="default" variant="tonal">let's go!!</v-btn>
      </router-link>
    </div>
  </v-main>
</template>
<script setup></script>
<style scoped>
h1 {
  position: relative;
  z-index: 99;
}

.wrapper {
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.deco {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.5;
}
.deco.deco1 {
  top: -10vh;
  left: -10vw;
}
.deco.deco2 {
  bottom: -10vh;
  right: -10vw;
}
/* 如果螢幕小餘600px */
@media (max-width: 600px) {
  .deco.deco1 {
    top: -30vh;
    left: -30vw;
  }
  .deco.deco2 {
    bottom: -30vh;
    right: -30vw;
  }
}
</style>
