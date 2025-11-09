import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "lmsmern-f78bf.firebaseapp.com",
  projectId: "lmsmern-f78bf",
  storageBucket: "lmsmern-f78bf.firebasestorage.app",
  messagingSenderId: "778303136749",
  appId: "1:778303136749:web:fb793ed97898d500027de4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}