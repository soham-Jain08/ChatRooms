// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi1zqmdu6RmXqoeWHYDiYuR7z5RkjdVxk",
  authDomain: "chat-app-project-4d331.firebaseapp.com",
  projectId: "chat-app-project-4d331",
  storageBucket: "chat-app-project-4d331.firebasestorage.app",
  messagingSenderId: "518564803213",
  appId: "1:518564803213:web:d5e90120daba042c8ce8c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
// Allow different tabs/windows to use different accounts
setPersistence(auth, browserSessionPersistence).catch(() => {
  // ignore persistence errors; fallback to default
});
export const db = getFirestore(app);
