<template>
  <button class="btn-primary" @click="$emit('on-submit')">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ['label'],
}
</script>

<style lang="scss">
@import "@/assets/css/main";
  .btn-primary{
    @include btn($primary-color, #fff);
}
</style>