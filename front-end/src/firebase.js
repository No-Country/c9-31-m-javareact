// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkvbsroRUUqCEd5Pe1XDY6MYwLE1b4T4I",
  authDomain: "tesh-ce700.firebaseapp.com",
  projectId: "tesh-ce700",
  storageBucket: "tesh-ce700.appspot.com",
  messagingSenderId: "279866693058",
  appId: "1:279866693058:web:3e9dc6f874dc7cf161725b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()