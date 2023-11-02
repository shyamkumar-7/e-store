// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCLZc1WlKZGTIBuZdk91agkidD-8rD95bk",
  authDomain: "myfirstapp-42412.firebaseapp.com",
  projectId: "myfirstapp-42412",
  storageBucket: "myfirstapp-42412.appspot.com",
  messagingSenderId: "1047860042560",
  appId: "1:1047860042560:web:df52cc4a70764305f4b8a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth=getAuth(app);
export {auth,fireDB}