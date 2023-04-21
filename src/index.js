import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyC_erf4_3vIta0_mVZy-2szs5Uvf05OHi4",
  authDomain: "elvergel-ecommerce.firebaseapp.com",
  projectId: "elvergel-ecommerce",
  storageBucket: "elvergel-ecommerce.appspot.com",
  messagingSenderId: "894228015025",
  appId: "1:894228015025:web:8f6c89239d974e45817f90"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
