import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE,
  authDomain: import.meta.env.VITE_DOMAIN_FIREBASE,
  projectId: import.meta.env.VITE_PROJECTID_FIREBASE,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET_FIREBASE,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID_FIREBASE,
  appId: import.meta.env.VITE_APP_FIREBASE,
};

export const app = initializeApp(firebaseConfig);