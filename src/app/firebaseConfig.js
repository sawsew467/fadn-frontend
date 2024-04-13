// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQLyovDpztoeajMwGsh94cL7HWTWDMC-I",
  authDomain: "vien-toan-3d.firebaseapp.com",
  databaseURL:
    "https://vien-toan-3d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vien-toan-3d",
  storageBucket: "vien-toan-3d.appspot.com",
  messagingSenderId: "626404670802",
  appId: "1:626404670802:web:c9058637353f075b0fce8b",
  measurementId: "G-4C6GEQCYDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDB = getFirestore(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
