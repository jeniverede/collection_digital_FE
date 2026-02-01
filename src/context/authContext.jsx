/* import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  // In demo mode, just set a fake token and a demo user name
  const [token] = useState("demo-token"); // fake token to satisfy your Collection.jsx
  const [decoded] = useState({ name: "Demo User" }); // decoded token placeholder

  return (
    <AuthContext.Provider value={{ token, decoded }}>
      {children}
    </AuthContext.Provider>
  );
} */

