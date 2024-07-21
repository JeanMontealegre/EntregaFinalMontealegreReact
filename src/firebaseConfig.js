import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQIiN_bTnOuZMUy2sD0pvY3vD1sRn8VMY",
  authDomain: "entregafinalmontealegrereact.firebaseapp.com",
  projectId: "entregafinalmontealegrereact",
  storageBucket: "entregafinalmontealegrereact.appspot.com",
  messagingSenderId: "185406093377",
  appId: "1:185406093377:web:ebddb26ce574f2892e6ec0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



