<template>
  <main>
    <ModalBase v-if="isModalOpened" @close-modal="closeModal">
      ここに何かはいる
    </ModalBase>
    一覧
    <AddButton @add-card="addCard" />

  </main>
</template>

<script>
import ModalBase from '~/components/ModalBase'
import AddButton from '~/components/AddButton'
export default {
  components: {
    ModalBase,
    AddButton,
  },
  data(){
    return {
      isModalOpened: true,
    }
  },
  methods: {
    closeModal(){
      this.isModalOpened = false
    },
    addCard(){
      this.isModalOpened = true
    }
  }
}
</script>

<style lang="scss">

</style>