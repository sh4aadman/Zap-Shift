import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signinGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const signoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    signinUser,
    signupUser,
    signinGoogle,
    updateUser,
    signoutUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
}

export default AuthProvider;
