import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const ReactAuthKitProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // TODO: Switch to using cookies
  const store = createStore({
    authName: "_auth",
    authType: "localstorage",
    // cookieDomain: window.location.hostname,
    // cookieSecure: window.location.protocol === "https:",
  });

  return (
    <>
      <AuthProvider store={store}>{children}</AuthProvider>
    </>
  );
};

export default ReactAuthKitProvider;
