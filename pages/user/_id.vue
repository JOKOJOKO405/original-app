<template>
  <div class="inner">
    ここはユーザーページ
    <ModalBase v-if="isEditing" @close-modal="closeModal">
      <EditProfile />
    </ModalBase>
    <ModalBase v-if="isCreate" @close-modal="closeModal">
      <CreatePost />
    </ModalBase>
    一覧
    <AddButton @add-card="addCard" />
  </div>
</template>

<script>
import ModalBase from '~/components/ModalBase'
import EditProfile from '~/components/EditProfile'
import CreatePost from '~/components/CreatePost'
import AddButton from '~/components/AddButton'
export default {
  components: {
    ModalBase,
    EditProfile,
    AddButton,
  },
  data(){
    return {
      isEditing: false,
      isCreate: false,
    }
  },
  methods: {
    closeModal(){
      this.isEditing = false
      this.isCreate = false
    },
    editProfile(){
      this.isCreate = true
    },
    addCard(){
      this.isCreate = true
    }
  }
}
</script>

<style lang="scss">

</style>