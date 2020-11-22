<template>
  <main>
  <TopBg />
    <div class="inner">
      <Logo />
      <form @submit.prevent="googleLogin">
        <GoogleLogin label="Googleアカウントでログイン" />
      </form>
      <Button label="メールアドレスでログイン" @event="onSubmit" />
      <p class="login__text"
        @click="toSignUp"
      >
        アカウントをお持ちでない方はこちら
      </p>
    </div>
  </main>
</template>

<script>
import TopBg from '~/components/TopBg'
import Logo from '~/components/Logo'
import Button from '~/components/Button'
import GoogleLogin from '~/components/GoogleLogin'
export default {
  components: {
    TopBg,
    Logo,
    Button,
    GoogleLogin,
  },
  methods: {
    onSubmit(){
      this.$router.push('/login')
    },
    googleLogin(){
      this.$store.dispatch('user/googleLogin')
    },
    toSignUp(){
      this.$router.push('/signup')
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
