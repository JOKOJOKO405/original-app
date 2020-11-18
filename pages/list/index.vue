<template>
  <main>
    <ModalBase v-if="isModalOpened" @close-modal="closeModal">
      <CreatePost />
    </ModalBase>
    一覧
    <AddButton @add-card="addCard" />

  </main>
</template>

<script>
import ModalBase from '~/components/ModalBase'
import CreatePost from '~/components/CreatePost'
import AddButton from '~/components/AddButton'
export default {
  components: {
    ModalBase,
    AddButton,
    CreatePost,
  },
  data(){
    return {
      isModalOpened: false,
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