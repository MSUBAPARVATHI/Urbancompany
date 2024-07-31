// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL5R_oxVYQqG87Ugrp7tj2qY4hP69MxNs",
  authDomain: "urbancompany-156ee.firebaseapp.com",
  projectId: "urbancompany-156ee",
  storageBucket: "urbancompany-156ee.appspot.com",
  messagingSenderId: "442244117869",
  appId: "1:442244117869:web:5f041d8e2443e0eb5b9664"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export {auth};