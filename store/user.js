import firebase from '~/plugins/firebase'

export const state = () => ({
  users: []
});

export const mutations = {};

export const actions = {
  googleLogin() {
    // Google プロバイダ オブジェクトのインスタンスを作成
    const googleAuth_provider = new firebase.auth.GoogleAuthProvider();
    // ログインページにリダイレクトしてログインを行う
    firebase.auth().signInWithRedirect(googleAuth_provider);
  }
};

export const getters = {};
