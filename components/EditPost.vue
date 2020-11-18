<template>
  <div class="modalCard__container">
    <h3 class="modalCard__title">投稿を編集</h3>
    <v-form
      ref="form"
      lazy-validation
    > 
      <div class="modalCard__post">
        <template v-if="lunch.image.val">
          <div class="modalCard__lunchImg">
            <img
              :src="lunch.image.val"
              class="userImg"
            >
          </div>
        </template>
        <template v-else>
          <div class="dummy-img">
            <img src="@/assets/img/ico_cutlery.svg" alt="">
          </div>
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
      <Button label="編集完了" @event="done" />
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
          val: 'いきなりステーキ',
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
          val: 'メニュー名',
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
          val: 2980,
          rules: [
            (val) => !!val || '入力必須項目です',
          ]
        },
        comment: {
          val: '美味しかったです',
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
          val: require('@/assets/img/03.jpeg'),
        }
      }
    }
  },
  methods: {
    done(){
      console.log('ok')
    },
    deletePost(){
      console.log('delete')
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