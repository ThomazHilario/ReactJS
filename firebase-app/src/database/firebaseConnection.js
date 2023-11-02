/*
    -> Conectando o banco de dados com o firebase.
    - nao e necessario decorar, basta copiar e colar o SDK do firebase no projeto e mudar algumas config.
    - mudar o import do analytics por firestore.
    - E mudar a instancia para getFirestore(app), passando app.
*/

// Importando funções necessarias do SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configurações do firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlVv_vcLpawAAxlzExEPMT26EqnwG-hm8",
  authDomain: "back-end-b0c78.firebaseapp.com",
  projectId: "back-end-b0c78",
  storageBucket: "back-end-b0c78.appspot.com",
  messagingSenderId: "609612965755",
  appId: "1:609612965755:web:7b60be6d25aac50a3b3fde",
  measurementId: "G-KRMNRBB56N"
};

// Inicializando fireBase
const app = initializeApp(firebaseConfig);

// instanciando Banco de dados
const dataBase = getFirestore(app);

export default dataBase