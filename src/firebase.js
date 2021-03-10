import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC32gm96mWEvHuDoYByDHwb0dd6CADMUfs",
    authDomain: "clone-d2780.firebaseapp.com",
    projectId: "clone-d2780",
    storageBucket: "clone-d2780.appspot.com",
    messagingSenderId: "279840437863",
    appId: "1:279840437863:web:c42cec106c96ab01f846c2",
    measurementId: "G-L1BN2G59XV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth()

export { db, auth }