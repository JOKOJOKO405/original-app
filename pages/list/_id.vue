<template>
  <div class="detail__container">
    <div class="inner">
      <div class="detail__userInfo">
        <dl>
          <dt><img src="@/assets/img/ico_user.svg" alt=""></dt>
          <dd>
            ユーザー名
          </dd>
        </dl>
        <p class="detail__date">2020.11.30</p>
      </div>
    </div>
    <div class="detail__img">
      <img src="@/assets/img/03.jpeg" alt="">
    </div>
    <div class="inner">
      <h2 class="detail__name">いきなりステーキ</h2>
      <h3 class="detail__menu">メニュー名メニュー名</h3>
      <p class="detail__price">2,980円</p>
      <div class="detail__comment">
        コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント
      </div>
    </div>
    <ModalBase v-if="isCreate" @close-modal="closeModal">
      <CreatePost />
    </ModalBase>
    <AddButton @add-card="addCard" />
  </div>
</template>

<script>
import CreatePost from '~/components/CreatePost'
import AddButton from '~/components/AddButton'
export default {
  components: {
    CreatePost,
    AddButton,
  },
  data(){
    return {
      isUser: false,
      isCreate: false,
    }
  },
  methods: {
    closeModal() {
      this.isCreate = false;
    },
    addCard() {
      this.isCreate = true;
    },
  },
}
</script>

<style lang="scss">
.detail__userInfo{
  margin-bottom: 16px;
}
</style>