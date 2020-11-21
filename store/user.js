import firebase from '~/plugins/firebase'

export const state = () => ({
  users: {}
});

export const mutations = {
  createUser(state, payload) {
    state.users = {
      name: payload.name,
      email: payload.email,
      comment: payload.comment,
    }
  },
};

export const actions = {
  googleLogin() {
    // Google プロバイダ オブジェクトのインスタンスを作成
    const googleAuth_provider = new firebase.auth.GoogleAuthProvider();
    // ログインページにリダイレクトしてログインを行う
    firebase.auth().signInWithRedirect(googleAuth_provider);
  },
  customLogin() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  },
  createUser(context, payload){
    context.commit('createUser', payload)
  }
};

export const getters = {};
