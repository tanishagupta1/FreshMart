import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyALwcdYwKJ_qdOuEw1yaCcOIfh2jsVrBHg",
  authDomain: "clone-app-6620e.firebaseapp.com",
  projectId: "clone-app-6620e",
  storageBucket: "clone-app-6620e.appspot.com",
  messagingSenderId: "1072580232197",
  appId: "1:1072580232197:web:dd8dd51936f702e1ad886c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
