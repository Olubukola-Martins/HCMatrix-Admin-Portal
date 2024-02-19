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
  }>({
    isAuthenticated:
      localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY) !== null
        ? true
        : false,
    authToken: localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN_KEY) ?? undefined,
  });
  // TODO: Refactor code as storing access token in local storage is not a good practice, and be easily obtained from browser local storage, hence comprimising security
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
    window.location.reload(); //this is done to ensure that the httpClient can pick up token from local storage
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
