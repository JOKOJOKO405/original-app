<template>
  <div class="modalCard__container">
    <h3 class="modalCard__title">新規投稿</h3>
    <v-form
      ref="form"
      lazy-validation
      @submit.prevent="onSubmit"
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
      <Button label="投稿する" type="submit" />
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
    selectedImage(e){
      const files = e.target.files
      if (files.length === 0) return

      const reader = new FileReader()
      reader.readAsDataURL(files[0])

      reader.onload = (e) => {
        this.upload({
          localImageFile: files[0],
        })
      }
    },
    async upload({ localImageFile }){
      const user = await this.$fireAuth.currentUser

      if(!user) this.$router.push('/login')

      // ストレージオブジェクト作成
      const storageRef = this.$fireStorage.ref()

      // ファイルパス作成
      const imageRef = storageRef.child(
        `images/${user.uid}/rooms/${localImageFile.name}`
      )

      // アップロード処理
      const snapShot = await imageRef.put(localImageFile)
      this.lunch.image.val = await snapShot.ref.getDownloadURL()

    },
    async onSubmit(){
      // ログイン判定
      const auth = await this.$fireAuth.currentUser
      const uid = auth.uid
      if(!auth) this.$router.push('/login')

      // バリデーション通過したら
      if(this.$refs.form.validate()){
        const data = {
          user: auth.uid,
          name: this.lunch.name.val,
          menu: this.lunch.menu.val,
          price: this.lunch.price.val,
          comment: this.lunch.comment.val,
          image: this.lunch.image.val,
          createdAt: this.$firebase.firestore.FieldValue.serverTimestamp()
        }

        try {
          await this.$firestore.collection('lunch').add(data)
          this.$router.push(`user/${uid}`)
        } catch (error) {
          console.log('error!');
        }
      }
    },
  }
}
</script>

<style lang="scss">
  .btn-primary{
    margin-top: 32px;
  }
</style>