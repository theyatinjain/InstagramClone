import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6Amev4gzI_4IbsBAReoPxMxrRMNxTRFw",
  authDomain: "instagramclone160.firebaseapp.com",
  projectId: "instagramclone160",
  storageBucket: "instagramclone160.appspot.com",
  messagingSenderId: "524652276006",
  appId: "1:524652276006:web:e475ba2f525cbd8fa039e7",
  measurementId: "G-1S4JHZZKJB"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};