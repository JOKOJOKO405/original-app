<template>
  <button class="btn-google" @click="$emit('google-login')">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ['label'],
}
</script>

<style lang="scss">
  .btn-google{
    @include btn(#fff, $font-color);
    border: 1px solid $light-gray;
    position: relative;
    &::before{
      @extend %psedo;
      width: 24px;
      height: 24px;
      background: url('~@/assets/img/google-icon.svg') center center no-repeat;
      background-size: cover;
      top: 50%;
      transform: translateY(-50%);
      left: 16px;
    }
}
</style>