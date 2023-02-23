// Import the functions you need from the SDKs you need
import {getStorage} from "firebase/storage";
import {getAuth} from  "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3NjmFhTogosIn4FfWNn_pguYS3RAMOg0",
  authDomain: "react-chatapp-24c6b.firebaseapp.com",
  projectId: "react-chatapp-24c6b",
  storageBucket: "react-chatapp-24c6b.appspot.com",
  messagingSenderId: "100290731315",
  appId: "1:100290731315:web:e2dd484be0c622f7efb246",
  measurementId: "G-L7VGTPHLDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
export {auth,db,storage}