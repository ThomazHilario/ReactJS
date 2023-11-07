// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlVv_vcLpawAAxlzExEPMT26EqnwG-hm8",
  authDomain: "back-end-b0c78.firebaseapp.com",
  projectId: "back-end-b0c78",
  storageBucket: "back-end-b0c78.appspot.com",
  messagingSenderId: "609612965755",
  appId: "1:609612965755:web:7b60be6d25aac50a3b3fde",
  measurementId: "G-KRMNRBB56N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// banco de dados
const database = getFirestore(app);

// autenticacao do usuario
const auth = getAuth(app)

export {database, auth}