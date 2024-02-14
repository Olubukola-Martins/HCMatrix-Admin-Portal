import { LOCAL_STORAGE_AUTH_TOKEN_KEY } from "constants";
import React, { createContext, useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}
interface IAuthContextProps {
  isAuthenticated: boolean;
  authToken?: string;
  handleLogin: (authToken: string) => void;
  handleLogout: () => void;
}
export const AuthContext = createContext<IAuthContextProps>({
  isAuthenticated: false,
  handleLogin: () => {},
  handleLogout: () => {},
});
const AuthContextProvider = ({ children }: IProps) => {
  const [authState, setAuthState] = useState<{
    isAuthenticated: boolean;
    authToken?: string;
  }>({ isAuthenticated: false });
  useEffect(() => {
    const localAuthToken = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
    if (localAuthToken !== null) {
      setAuthState({
        isAuthenticated: true,
        authToken: localAuthToken,
      });

      return;
    } else {
      setAuthState({
        isAuthenticated: false,
        authToken: undefined,
      });
    }
    return () => {
      localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
    };
  }, []);
  const handleLogin = (authToken: string) => {
    setAuthState(() => ({
      isAuthenticated: true,
      authToken,
    }));
    localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, authToken);
  };
  const handleLogout = () => {
    setAuthState(() => ({
      isAuthenticated: false,
      authToken: undefined,
    }));
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        authToken: authState.authToken,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
