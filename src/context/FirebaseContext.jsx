import React, { createContext, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const firebaseConfig = {
    // Configuración del proyecto Firebase
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const firestore = firebase.firestore();

  return (
    <FirebaseContext.Provider value={{ firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
};