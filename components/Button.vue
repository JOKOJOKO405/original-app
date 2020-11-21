<template>
  <button class="btn-primary" @click="$emit('event')">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ['label'],
  methods: {
    addEvent(){
      this.$emit('event')
    }
  }
}
</script>

<style lang="scss">
  .btn-primary{
    @include btn($primary-color, #fff);
}
</style>