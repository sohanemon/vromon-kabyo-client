// @ts-nocheck
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { app } from "../firebase/app";

const auth = getAuth(app);
const User = createContext<any>({});
export const useUser = () => useContext(User);
const UserProvider: FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState({} || null);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("🚀 > onAuthStateChanged > user", user);
      } else {
        console.log("No previous user found...");
      }
      setIsUserLoaded(true);
    });

    return () => {};
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).catch((error) => {
      console.log("🚀 > googleSignIn > error", error);
    });
  };
  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider).catch((error) => {
      console.log("🚀 > googleSignIn > error", error);
    });
  };
  const emailSignUp = async (data: any) => {
    return createUserWithEmailAndPassword(auth, data.email, data.password).then(
      () => {
        updateProfile(auth.currentUser, {
          displayName: data.displayName,
          photoURL: data.photoURL,
        });
      }
    );
  };
  const emailSignIn = (data: any) => {
    return signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const logOut = () => {
    signOut(auth).then(() => setUser(null));
  };

  return (
    <User.Provider
      value={{
        isUserLoaded,
        user,
        logOut,
        googleSignIn,
        facebookSignIn,
        emailSignUp,
        emailSignIn,
      }}
    >
      {children}
    </User.Provider>
  );
};

export default UserProvider;
