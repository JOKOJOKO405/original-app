<template>
  <div class="modalCard__container">
    <h3 class="modalCard__title">プロフィール編集</h3>
    <v-form
      ref="form"
      lazy-validation
    > 
      <div class="modalCard__userIcon">
        <template v-if="user.image.val">
          <img
            :src="user.image.val"
            class="userImg"
          >
        </template>
        <template v-else>
          <img src="@/assets/img/ico_user.svg" alt="">
        </template>
        <input
          type="file"
          ref="image"
          accept="image/png,image/jpeg"
          @change="selectedImage"
        >
      </div>
      <v-text-field
        v-model="user.name.val"
        :counter="20"
        :rules="user.name.rules"
        label="ニックネーム"
        required
      ></v-text-field>

      <v-textarea
        v-model="user.comment.val"
        :rules="user.comment.rules"
        label="自己紹介"
        :counter="150"
      ></v-textarea>
      <Button label="変更" @event="done" />
    </v-form>
  </div>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button,
  },
  data(){
    return {
      user: {
        name: {
          val: '',
          rules: [
            (val) => !!val || '入力必須項目です',
            (val) => {
              const max = 20
              return (
                (val && val.length <= max) || `${max}文字以内で入力してください`
              )
            },
          ],
        },
        comment: {
          val: '',
          rules: [
            (val) => {
              const max = 150
              return (
                (val && val.length <= max) || `${max}文字以内で入力してください`
              )
            },
          ]
        },
        image: {
          val: null,
        }
      }
    }
  },
  methods: {
    done(){
      console.log('ok')
    },
    selectedImage(e){
      const files = e.target.files;
      if (files.length === 0) return;

      const reader = new FileReader()
      reader.onload = (e) => {
        this.user.image.val = e.target.result
      }
      reader.readAsDataURL(files[0])
      // TODO 画像アップロード
      console.log(this.user.image.val)
    }
  }
}
</script>

<style lang="scss">
  .btn-primary{
    margin-top: 32px;
  }
</style>