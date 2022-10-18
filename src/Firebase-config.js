import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCiijot3LTnTRZL6qzEu_1PxMPiYWK7tA",
  authDomain: "csg-tabulation-system.firebaseapp.com",
  databaseURL: "https://csg-tabulation-system-default-rtdb.firebaseio.com",
  projectId: "csg-tabulation-system",
  storageBucket: "csg-tabulation-system.appspot.com",
  messagingSenderId: "1004844601855",
  appId: "1:1004844601855:web:40bb4247f76bda0b37d7ca",
  measurementId: "G-PCM71JSVY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
