import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [ user, setUser ] = useState({});
    const [ selectedMovie, setSelectedMovie ] = useState({});
    
    function signUp( email, password ) {
      createUserWithEmailAndPassword( auth, email, password )
      setDoc(doc(db, 'users', email), {
        savedMovies: []
      })
    }
    
    function logIn( email, password ) {
      return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
      return signOut( auth )
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged( auth, ( currentUser ) => {
        setUser( currentUser )
      });
      return () => {
        unsubscribe();
      }
    })

    const handleSelectedMovie = ( movieSelec ) => {
      setSelectedMovie( movieSelec )
    }
  

    return (
      <AuthContext.Provider
        value={{
          signUp,
          logIn,
          logOut,
          user,
          handleSelectedMovie,
          selectedMovie
        }}>
          { children }
      </AuthContext.Provider>
    )       
}

export function UserAuth() {
    return useContext( AuthContext )
}