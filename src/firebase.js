// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnRXpZ9XTETz9stjHLGMl-GTnSnQbWL7k",
  authDomain: "portfolio-6ff68.firebaseapp.com",
  projectId: "portfolio-6ff68",
  storageBucket: "portfolio-6ff68.firebasestorage.app",
  messagingSenderId: "390727388053",
  appId: "1:390727388053:web:3e3cf4d1046b6c7281049c",
  measurementId: "G-QWZ688SKDT"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const db = getFirestore(app);
export { db };
