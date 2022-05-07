// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeoEpbYs7RNYtiTaUq3OAkhR1kHFGhbTw",
    authDomain: "inventory-management-237cb.firebaseapp.com",
    projectId: "inventory-management-237cb",
    storageBucket: "inventory-management-237cb.appspot.com",
    messagingSenderId: "253337630796",
    appId: "1:253337630796:web:361d49a7ded0fa2f1c9ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;