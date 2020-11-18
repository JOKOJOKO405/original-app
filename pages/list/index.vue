<template>
  <div class="wrapper">
    <div class="inner">
      <SortDialog />
    </div>
    <div class="bg-col inner">
      <ul class="list__container">
        <li class="list__item">
          <DetailCard />
        </li>
        <li class="list__item">
          <DetailCard />
        </li>
        <li class="list__item">
          <DetailCard />
        </li>
      </ul>
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
  .list{
    &__container{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
    &__item{
      &:not(:nth-child(2n)){
        margin-right: 16px;
      }
      margin-bottom: 16px;
      width: calc(50% - 8px);
    }
  }
</style>