export default async function ({ redirect, app }) {
  if (await app.$userAuth()) {
    // ログイン中だったらTOPページに遷移する
    redirect('/user/')
  }
}
