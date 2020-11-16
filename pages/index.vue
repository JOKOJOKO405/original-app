<template>
  <div class="inner">
    <Button label="メールアドレスでログイン" @onSubmit="onSubmit" />
    <GoogleLogin label="Googleアカウントでログイン" @google-login="googleLogin" />
  </div>
</template>

<script>
import Button from '~/components/Button'
import GoogleLogin from '~/components/GoogleLogin'
export default {
  components: {
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

