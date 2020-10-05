import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDcb4zaGjkX0qTscQzBuKd9-Vq0wKQOtj8",
    authDomain: "tinder-clone-cb5db.firebaseapp.com",
    databaseURL: "https://tinder-clone-cb5db.firebaseio.com",
    projectId: "tinder-clone-cb5db",
    storageBucket: "tinder-clone-cb5db.appspot.com",
    messagingSenderId: "920344069609",
    appId: "1:920344069609:web:19a3dcc8e4834a78d2f778",
    measurementId: "G-JD4JS3QKSN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const database = firebaseApp.firestore()

  export default database