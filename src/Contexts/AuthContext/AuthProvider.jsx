import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

  // Here you can implement your authentication logic, such as state management,
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  //Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword (auth, email, password)
  }
  
  //signInWithEmailAndPassword
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  //logInWithGoogle
  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  //Logout function
  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  //onAuthStateChanged function
  useEffect( () => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [])

  const authContextValue = {
    loading,
    user,
    createUser,
    logIn,
    logInWithGoogle,
    logOut,
  };

  return (
    <AuthContext value={authContextValue}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;