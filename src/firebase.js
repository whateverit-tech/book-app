import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0MCOu9sI9px8A8vW3k2CiVNUmkusFkHg",
  authDomain: "todo-31a98.firebaseapp.com",
  projectId: "todo-31a98",
  storageBucket: "todo-31a98.appspot.com",
  messagingSenderId: "195186274912",
  appId: "1:195186274912:web:9008484b245f38733b4905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }