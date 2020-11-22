<template>
  <div class="modalCard__container">
    <h3 class="modalCard__title">プロフィール編集</h3>
    <v-form
      ref="form"
      lazy-validation
      @submit.prevent="onSubmit"
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
      <Button label="変更" type="submit" />
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
    selectedImage(e){
      const files = e.target.files;
      if (files.length === 0) return;

      const reader = new FileReader()
      reader.readAsDataURL(files[0])

      reader.onload = (e) => {
        this.upload({
          localImageFile: files[0],
        })
      }
    },
    async upload({ localImageFile }){
      const user = await this.$auth()
      // 未ログインでログイン画面に遷移
      if(!user) this.$router.push('/login')
      // ストレージオブジェクト作成
      const storageRef = this.$fireStorage.ref()
      // ファイルのパスを作成
      const imageRef = storageRef.child(
        `images/${user.uid}/${localImageFile.name}`
      )
      // ファイルのアップロード
      const snapShot = await imageRef.put(localImageFile)
      this.user.image.val = await snapShot.ref.getDownloadURL()
    },
    async onSubmit(){
      const auth = await this.$auth()
      if(!auth) this.$router.push('/login')
      if(this.$refs.form.validate()){
        try{
          await this.$firestore
            .collection('users')
            .doc(auth.uid)
            .set({
              name: this.user.name.val,
              comment: this.user.comment.val,
              iconImage: this.user.image.val,
            })
            this.$router.push('/user/:id')
        } catch(e){
          console.log(e)
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