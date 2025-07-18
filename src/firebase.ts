
// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3_T7wOmF1d9S3Wb2G6l6z4pwH3EnMh0o",
  authDomain: "ai-blood-buddy.firebaseapp.com",
  projectId: "ai-blood-buddy",
  storageBucket: "ai-blood-buddy.firebasestorage.app",
  messagingSenderId: "263639815809",
  appId: "1:263639815809:web:f8b23125883104fcae9f80"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };