import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtzqFtflBV67he8Qw2WFo07v4TIFl-qcg",
  authDomain: "backgroundremove-ab363.firebaseapp.com",
  projectId: "backgroundremove-ab363",
  storageBucket: "backgroundremove-ab363.firebasestorage.app",
  messagingSenderId: "5870154830",
  appId: "1:5870154830:web:7a98a61cc25362af077f1f",
  measurementId: "G-8XJMSZETXR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
