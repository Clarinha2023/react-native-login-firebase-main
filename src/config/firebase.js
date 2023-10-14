
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyBxQml6dZz-ojU-4UcoiquVFaIz0WV0Aq8",
  authDomain: "anaclaraifal513.firebaseapp.com",
  projectId: "anaclaraifal513",
  storageBucket: "anaclaraifal513.appspot.com",
  messagingSenderId: "1008153778623",
  appId: "1:1008153778623:web:bc88725cf3ef47fa50e90a"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app);

export { app, auth, db }