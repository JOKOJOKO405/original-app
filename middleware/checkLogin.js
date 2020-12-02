export default function ({ redirect, app, store }) {
  app.$fireAuth.onAuthStateChanged((user) => {
    // const { uid, displayName, email } = user;
    const uid = user.uid
    if(user){
      store.dispatch('user/setLogin', user);
      redirect(`/user/${uid}`)
    }else{
      redirect('login')
      store.dispatch('user/setLogout')
    }
  })
}
