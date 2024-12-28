import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const ContextProvider = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(user);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emailFind, setEmailFind] = useState([]);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateNewProfile = (updated) => {
    return updateProfile(auth.currentUser, updated)
      .then(() => {
        setLoading(true);
        setUser({ ...auth.currentUser, ...updated });
      })
      .catch((error) => {
        alert("Error updating profile:", error);
      });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const provider = new GoogleAuthProvider();
  const googleLoging = () => {
    return signInWithPopup(auth, provider);
  };
  const allDatas = {
    user,
    setUser,
    loading,
    signUp,
    updateNewProfile,
    logOut,
    logIn,
    setDarkMode,
    darkMode,
    googleLoging,
    emailFind,
    setEmailFind,
    setLoading,
  };
  return (
    <div>
      <ContextProvider.Provider value={allDatas}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
}
