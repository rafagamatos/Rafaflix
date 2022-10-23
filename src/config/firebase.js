import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPJYLLXh_1XLzjuatzaBC19vZRfqtxuoQ",
  authDomain: "movies-5b888.firebaseapp.com",
  projectId: "movies-5b888",
  storageBucket: "movies-5b888.appspot.com",
  messagingSenderId: "868363202389",
  appId: "1:868363202389:web:6b59d1ab5b8247f14709dc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database;
