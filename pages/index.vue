<template>
  <div class="inner">
    <Button label="はじめる" @click="isLogin" />
  </div>
</template>

<script>
import Button from '~/components/Button';
export default {
  components: {
    Button,
  },
  methods: {
    isLogin(){
      $router.push('/login')
    }
  }
}
</script>

