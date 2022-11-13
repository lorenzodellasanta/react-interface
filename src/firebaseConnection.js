import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJ9qeZrwCxyLZAZid3f2xVcAGD2TDno0k",
    authDomain: "cadastro-6ab13.firebaseapp.com",
    projectId: "cadastro-6ab13",
    storageBucket: "cadastro-6ab13.appspot.com",
    messagingSenderId: "944516530963",
    appId: "1:944516530963:web:c80452d273061f96ec90e6",
    measurementId: "G-5PTY0CFQWZ"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };