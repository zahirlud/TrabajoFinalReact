import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const accessToken = localStorage.getItem("access_token");
const refreshToken = localStorage.getItem("refresh_token");

const initialState = {
  access_token: null,
  refresh_token: null,
};

function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [tokens, setTokens] = useState(
    {
      access_token: accessToken,
      refresh_token: refreshToken,
    } || initialState
  );
  useEffect(() => {
    localStorage.setItem("access_token", tokens.access_token);
    localStorage.setItem("refresh_token", tokens.refresh_token);
  }, [tokens]);

  const handleLogin = (tokens) => {
    setTokens(tokens);
    localStorage.setItem("access_token", tokens.access_token);
    localStorage.setItem("refresh_token", tokens.refresh_token);
  };

  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setTokens(initialState);
  };
  console.log(initialState);
  return (
    <AuthContext.Provider value={{ tokens, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
