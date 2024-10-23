import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import PropTypes from "prop-types";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser=>{
        setUser(currentUser);
        setLoading(false);
    }))
    return ()=>{
        return unsubscribe()
    }
  },[])
  const authInfo = {
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

Context.propTypes={
    children:PropTypes.node.isRequired,
}

export default Context;
