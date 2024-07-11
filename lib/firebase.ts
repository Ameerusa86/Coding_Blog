// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPN1vBp6yrwRGnasqHRBINSIxXnm0cwYQ",
  authDomain: "coding-blog-622ad.firebaseapp.com",
  projectId: "coding-blog-622ad",
  storageBucket: "coding-blog-622ad.appspot.com",
  messagingSenderId: "546092844491",
  appId: "1:546092844491:web:51456333c3af081575e24e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
