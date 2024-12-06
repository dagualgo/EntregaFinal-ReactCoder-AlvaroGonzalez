// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8gZ1yjinAEKlzPPRhWS6I6YiGscaajsM",
  authDomain: "e-mostrador.firebaseapp.com",
  projectId: "e-mostrador",
  storageBucket: "e-mostrador.firebasestorage.app",
  messagingSenderId: "74337368663",
  appId: "1:74337368663:web:c32e3e75a6c82fdc7a4112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export default app;