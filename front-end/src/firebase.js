import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAkvbsroRUUqCEd5Pe1XDY6MYwLE1b4T4I",
  authDomain: "tesh-ce700.firebaseapp.com",
  projectId: "tesh-ce700",
  storageBucket: "tesh-ce700.appspot.com",
  messagingSenderId: "279866693058",
  appId: "1:279866693058:web:3e9dc6f874dc7cf161725b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);