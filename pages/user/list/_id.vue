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
      <div class="detail__btns">
        <Button label="編集" @event="editPost" />
        <Button label="削除" :style="deleteClass" @event="editPost" />
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
    <ModalBase v-if="isPostEdit" @close-modal="closeModal">
      <EditPost />
    </ModalBase>
  </div>
</template>

<script>
import EditPost from '~/components/EditPost'
import Button from '~/components/Button'
export default {
  components: {
    EditPost,
    Button,
  },
  data(){
    return {
      isUser: false,
      isPostEdit: false,
      deleteClass: {
        background: '#a2a2a2',
        marginRight: 0,
      },
    }
  },
  methods: {
    closeModal() {
      this.isPostEdit = false;
    },
    editPost(){
      this.isPostEdit = true;
    }
  },
}
</script>

<style lang="scss">
  .detail{
    &__container{
      padding-bottom: 80px;
    }
    &__userInfo{
      display: flex;
      justify-content: space-between;
      dl{
        display: flex;
        align-items: center;
        dt{
          width: 27px;
          height: 27px;
          margin-right: 8px;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }
      }
    }
    &__date{
        font-size: 14px;
        color: $light-gray;
        text-align: right;
      }
    &__btns{
      display: flex;
      justify-content: flex-end;
      margin: 0 0 8px auto;
      .btn-primary{
        display: inline-block;
        width: 80px;
        margin: 0 8px 0 0;
      }
    }
    &__img{
      margin-bottom: 24px;
    }
    &__name{
      @include title($primary-color);
      margin-bottom: 8px;
    }
    &__menu{
      font-weight: bold;
      margin-bottom: 8px;
    }
    &__price{
      font-size: 14px;
      text-align: right;
      margin-bottom: 24px !important;
    }
    &__comment{
      background: $bg-color;
      padding: 16px;
      border-radius: 8px;
    }
  }
</style>