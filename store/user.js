import firebase from "firebase"
import firebaseInject from '~/plugins/firebase'
// import firebase from "firebase";

export const state = () => ({
  uid: '',
  name: '',
  email: '',
  isLogin: null
});

export const mutations = {
  setLogin(state, auth) {
    state.uid = auth.uid
    state.isLogin = true
  },
  setLogOut(state) {
    state.isLogin = null
  }
};

export const actions = {
  googleLogin() {
    // Google プロバイダ オブジェクトのインスタンスを作成
    const googleAuth_provider = new firebase.auth.GoogleAuthProvider();
    // ログインページにリダイレクトしてログインを行う
    $nuxt.$fireAuth.signInWithRedirect(googleAuth_provider);
    
  },
  customLogin(email, password) {
    $nuxt.$fireAuth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  },
  setLogOut(){
    const msg = confirm('ログアウトしますか？')
    if(msg) {
      firebase.auth().signOut().then(() => {
        $nuxt.$router.push('/')
      }).catch(function(error) {
        alert('ログインできません')
      });
    }
  },
  setLogin(context, auth){
    context.commit('setLogin', auth)
  }
};

export const getters = {
};
