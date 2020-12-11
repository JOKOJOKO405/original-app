export default async function ({ redirect, app, store }) {
  await app.$fireAuth.onAuthStateChanged((user) => {
    // const { uid, displayName, email } = user;
    if(user){
      const uid = user.uid
      store.dispatch('user/setLogin', uid);
      redirect(`/user/${uid}`)
    }else{
      redirect('login')
      store.dispatch('user/setLogout')
    }
  })
}
