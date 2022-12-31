import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthProvider = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  //Sign Up user with email & password-
  const signUp = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //logIn with email & password-
  const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logOut with email & password-
  const logOut = () =>{
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>unSubscribe()
  },[])

  const authInfo = {
    user,
    setLoading,
    signUp,
    logIn,
    logOut
  }
  return (
    <AuthProvider.Provider value={authInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default UserContext;