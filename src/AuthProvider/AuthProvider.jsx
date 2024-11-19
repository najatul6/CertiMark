import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import PropTypes from "prop-types";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  //   Sign Up with Email & Password
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

  // Sign In with Email & Password
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
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
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userData = { email: currentUser.email };
          const res = await axiosPublic.post("/jwt", userData);
          if (res?.data?.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        } catch (err) {
          toast.error("Token fetch failed:", err.message);
          logOut(); 
        }
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    createUser,
    userLogIn,
    logOut,
    resetPassword,
    updateUserProfile,
    userDelete,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
