import firebase from "firebase"

export const state = () => ({
  loginUser: null,
});

export const mutations = {
  setLogin(state, user) {
    state.loginUser = user.uid
  },
};

export const actions = {
  async googleLogin() {
    // Google プロバイダ オブジェクトのインスタンスを作成
    const googleAuth_provider = new firebase.auth.GoogleAuthProvider();
    // ログインページにリダイレクトしてログインを行う
    await $nuxt.$fireAuth.signInWithRedirect(googleAuth_provider)
    $nuxt.$router.push('')
  },
  async setLogOut(){
    const msg = confirm('ログアウトしますか？')
    if(msg) {
      // $nuxt.$fireAuth.signOut().then(() => {
      //   $nuxt.$router.push('/')
      // }).catch(function(error) {
      //   console.log(error);
      // });
      try{
        await $nuxt.$fireAuth.signOut()
        $nuxt.$router.push('/')
      }catch(error){
        console.log(error)
      }
    }
  },
  setLogin({commit}, user){
    commit('setLogin', user)
  },
};

export const getters = {

};
