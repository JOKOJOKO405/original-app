<template>
  <main>
    <div class="inner">
      <Form />
      <Button label="ログイン" @event="onSubmit" />
      <GoogleLogin label="Googleアカウントでログイン" @google-login="googleLogin" />
    </div>
  </main>
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
      console.log('ok')
    },
    onSubmit(){
      this.$router.push('/list')
    }
  }
  
}
</script>
