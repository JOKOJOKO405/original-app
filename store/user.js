import firebase from "firebase"
import firebaseInject from '~/plugins/firebase'
// import firebase from "firebase";

export const state = () => ({
  user: {}
});

export const mutations = {
  setLogin(state, auth) {
    state.user = {
      uid: auth.uid,
      name: auth.displayName,
      email: auth.email,
      isLogin: true,
    }
  },
  setLogOut(state) {
    state.user.isLogin = false
  }
};

export const actions = {
  googleLogin() {
    // Google プロバイダ オブジェクトのインスタンスを作成
    const googleAuth_provider = new firebase.auth.GoogleAuthProvider();
    // ログインページにリダイレクトしてログインを行う
    $nuxt.$fireAuth.signInWithRedirect(googleAuth_provider);
  },
  setLogOut(){
    const msg = confirm('ログアウトしますか？')
    if(msg) {
      $nuxt.$fireAuth.signOut().then(() => {
        $nuxt.$router.redirect('/')
      }).catch(function(error) {
        alert('ログインできません')
      });
    }
  },
  setLogin(context, auth){
    let user = $nuxt.$fireAuth.currentUser
    console.log(user);
    context.commit('setLogin', user)
  },
};

export const getters = {
};
