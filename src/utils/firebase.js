
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "hnnnn-f0219.firebaseapp.com",
  projectId: "hnnnn-f0219",
  storageBucket: "hnnnn-f0219.firebasestorage.app",
  messagingSenderId: "129617802319",
  appId: "1:129617802319:web:995312e3ba1a68685fe63a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}