
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from firebase/auth;



const firebaseConfig = {
  apiKey: "AIzaSyAl_tqbzL542RAU20TA2n9UdeooeTyJJw4",
  authDomain: "react-netflix-clone-d5165.firebaseapp.com",
  projectId: "react-netflix-clone-d5165",
  storageBucket: "react-netflix-clone-d5165.appspot.com",
  messagingSenderId: "216222450794",
  appId: "1:216222450794:web:7485b0f71aec8f29a53613",
  measurementId: "G-5FVDM49GED"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth=getAuth(app);