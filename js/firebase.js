
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDmkLDWvNmCAiYBJ84n0cZA-nac15L8KIg",
  authDomain: "placestore2-c2140.firebaseapp.com",
  projectId: "placestore2-c2140",
  storageBucket: "placestore2-c2140.firebasestorage.app",
  messagingSenderId: "810493090940",
  appId: "1:810493090940:web:b78820a2990772b5e83df9",
  measurementId: "G-8RP66B4LW0"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

