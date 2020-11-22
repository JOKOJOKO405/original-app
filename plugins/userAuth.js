export default ({ app, redirect }, inject) => {
  inject('user', async function(){
    const auth = await app.$auth();
    // 未ログインでログイン画面へ
    if($auth){
      redirect('/login')
    }
    const usersSnapShot = await app.$firestore
                          .collection('users')
                          .doc(auth.id)
                          .get()

    // 登録しているユーザー情報を取得
    const user = usersSnapShot.data()
    if(!user) return null

    return {
      uid: auth.uid,
      ...userAuth,
    }
  })
}