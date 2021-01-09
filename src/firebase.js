import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCybeLP4XguhQ7y_86Y9gViMiibv6Z5nnU",
    authDomain: "cordless-8ee2b.firebaseapp.com",
    projectId: "cordless-8ee2b",
    storageBucket: "cordless-8ee2b.appspot.com",
    messagingSenderId: "668181147466",
    appId: "1:668181147466:web:ef9597286433c8257a9bb3",
    measurementId: "G-7R8JKR04RK"
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;