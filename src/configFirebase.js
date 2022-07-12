import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
//import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNWtsbg41_vxjxqHMwbbJ8FMH69I266_Q",
    authDomain: "carrito-react-coder.firebaseapp.com",
    projectId: "carrito-react-coder",
    storageBucket: "carrito-react-coder.appspot.com",
    messagingSenderId: "454323080605",
    appId: "1:454323080605:web:247323267edc1c6e1e3374"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);