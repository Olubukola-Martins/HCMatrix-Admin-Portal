import { LOCAL_STORAGE_AUTH_TOKEN_KEY } from "constants";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import useSignOut from "react-auth-kit/hooks/useSignOut";

type TReturnValues = {
  isAuthenticated: boolean;
  authToken?: string;
  handleLogin: (authToken: string) => void;
  handleLogout: () => void;
};
type TAuthUserData = { userAccessToken: string };
const useHandleAuthentication = (): TReturnValues => {
  const signIn = useSignIn<TAuthUserData>();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const auth = useAuthUser<TAuthUserData>();

  return {
    handleLogin: (authToken) => {
      if (!authToken) {
        throw Error("No Token was provided!");
      }
      const hasBeenAuthenticated = signIn({
        auth: {
          token: authToken,
          type: "Bearer",
        },
        userState: {
          userAccessToken: authToken,
        },
      });
      if (!hasBeenAuthenticated) {
        throw new Error("Failed to authenticate!");
      }
      localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN_KEY, authToken);
      // window.location.reload(); //done purely so the http client can pick up on the new token in local storage
    },
    handleLogout: () => {
      signOut();
    },
    isAuthenticated: isAuthenticated(),
    authToken: auth?.userAccessToken,
  };
};

export default useHandleAuthentication;
