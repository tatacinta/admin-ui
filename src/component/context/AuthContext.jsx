import React, { createContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null); // Token for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Status of authentication

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setAuthToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  // Functions to handle login/logout
  const login = (token) => {
    setAuthToken(token);
    setIsAuthenticated(true);
    localStorage.setItem("authToken", token); // Store the token
  };

  const logout = () => {
    setAuthToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authToken"); // Remove token
  };

  // Providing context values
  return (
    <AuthContext.Provider value={{ authToken, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use context values
export const useAuth = () => {
  return React.useContext(AuthContext);
};
