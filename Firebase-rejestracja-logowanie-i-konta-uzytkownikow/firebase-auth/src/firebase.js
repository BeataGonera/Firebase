import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKd-H0Fhkd-HrtyPeKpPoT_Ev2TVqtpwM",
  authDomain: "project-50221.firebaseapp.com",
  projectId: "project-50221",
  storageBucket: "project-50221.appspot.com",
  messagingSenderId: "107987702279",
  appId: "1:107987702279:web:f70676eb274ce97c4450a2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);