import firebase from 'firebase/app'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrUuOThHgE87gVZISxmTHa0ZW3U7sj1Zk",
  authDomain: "addi-d93ea.firebaseapp.com",
  projectId: "addi-d93ea",
  storageBucket: "addi-d93ea.appspot.com",
  messagingSenderId: "18525852171",
  appId: "1:18525852171:web:1fccc4341c94cb877c6d0e",
  measurementId: "G-TC11JRMQX8"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db}