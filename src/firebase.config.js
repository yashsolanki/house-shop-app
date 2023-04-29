import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZcuJKk53ttUzDb-Ce0fZtfm5vUYkqXss",
  authDomain: "house-shop-app.firebaseapp.com",
  projectId: "house-shop-app",
  storageBucket: "house-shop-app.appspot.com",
  messagingSenderId: "1072909314252",
  appId: "1:1072909314252:web:8a2e5546cc4a0fc708fa69"
};

initializeApp(firebaseConfig);
export const db = getFirestore();