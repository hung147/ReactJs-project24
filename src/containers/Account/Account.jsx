import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/Users/ngtuonghung/Reactjs-project24/reactjs-project24/src/containers/Login/FirebaseConfig.js";
import HeaderAccount from "./HeaderAccount";
const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("User is signed in:", currentUser);
        setUser(currentUser);
      } else {
        console.log("No user is signed in.");
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <HeaderAccount activeTab="account" />
    </div>
  );
};

export default Account;
