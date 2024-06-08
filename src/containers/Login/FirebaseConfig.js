// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNWX49H9LA_VnoGeLq7RHSLNqHJglQv-k",
  authDomain: "web37-reactjs.firebaseapp.com",
  projectId: "web37-reactjs",
  storageBucket: "web37-reactjs.appspot.com",
  messagingSenderId: "877431482379",
  appId: "1:877431482379:web:49fd3993c7dbf8243dff0e",
  measurementId: "G-M6T51F9DRL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { auth, database };
