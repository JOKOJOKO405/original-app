import firebase from "firebase";

export const state = () => ({
  loginUser: null,
  posts: []
});

export const mutations = {
  setLogin(state, user) {
    state.loginUser = user.uid;
  },
  setLogOut(state) {
    state.loginUser = null;
  },
  showDetail(state, payload) {
    state.posts.push({
      name: payload.name,
      price: payload.price,
      comment: payload.comment,
      createdAt: payload.createdAt,
      user: payload.user,
      image: payload.image,
    })
  }
};

export const actions = {
  async googleLogin() {
    // Google プロバイダ オブジェクトのインスタンスを作成
    const googleAuth_provider = new firebase.auth.GoogleAuthProvider();
    // ログインページにリダイレクトしてログインを行う
    await $nuxt.$fireAuth.signInWithRedirect(googleAuth_provider);
    $nuxt.$router.push("/user/");
  },
  async setLogOut() {
    const msg = confirm("ログアウトしますか？");
    if (msg) {
      // $nuxt.$fireAuth.signOut().then(() => {
      //   $nuxt.$router.push('/')
      // }).catch(function(error) {
      //   console.log(error);
      // });
      try {
        await $nuxt.$fireAuth.signOut();
        $nuxt.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  },
  setLogin({ commit }, user) {
    commit("setLogin", user);
  },
  setLogOut({ commit }) {
    commit("setLogOut");
  },
  async showDetail({ commit }, id) {
    $nuxt.$firestore
      .collection("lunch")
      .doc(id)
      .get()
      .then(doc => {
        const data = doc.data();
        commit("showDetail", data);
      });
  }
};

export const getters = {
  userName: state => (state.loginUser ? state.loginUser.displayName : "ゲスト"),
  userIcon: state => (state.loginUser ? state.loginUser.photoUrl : ""),
  details: state => {
    return state.posts;
  }
};
