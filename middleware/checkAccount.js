export default async function ({ redirect, app }) {
  if (await app.$userAuth()) {
    // アカウント作成してあればユーザーページへ
    redirect(`user/${user.uid}`)
  }
}
