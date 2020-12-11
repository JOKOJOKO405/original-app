import firebase from "firebase";

export const state = () => ({
  loginUser: null,
  posts: {
    name: '',
    price: '',
    comment: '',
    user: '',
    createdAt: '',
    image: '',
    menu: '',
  }
});

export const mutations = {
  setLogin(state, uid) {
    state.loginUser = uid;
  },
  setLogOut(state) {
    state.loginUser = null;
  },
  showDetail(state, payload) {
    state.posts = {
      id: payload.id,
      name: payload.name,
      price: payload.price,
      comment: payload.comment,
      createdAt: payload.createdAt,
      user: payload.user,
      image: payload.image,
      menu: payload.menu,
    }
  }
};

export const actions = {
  async googleLogin() {
    // Google プロバイダ オブジェクトのインスタンスを作成
    const googleAuth_provider = new firebase.auth.GoogleAuthProvider();
    // ログインページにリダイレクトしてログインを行う
    await $nuxt.$fireAuth.signInWithRedirect(googleAuth_provider);
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
  setLogin({ commit }, uid) {
    commit("setLogin", uid);
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
        const postId = doc.id
        const detail = doc.data()
        const payload = {
          id: postId,
          name: detail.name,
          price: detail.price,
          comment: detail.comment,
          createdAt: detail.createdAt.toDate(),
          user: detail.user,
          image: detail.image,
          menu: detail.menu,
        }
        commit("showDetail", payload);
      });
  }
};

export const getters = {
  userName: state => (state.loginUser ? state.loginUser.displayName : "ゲスト"),
  userIcon: state => (state.loginUser ? state.loginUser.photoUrl : ""),
};
