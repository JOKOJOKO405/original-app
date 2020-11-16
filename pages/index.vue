<template>
  <div class="inner">
    <Logo />
    <GoogleLogin label="Googleアカウントでログイン" @google-login="googleLogin" />
    <Button label="メールアドレスでログイン" @onSubmit="onSubmit" />
    <p class="login__text"
      @click="onSubmit"
    >
      アカウントをお持ちでない方はこちら
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Button from '~/components/Button'
import GoogleLogin from '~/components/GoogleLogin'
export default {
  components: {
    Logo,
    Button,
    GoogleLogin,
  },
  methods: {
    onSubmit(){
      this.$router.push('/login')
    },
    googleLogin(){
      console.log('ok')
    }
  }
}
</script>

<style lang="scss">
  .login{
    &__text{
      color: #fff;
      text-align: center;
      font-weight:bold;
    }
  }
</style>

