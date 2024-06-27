import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaym7LHwnaZnyDje2ZtHfYN7F2RQEoCoQ",
    authDomain: "ycm---your-cv-maker.firebaseapp.com",
    projectId: "ycm---your-cv-maker",
    storageBucket: "ycm---your-cv-maker.appspot.com",
    messagingSenderId: "213804910441",
    appId: "1:213804910441:web:ab5b81271e13ee72619ff8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)
export default app;