// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX4yPX4ixQ9FK48KXd4B8dfXNdLMrA8Sk",
  authDomain: "disease-prognosis.firebaseapp.com",
  databaseURL: "https://disease-prognosis-default-rtdb.firebaseio.com/",
  projectId: "disease-prognosis",
  storageBucket: "disease-prognosis.appspot.com",
  messagingSenderId: "10654408147",
  appId: "1:10654408147:web:d7ba9fa744ee580914e326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getDatabase(app);
export { app, auth, db };
