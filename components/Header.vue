<template>
  <header class="header">
    <v-layout class="align-center justify-space-between">
      <v-flex>
        <nuxt-link to="/">
          <img class="header__logo" src="@/assets/img/logo.svg" alt="" />
        </nuxt-link>
      </v-flex>
      <template v-if="isLogin">
        <div>
          <span class="header__link">
            <img src="@/assets/img/ico_home.svg" alt="ホーム">
          </span>
          <span class="header__link">
            <img src="@/assets/img/ico_user_w.svg" alt="マイページ">
          </span>
        </div>
      </template>
      <template v-else>
        <div>
          <span class="header__link" @click="isSignUpPage">
            新規登録
          </span>
          <span class="header__link" @click="isLoginPage">
            ログイン
          </span>
        </div>
      </template>
    </v-layout>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    isLoginPage(){
      this.router.push('/login')
    },
    isSignUpPage(){
      this.$router.push('/signup')
    },
    isHome(){
      this.router.push('/')
    },
    isMyPage(userId){
      this.router.push(`/user/${userId}`)
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/main";
.header {
  background: $primary-gradient;
  padding: 10px 16px;
  &__logo {
    width: 88px;
  }
  &__link{
    display: inline-block;
    font-weight: bold;
    color: #fff;
    &:first-child{
      margin-right: 16px;
    }
  }
}
</style>
