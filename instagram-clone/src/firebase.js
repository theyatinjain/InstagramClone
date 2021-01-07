import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_FNTbdwZcuRkih1qBb2W7mRTEKLr1tfM",
  authDomain: "instagramclone-y.firebaseapp.com",
  databaseURL: "https://instagramclone-y-default-rtdb.firebaseio.com",
  projectId: "instagramclone-y",
  storageBucket: "instagramclone-y.appspot.com",
  messagingSenderId: "722677073603",
  appId: "1:722677073603:web:1cc9a7479492bd71344476",
  measurementId: "G-7FPXCDMEB1"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};