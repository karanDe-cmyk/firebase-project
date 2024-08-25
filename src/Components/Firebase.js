import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1q7Mv2rgBJdWIZNVydrpaZWoMqzt2oBg",
  authDomain: "final-project-a3f36.firebaseapp.com",
  projectId: "final-project-a3f36",
  storageBucket: "final-project-a3f36.appspot.com",
  messagingSenderId: "220565206729",
  appId: "1:220565206729:web:47dcde1eaf19063d8d7f18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, db};