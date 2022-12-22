import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider} from "react-router-dom"
import { router } from './router';
import { CartContextProvider } from './context/CartContext';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZmRl6Kbhed6cn5MwO1ZD7TK_Gt6loi_M",
  authDomain: "lil-shop-90220.firebaseapp.com",
  projectId: "lil-shop-90220",
  storageBucket: "lil-shop-90220.appspot.com",
  messagingSenderId: "467749480611",
  appId: "1:467749480611:web:912bbb327216a5fb597716"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>
);

reportWebVitals();
