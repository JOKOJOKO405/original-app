import firebase from "firebase"


export const state = () => {
  lunch: []
}

export const mutations = {}


export const actions = {
  leadPost(){
    return $nuxt.$firestore
      .collection('lunch')
      .orderBy('createdAt', 'desc')
      .onSnapshot((lunchSnapShot) => {
        lunchSnapShot.docChanges().forEach((snapshot) => {
          const lunch = {
            id: snapshot.id,
            ...snapshot.doc().data()
          }
        })
      })
  }
}