// Firebase core
import { initializeApp } from "firebase/app";

// Auth
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Analytics (опционально)
import { getAnalytics } from "firebase/analytics";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA5J3-AYZe9sNo1zCAWnR-G-_atUcoLA3w",
  authDomain: "tests-cc867.firebaseapp.com",
  projectId: "tests-cc867",
  storageBucket: "tests-cc867.firebasestorage.app",
  messagingSenderId: "506367446979",
  appId: "1:506367446979:web:12d6adaca6abbae37f3776",
  measurementId: "G-R0F5TRFL92"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация сервисов
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Analytics (можно удалить, если не нужен)
export const analytics = getAnalytics(app);