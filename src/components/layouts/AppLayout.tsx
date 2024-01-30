import React from "react";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      AppLayout
      {children}
    </div>
  );
};

export default AppLayout;
