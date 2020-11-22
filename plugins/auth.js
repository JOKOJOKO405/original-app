export default ({ app }, inject) => {
  inject('auth', () => {
    return new Promise((resolve) => {
      app.$fireAuth.onAuthStateChanged((auth) => {
        resolve(auth || null)
        if(auth){
          $nuxt.$store.dispatch('user/setLogin', auth)
          // TODO ユーザー情報取得
    //       var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
        }
      })
    })
  })
}
