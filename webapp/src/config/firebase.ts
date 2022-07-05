import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj1JfIK-Dxu8OMhy5gqITDazI1c6N-rcQ",
  authDomain: "react-chakra-demo.firebaseapp.com",
  projectId: "react-chakra-demo",
  storageBucket: "react-chakra-demo.appspot.com",
  messagingSenderId: "388494204331",
  appId: "1:388494204331:web:afef32d3b6cc2bff0a06ee",
  measurementId: "G-N4621KRHKM",
};

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() };
