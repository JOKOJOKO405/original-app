<template>
  <div class="inner">
      <Form />
      <Button label="ログイン" @event="onSubmit" />
      <GoogleLogin label="Googleアカウントでログイン" @google-login="googleLogin" />
  </div>
</template>

<script>
import Form from '~/components/Form';
import Button from '~/components/Button'
import GoogleLogin from '~/components/GoogleLogin'
export default {
  components: {
    Form,
  },
  methods: {
    googleLogin(){
      this.$store.dispatch('user/googleLogin')
    },
    onSubmit(){
      this.$router.push('/list')
    }
  }
  
}
</script>
