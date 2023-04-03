
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBNTQH9dxriUIkWnvsMvTWanUwQ6lWoekQ",
  authDomain: "apple-reminders-7e307.firebaseapp.com",
  projectId: "apple-reminders-7e307",
  storageBucket: "apple-reminders-7e307.appspot.com",
  messagingSenderId: "997306111567",
  appId: "1:997306111567:web:bcadd4496e4ebb7b25bc3a",
  measurementId: "G-TBZMHHQ2G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app)

