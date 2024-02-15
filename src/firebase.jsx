// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7u_kGzifKseHnK-B2e1OuU75x8IP19NE",
  authDomain: "react-notes-fa8c0.firebaseapp.com",
  projectId: "react-notes-fa8c0",
  storageBucket: "react-notes-fa8c0.appspot.com",
  messagingSenderId: "786677872254",
  appId: "1:786677872254:web:37ab0da37635984827ca2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")