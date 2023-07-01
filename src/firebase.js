// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAMW4aDO2wKBy2NrD-5tTBeoO8JwsU_YtY',
  authDomain: 'expense-tracker-4e741.firebaseapp.com',
  projectId: 'expense-tracker-4e741',
  storageBucket: 'expense-tracker-4e741.appspot.com',
  messagingSenderId: '158691305673',
  appId: '1:158691305673:web:74e338792460a744edc518',
  measurementId: 'G-PHWDSNNH4S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
