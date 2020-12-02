import firebase from "firebase"

export const state = () => ({
  loginUser: null,
});

export const mutations = {
  setLogin(state, user) {
    state.loginUser = user.uid
  },
  setLogOut(state){
    state.loginUser = null
  }
};

export const actions = {
  async googleLogin() {
    // Google プロバイダ オブジェクトのインスタンスを作成
    const googleAuth_provider = new firebase.auth.GoogleAuthProvider();
    // ログインページにリダイレクトしてログインを行う
    await $nuxt.$fireAuth.signInWithRedirect(googleAuth_provider)
    $nuxt.$router.push('/user/')
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
  setLogOut({commit}){
    commit('setLogOut')
  },
  fetchPost({getters, commit}){
    $nuxt.$firestore.collection('lunch').get().then((snapshot) => {

    })
  }
};

export const getters = {
  userName: state => state.loginUser ? state.loginUser.displayName : 'ゲスト',
  userIcon: state => state.loginUser ? state.loginUser.photoUrl : '',
};
