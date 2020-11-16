<template>
  <button class="btn-primary" @click="$emit('onSubmit')">
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
    background: $primary-color;
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding: 10px;
    border-radius: $radius-lr;
    display: block;
    width: 100%;
}
</style>