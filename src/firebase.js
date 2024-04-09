// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWsyGJlZ-HwWSjCxBkF7ZxTk9v2yws9W0",
    authDomain: "cs492-49258.firebaseapp.com",
    projectId: "cs492-49258",
    storageBucket: "cs492-49258.appspot.com",
    messagingSenderId: "944381166484",
    appId: "1:944381166484:web:4437a20f4abca35e444581",
    measurementId: "G-P5Y67VBXZ7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;