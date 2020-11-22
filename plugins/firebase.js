import firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_PROJECT_apiKey,
  authDomain: process.env.FIREBASE_PROJECT_authDomain,
  databaseURL: process.env.FIREBASE_PROJECT_databaseURL,
  projectId: process.env.FIREBASE_PROJECT_projectId,
  storageBucket: process.env.FIREBASE_PROJECT_storageBucket,
  messagingSenderId: process.env.FIREBASE_PROJECT_messagingSenderId,
  appId: process.env.FIREBASE_PROJECT_appId
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default ({ app }, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
  inject('fireAuth', firebase.auth())
  inject('fireStorage', firebase.storage())
}