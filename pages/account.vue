<template>
  <div class="inner">
    <EditProfile label="プロフィールを作成しよう" />
  </div>
</template>

<script>
import EditProfile from '~/components/EditProfile'
export default {
  middleware: ['checkAccount'],
  components: {
    EditProfile,
  }
}
</script>

<style lang="scss">
  .modalCard__container{
    padding: 0;
  }
</style>