<template>
  <v-form
      ref="form"
      lazy-validation
    >
    <span class="label">メールアドレス</span>
    <v-text-field
      v-model="emailVal"
      label="メールアドレス"
      single-line
      outlined
    ></v-text-field>
    <!-- <span class="label">パスワード</span>
    <v-text-field
      v-model="passwordVal"
      label="半角英数字8文字以上"
      single-line
      outlined
    ></v-text-field>
    <template v-if="!$store.state">
      <v-text-field
        label="もう一度入力してください"
        single-line
        outlined
      ></v-text-field>
    </template> -->
  </v-form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    email: {
      type: String,
      required: true,
      default: '',
    },
    // password: {
    //   type: String,
    //   required: true,
    //   default: '',
    // },
  },
  data(){
    return {
    }
  },
  computed: {
    emailVal: {
      get(){
        return this.email
      },
      set(val){
        this.$emit('update:email', val)
      }
    },
    // passwordVal: {
    //   get(){
    //     return this.password.val
    //   },
    //   set(val){
    //     this.$emit('update:val', password.val)
    //   }
    // },
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