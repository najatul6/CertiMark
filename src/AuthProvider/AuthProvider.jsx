import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Sign In with Email & Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Reset Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  //   Update User Profile
  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    const updateData = { displayName: name };
    if (photoURL) {
      updateData.photoURL = photoURL;
    }
    return updateProfile(auth.currentUser, updateData);
  };

  // Delete User
  const userDelete = () => {
    setLoading(true);
    return deleteUser(auth.currentUser);
  };

  // Sign Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Sign In with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe()
    }
    
  }, []);
  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    createUser,
    logOut,
    resetPassword,
    updateUserProfile,
    userDelete,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
