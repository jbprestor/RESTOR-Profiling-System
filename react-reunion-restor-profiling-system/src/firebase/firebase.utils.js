// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIolgKJXk72mNPERLLWgm7uMF6PwdhKT0",
  authDomain: "restor-profiling-db.firebaseapp.com",
  projectId: "restor-profiling-db",
  storageBucket: "restor-profiling-db.appspot.com",
  messagingSenderId: "280138704298",
  appId: "1:280138704298:web:f43f2e3e5be87ac1e2f7d3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);