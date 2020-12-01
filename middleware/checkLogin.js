export default function ({ redirect, app }) {
  app.$fireAuth.onAuthStateChanged((user) => {
    // const { uid, displayName, email } = user;
    const uid = user.uid
    // console.log(user.uid);
    if(user){
      
      $nuxt.$store.dispatch('user/setLogin', user);
      redirect(`/user/${uid}`)
    }
  })
}
