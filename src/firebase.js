
// Import necessary Firebase modules from the modular SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv4BRWLaH-CtwB7fqWNQFtbu1Ir2WD7zU",
    authDomain: "wpa-anwendung.firebaseapp.com",
    projectId: "wpa-anwendung",
    storageBucket: "wpa-anwendung.firebasestorage.app",
    messagingSenderId: "64469726337",
    appId: "1:64469726337:web:f8ea4183429dabafc44980"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firestore and Storage
export { db, storage };
