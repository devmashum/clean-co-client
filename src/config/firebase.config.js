// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuvJIO_M0qlskxLZhpBQ0k78tZsLC-sfs",
    authDomain: "clean-co-adabe.firebaseapp.com",
    projectId: "clean-co-adabe",
    storageBucket: "clean-co-adabe.appspot.com",
    messagingSenderId: "508287340099",
    appId: "1:508287340099:web:9ba2a6b0863e0057804ef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);