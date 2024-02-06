import React from "react";

const AuthMiddleware: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export default AuthMiddleware;
