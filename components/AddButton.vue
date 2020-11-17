<template>
  <button class="addBtn" @click="$emit('add-card')">
    <img src="@/assets/img/ico_plus.svg" alt="">
  </button>
</template>

<script>
export default {
  methods: {
    addCard() {
      this.$emit('add-card')
    }
  }
}
</script>

<style lang="scss">
  .addBtn {
    @include circleBtn(60px, 16px);
    bottom: 16px;
  }
</style>