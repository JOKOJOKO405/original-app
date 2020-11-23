export default async function ({ redirect, app }) {
  if (await app.$auth()) {
    // ログイン中だったらuserTOPページに遷移する
    redirect('/user/')
  }
}
