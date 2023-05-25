// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDtBhYZnb8OoLHBnBe2P6htgPqRHv7L4Dc",
  authDomain: "mis-proyectos-iniciales.firebaseapp.com",
  projectId: "mis-proyectos-iniciales",
  storageBucket: "mis-proyectos-iniciales.appspot.com",
  messagingSenderId: "619286520081",
  appId: "1:619286520081:web:62c5e85b706bdef299acb0",
  measurementId: "G-Z4BZZZE22V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
