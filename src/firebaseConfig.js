// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzOOY_XSZBHku8EkPSrSbgZfmbAScIxsg",
  authDomain: "tbro-pdobes-duo.firebaseapp.com",
  projectId: "tbro-pdobes-duo",
  storageBucket: "tbro-pdobes-duo.appspot.com",
  messagingSenderId: "97216830764",
  appId: "1:97216830764:web:f99d9d9282222eea7f2089",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
