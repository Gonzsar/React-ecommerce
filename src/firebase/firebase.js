import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFN8EGTMN9OvswM0n-Ssc-4W0GFfwPGug",
    authDomain: "frio-polar.firebaseapp.com",
    projectId: "frio-polar",
    storageBucket: "frio-polar.appspot.com",
    messagingSenderId: "231923623268",
    appId: "1:231923623268:web:8147ec9ed612844f8c0671",
    measurementId: "G-92KMP661RD"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

//Inizializa base de datos
export const db = getFirestore(app);
