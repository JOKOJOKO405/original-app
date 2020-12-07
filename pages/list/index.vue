<template>
  <div class="wrapper">
    <div class="inner">
      <SortDialog />
    </div>
    <div class="bg-col inner">
      <DetailCard />
          
      <ModalBase v-if="isModalOpened" @close-modal="closeModal">
        <CreatePost />
      </ModalBase>
      <AddButton @add-card="addCard" />
    </div>
  </div>
</template>

<script>
import DetailCard from '~/components/DetailCard'
import SortDialog from '~/components/SortDialog'
import ModalBase from '~/components/ModalBase'
import CreatePost from '~/components/CreatePost'
import AddButton from '~/components/AddButton'
export default {
  components: {
    ModalBase,
    AddButton,
    CreatePost,
    DetailCard,
    SortDialog,
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
  .bg-col{
    background: $bg-color;
  }
</style>