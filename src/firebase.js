import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.VITE_AUTH_DOMAIN,
  projectId: import.meta.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.VITE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Export auth instance
export const auth = getAuth(app);
