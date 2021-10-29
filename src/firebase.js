import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFQYLLXqMBD4sy4OfPJMHLrbyfAdsPcsc",
  authDomain: "tinder-clone-50780.firebaseapp.com",
  projectId: "tinder-clone-50780",
  storageBucket: "tinder-clone-50780.appspot.com",
  messagingSenderId: "468236816656",
  appId: "1:468236816656:web:4088af284315fc072cd595",
  measurementId: "G-47TT0M0BCJ",
});

const db = firebaseApp.firestore();
// const auth =  firebase.auth();
// const storage = firebase.storage();

export default db;
