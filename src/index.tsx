import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GoogleAuthProvider } from 'firebase/auth';
  import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDjH-6KZ8j79ktwHK-5bKx7-6xuZVgK-OY",
  authDomain: "blackmarketmueseum.firebaseapp.com",
  projectId: "blackmarketmueseum",
  storageBucket: "blackmarketmueseum.appspot.com",
  messagingSenderId: "937386664696",
  appId: "1:937386664696:web:dd59564b7b4ff5cb00910d",
  measurementId: "G-1Z6PEY8GFW"
};

export const provider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig);
// ​​const auth = getAuth(app);
export const db = getFirestore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
