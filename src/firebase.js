// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz8WsVcuZVJ-iX9gZ3-rDr-158DWSt9OM",
  authDomain: "finacialtracker.firebaseapp.com",
  projectId: "finacialtracker",
  storageBucket: "finacialtracker.appspot.com",
  messagingSenderId: "634430228493",
  appId: "1:634430228493:web:07e279a67fb9f234bfad44",
  measurementId: "G-7D5HCNS4Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };