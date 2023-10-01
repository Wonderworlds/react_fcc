// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp0nbNYLtMdyUw-YKPqAlSF9_DkA9yAmA",
  authDomain: "react-notes-ff740.firebaseapp.com",
  projectId: "react-notes-ff740",
  storageBucket: "react-notes-ff740.appspot.com",
  messagingSenderId: "257962887971",
  appId: "1:257962887971:web:cb203772726bf3b9f61a96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")