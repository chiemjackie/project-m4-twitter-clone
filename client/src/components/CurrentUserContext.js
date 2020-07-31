import React, { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext(null);

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  // console.log(currentUser);

  useEffect(() => {
    fetch("/api/me/profile")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCurrentUser(data);
        setStatus("idle");
      });
  }, []);

  // console.log(currentUser);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
