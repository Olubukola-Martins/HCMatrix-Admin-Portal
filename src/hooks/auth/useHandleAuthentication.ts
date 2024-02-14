import { AuthContext } from "components/providers/AuthContextProvider";
import { useContext } from "react";

const useHandleAuthentication = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useHandleAuthentication must be used within a AuthContextProvider"
    );
  }
  const { handleLogin, handleLogout, isAuthenticated, authToken } = context;
  return { handleLogin, handleLogout, isAuthenticated, authToken };
};

export default useHandleAuthentication;
