<template>
  <button class="addBtn" @click="$emit('add-card')">
    <img src="@/assets/img/ico_plus.svg" alt="">
  </button>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "@/assets/css/main";
  .addBtn {
    @include circleBtn(60px, 16px);
    bottom: 16px;
  }
</style>