import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  databaseURL:
    "https://avenue-immo-default-rtdb.europe-west1.firebasedatabase.app",
  authDomain: "avenue-immo.firebaseapp.com",
  projectId: "avenue-immo",
  storageBucket: "avenue-immo.appspot.com",
  messagingSenderId: "1095138669993",
  appId: "1:1095138669993:web:124e0ff01a333b191d80b8",
};

// Vérifier si Firebase a déjà été initialisé
let app: FirebaseApp; // Typage explicite de `app`
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, auth, database, storage };
