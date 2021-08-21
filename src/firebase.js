import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUEmDOzvxkUfhKZ5IwhKO3HHw20_8hqho",
  authDomain: "dosunoapp.firebaseapp.com",
  databaseURL: "https://dosunoapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dosunoapp",
  storageBucket: "dosunoapp.appspot.com",
  messagingSenderId: "531380983151",
  appId: "1:531380983151:web:c2de51b721c121f3adc49a",
  measurementId: "G-GPMK4S1D6P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
