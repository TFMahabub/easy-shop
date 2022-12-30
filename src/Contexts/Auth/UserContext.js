import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthProvider = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {

  const authInfo = {
    name: 'mahabub'
  }
  return (
    <AuthProvider.Provider value={authInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default UserContext;