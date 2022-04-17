// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ihCnXAYdthwEDkJjSuFdKOXIoXxY_x4",
  authDomain: "photography-b653d.firebaseapp.com",
  projectId: "photography-b653d",
  storageBucket: "photography-b653d.appspot.com",
  messagingSenderId: "688723687039",
  appId: "1:688723687039:web:9133b8c9865822fa1bb14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;