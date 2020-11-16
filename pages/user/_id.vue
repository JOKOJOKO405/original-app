<template>
  <div class="inner">
    ここはユーザーページ
    <ModalBase v-if="isModalOpened" @close-modal="closeModal">
      <EditProfile />
    </ModalBase>
    一覧
    <AddButton @add-card="addCard" />
  </div>
</template>

<script>
import ModalBase from '~/components/ModalBase'
import EditProfile from '~/components/EditProfile'
import AddButton from '~/components/AddButton'
export default {
  components: {
    ModalBase,
    EditProfile,
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
    },
  }
}
</script>

<style lang="scss">

</style>