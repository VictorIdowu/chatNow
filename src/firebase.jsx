import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGYbGXBHQhDpLdcJGtz-sT1_G973Rbbcg",
  authDomain: "chat-now-4f779.firebaseapp.com",
  projectId: "chat-now-4f779",
  storageBucket: "chat-now-4f779.appspot.com",
  messagingSenderId: "761614971901",
  appId: "1:761614971901:web:057dd6c72ac507dd4cdf94",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
