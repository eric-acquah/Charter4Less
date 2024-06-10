import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAefy2MytdWhST4VwUM1oN0Up2dqBWBfHw",
  authDomain: "charter4less-app.firebaseapp.com",
  projectId: "charter4less-app",
  storageBucket: "charter4less-app.appspot.com",
  messagingSenderId: "581711788600",
  appId: "1:581711788600:web:57b19859f8fb7f648dc4cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);