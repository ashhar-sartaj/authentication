import { createContext, useContext, useEffect, useState} from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from "./firebaseConfig"
import React from 'react'

const UserAuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState("")
    //signup
    const Signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //login
    const Login = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
    };
    //SignIn with Google
    const googleSignIn = () => {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider )
    };
    //LogOut
    const logOut = () => {
      return signOut();
    };
    //making a function in useEffect to trigger on auth changed
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currUser) => {
          setUser(currUser)
      });
      return () => {
        unsubscribe();
      };
    }, []);
  return (
    <div>
      <UserAuthContext.Provider value = {{user, Signup, Login, googleSignIn, logOut}}>
            {children}
      </UserAuthContext.Provider>
    </div>
  )
}

export function UserAuth() {
  return useContext(UserAuthContext)
}
