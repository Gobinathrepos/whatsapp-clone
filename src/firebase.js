import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyASQ__TwvEKFg2LSnO8jkl7qta60uXnPlk",
  authDomain: "whatsapp-clone-72c83.firebaseapp.com",
  projectId: "whatsapp-clone-72c83",
  storageBucket: "whatsapp-clone-72c83.appspot.com",
  messagingSenderId: "390265876767",
  appId: "1:390265876767:web:cb0423482f90a6779d402a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref('images');
const audioStorage = firebase.storage().ref('audios');
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {db, auth, provider, storage, audioStorage, createTimestamp,serverTimestamp}
