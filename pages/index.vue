<template>
  <div class="inner">
    <Button label="はじめる" @onSubmit="onSubmit" />
  </div>
</template>

<script>
import Button from '~/components/Button';
export default {
  components: {
    Button,
  },
  methods: {
    onSubmit(){
      this.$router.push('/login')
    }
  }
}
</script>

