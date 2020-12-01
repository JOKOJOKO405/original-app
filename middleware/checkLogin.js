// export default function ({ redirect, app }) {
//   app.$fireAuth.onAuthStateChanged((user) => {
//     const { uid, displayName, email } = user;
//     if(user){
//       $nuxt.$store.dispatch('user/setLogin', {uid, displayName, email});
//       redirect(`/user/${uid}`)
//     }
//   })
// }
