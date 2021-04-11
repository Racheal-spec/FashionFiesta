import firebase from 'firebase';

//User authentication with firebase

const firebaseConfig = {
    apiKey: "AIzaSyDLUJTUeSS90Dr_txTcRNLtb0DNZDLj6Qk",
    authDomain: "fashionfiesta-a4172.firebaseapp.com",
    projectId: "fashionfiesta-a4172",
    storageBucket: "fashionfiesta-a4172.appspot.com",
    messagingSenderId: "302456211196",
    appId: "1:302456211196:web:258eb82788a7662638f979",
    measurementId: "G-31H4LBLQRM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};