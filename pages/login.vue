<template>
  <div class="inner">
    <v-form ref="form" lazy-validation>
      <span class="label">メールアドレス</span>
      <v-text-field
        v-model="form.email.val"
        label="メールアドレス"
        single-line
        outlined
        :rules="form.email.rules"
      ></v-text-field>
      <span class="label">パスワード</span>
      <v-text-field
        v-model="form.pass.val"
        :append-icon="form.pass.isShow ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="form.pass.rules"
        :type="form.pass.isShow ? 'text' : 'password'"
        label="半角英数字8文字以上12文字以内"
        single-line
        outlined
        @click:append="form.pass.isShow = !form.pass.isShow"
      ></v-text-field>
      <Button label="ログイン" @event="onSubmit" />
    </v-form>
    <form @submit.prevent="googleLogin">
      <GoogleLogin label="Googleアカウントでログイン" />
    </form>
  </div>
</template>

<script>
import Form from '~/components/Form';
import Button from '~/components/Button'
import GoogleLogin from '~/components/GoogleLogin'
export default {
  middleware: ['checkLogin'],
  components: {
    Form,
  },
  data() {
    return {
      form: {
        email: {
          val: "",
          rules: [
            (val) => !!val || "メールアドレスを入力してください",
            (val) => {
              const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
              return regex.test(val) || "入力が正しくありません";
            },
          ],
        },
        pass: {
          val: "",
          isShow: false,
          rules: [
            (val) => !!val || "パスワードを入力してください",
            (val) => {
              const regex = /^[A-Za-z0-9]*$/;
              return regex.test(val) || "半角英数字で入力してください";
            },
            (val) => (val.length >= 8 && val.length < 13) || "8文字以上12文字以内で入力してください",
          ],
        },
      },
    }
  },
  methods: {
    googleLogin(){
      this.$store.dispatch("user/googleLogin");
    },
    onSubmit(){
      this.$router.push('/user')
    }
  }
  
}
</script>
