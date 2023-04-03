import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBNTQH9dxriUIkWnvsMvTWanUwQ6lWoekQ",
  authDomain: "apple-reminders-7e307.firebaseapp.com",
  projectId: "apple-reminders-7e307",
  storageBucket: "apple-reminders-7e307.appspot.com",
  messagingSenderId: "997306111567",
  appId: "1:997306111567:web:bcadd4496e4ebb7b25bc3a",
  measurementId: "G-TBZMHHQ2G0",
});

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
