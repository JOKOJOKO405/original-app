<template>
  <div class="user__container">
    <h2 class="user__message">ようこそ、{{ name }}さん</h2>
    <dl class="user__prof">
      <dt>
        <template v-if="isUser">
        </template>
        <template v-else>
          <img src="@/assets/img/ico_user.svg" alt="">
        </template>
      </dt>
      <dd>
        <p>
          {{ name }}
        </p>
        <Button label="変更" />
      </dd>
    </dl>
  </div>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button,
  },
  props: ['name'],
  data(){
    return {
      isUser: false,
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .user{
    &__message{
      font: {
        weight: bold;
        size: $font-lr;
      }
      color: $primary-color;
      margin-bottom: 24px;
    }
    &__prof{
      display: flex;
      dt{
        width: 120px;
      }
      dd{
        width: calc(100% - 120px);
        padding-left: 16px;
      }
    }
  }
</style>