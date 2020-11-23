<template>
  <transition appear>
    <div class="modal__container">
      <div class="modal__content">
        <slot />
        <button class="modal__btn" @click="$emit('close')">
          <img src="@/assets/img/ico_close.svg" alt="">
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.v-leave-active,
.v-enter-active {
  transition: opacity 0.4s ease-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave {
  opacity: 1;
}

.modal{
  &__container{
    position: absolute;
    background: rgba(#000, 0.5);
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  &__content{
    position: absolute;
    width: calc(100% - 32px);
    height: calc(100% - 32px);
    overflow-y: scroll;
    background: #fff;
    padding: 16px;
    border-radius: $radius-sm;
    top: 16px;
    left: 0;
    right: 0;
    margin: auto;
    overflow-y: scroll;
  }
  &__btn{
    @include circleBtn(40px);
    top: 8px;
    right: 8px;
  }
}
</style>