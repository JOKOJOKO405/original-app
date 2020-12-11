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
          <span class="header__link" @click="isHome">
            <img src="@/assets/img/ico_home.svg" alt="ホーム" />
          </span>
          <span class="header__link" @click="isMyPage">
            <img src="@/assets/img/ico_user_w.svg" alt="マイページ" />
          </span>
          <form class="header__link" @submit.prevent="logOut">
            <button type="submit"><img src="@/assets/img/ico_logout.svg" alt="ログアウト" /></button>
          </form>
        </div>
      </template>
      <template v-else-if="!isLogin">
        <div>
          <span class="header__link" @click="isSignUpPage"> 新規登録 </span>
          <span class="header__link" @click="isLoginPage"> ログイン </span>
        </div>
      </template>
    </v-layout>
  </header>
</template>

<script>
export default {
  asyncData() {
    return {
      isLogin: false,
    }
  },
  async mounted() {
    this.$fireAuth.onAuthStateChanged(user => {
      if(user){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  },
  methods: {
    isLoginPage(){
      this.$router.push('/login')
    },
    isSignUpPage(){
      this.$router.push('/signup')
    },
    isHome(){
      this.$router.push('/')
    },
    isMyPage(){
      const uid = this.$fireAuth.currentUser.uid
      if(uid == null){
        this.$router.push('/login')
      }
      this.$router.push(`/user/${uid}`)
    },
    logOut(){
      this.$store.dispatch('user/setLogOut')
    }
  },
  computed: {

  }
};
</script>

<style lang="scss">
.header {
  background: $primary-gradient;
  padding: 10px 16px;
  &__logo {
    width: 88px;
  }
  &__link {
    display: inline-block;
    font-weight: bold;
    color: #fff;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
