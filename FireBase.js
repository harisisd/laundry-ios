import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2tm0RaeRF-owrrkOx3Mfoi42-yQniAlw",
  authDomain: "laundry-app-51128.firebaseapp.com",
  projectId: "laundry-app-51128",
  storageBucket: "laundry-app-51128.appspot.com",
  messagingSenderId: "64114333902",
  appId: "1:64114333902:web:a073b44e0cd7b2602d589f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};