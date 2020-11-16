<template>
  <div class="modalCard__container">
    <h3 class="modalCard__title">プロフィール編集</h3>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="user.name.val"
        :counter="20"
        :rules="user.name.rules"
        label="ニックネーム"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.comment.val"
        :rules="user.comment.rules"
        label="自己紹介"
        :counter="150"
      ></v-text-field>
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
        }
      }
    }
  },
  methods: {
    done(){
      console.log('ok')
    }
  }
}
</script>

<style lang="scss">
</style>