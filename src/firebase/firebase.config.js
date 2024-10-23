import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY_FIREBASE,
  authDomain: import.meta.env.VITE_AUTHDOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_PROJECTID_FIREBASE,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID_FIREBASE,
  appId: import.meta.env.VITE_APPID_FIREBASE,
};

export const app = initializeApp(firebaseConfig);