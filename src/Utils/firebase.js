// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMZzt36P8o_0tUqhSfypFdlEqQcntUh4o",
  authDomain: "netflixgpt-d907f.firebaseapp.com",
  projectId: "netflixgpt-d907f",
  storageBucket: "netflixgpt-d907f.appspot.com",
  messagingSenderId: "459992675100",
  appId: "1:459992675100:web:d9d4b0a36d77edb77100d9",
  measurementId: "G-LY0XCRXHQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();