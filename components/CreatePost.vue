<template>
  <div class="modalCard__container">
    <h3 class="modalCard__title">新規投稿</h3>
    <v-form
      ref="form"
      lazy-validation
    > 
      <div class="modalCard__userIcon">
        <template v-if="lunch.image.val">
          <img
            :src="lunch.image.val"
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
        v-model="lunch.name.val"
        :rules="lunch.name.rules"
        label="店名"
        required
      ></v-text-field>
      <v-text-field
        v-model="lunch.menu.val"
        :rules="lunch.menu.rules"
        label="メニュー名"
        required
      ></v-text-field>
      <v-text-field
        v-model.number="lunch.price.val"
        :counter="20"
        :rules="lunch.price.rules"
        label="価格"
        required
      ></v-text-field>
      <v-textarea
        v-model="lunch.comment.val"
        :rules="lunch.comment.rules"
        label="コメント"
        :counter="150"
      ></v-textarea>
      <Button label="投稿する" @event="done" />
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
      lunch: {
        name: {
          val: '',
          rules: [
            (val) => !!val || '入力必須項目です',
            (val) => {
              const max = 100
              return (
                (val && val.length <= max) || `${max}文字以内で入力してください`
              )
            },
          ],
        },
        menu: {
          val: '',
          rules: [
            (val) => !!val || '入力必須項目です',
            (val) => {
              const max = 100
              return (
                (val && val.length <= max) || `${max}文字以内で入力してください`
              )
            },
          ],
        },
        price: {
          val: '',
          rules: [
            (val) => !!val || '入力必須項目です',
          ]
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