import React from "react";
import PageHeader, { TPageHeader } from "./PageHeader";

const PageLayout: React.FC<{
  children: React.ReactNode;
  header: TPageHeader;
}> = ({ children, header }) => {
  return (
    <div className="w-full space-y-8">
      <PageHeader {...header} />
      {children}
    </div>
  );
};

export default PageLayout;
