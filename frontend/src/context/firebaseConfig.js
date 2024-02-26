import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAa86g0ks4nzmuF1wvlgdJEegoOxvdXfPs",
  authDomain: "fully-login-system.firebaseapp.com",
  projectId: "fully-login-system",
  storageBucket: "fully-login-system.appspot.com",
  messagingSenderId: "433722425671",
  appId: "1:433722425671:web:7d24d92b5c88230901cc62"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Intance for google
const googleProvider = new GoogleAuthProvider();


//Sign Up
export const signupUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

//Sign In
export const signInUserWithEmailandPass = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

//Auth with Google
export const signInWithGoogle =()=> signInWithPopup(auth,googleProvider);

