import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGxW6g4cZCxIeG8Z5hA5L6mT3DyT3mAB8",
  authDomain: "siberia-sportwear.firebaseapp.com",
  projectId: "siberia-sportwear",
  storageBucket: "siberia-sportwear.appspot.com",
  messagingSenderId: "800849492853",
  appId: "1:800849492853:web:19f2b15bc61a2bbca8b13c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
