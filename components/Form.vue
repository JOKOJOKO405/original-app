<template>
  <v-form
      ref="form"
      lazy-validation
    >
    <span class="label">メールアドレス</span>
    <v-text-field
      label="メールアドレス"
      single-line
      outlined
    ></v-text-field>
    <span class="label">パスワード</span>
    <v-text-field
      label="半角英数字8文字以上"
      single-line
      outlined
    ></v-text-field>
    <template v-if="isSignUp">
      <v-text-field
        label="もう一度入力してください"
        single-line
        outlined
      ></v-text-field>
    </template>
  </v-form>
</template>

<script>
export default {
  data(){
    return {
      isSignUp: false
    }
  }
}
</script>

<style lang="scss">
  .label{
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
</style>