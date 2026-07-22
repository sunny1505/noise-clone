import { createContext, useContext, useEffect, useState } from "react";

import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../utils/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const currentUser = getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }

  }, []);

  const register = (userData) => {

    return registerUser(userData);

  };

  const login = (email, password) => {

    const response = loginUser(email, password);

    if (response.success) {
      setUser(response.user);
    }

    return response;

  };

  const logout = () => {

    logoutUser();

    setUser(null);

  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

}

export function useAuth() {

  return useContext(AuthContext);

}