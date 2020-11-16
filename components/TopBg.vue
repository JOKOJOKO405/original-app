<template>
  <div class="bg-img">
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .bg-img{
    position: absolute;
    background: url('~@/assets/img/bg_img.png') center center repeat-y;
    background-size: contain;
    width: 100%;
    height: 100%;
    z-index: -1;
    &::before{
      @extend %psedo;
      width: 100%;
      height: 100%;
      background: rgba(#000, 0.5);
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
</style>