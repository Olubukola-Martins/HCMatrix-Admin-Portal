import React from "react";
import PageTitle, { TPageTitle } from "./PageTitle";
import PageBack, { TPageBack } from "./PageBack";

export type TPageHeader = {
  title: TPageTitle;
  back?: TPageBack;
  showBack?: boolean;
  supportingComp?: React.ReactNode;
};
const PageHeader: React.FC<TPageHeader> = ({
  title,
  back,
  showBack = true,
  supportingComp,
}) => {
  return (
    <div className="w-full flex justify-between lg:items-center lg:flex-row flex-col">
      <div className="flex gap-x-2 items-center">
        {showBack ? <PageBack {...back} /> : null}
        <PageTitle {...title} />
      </div>
      <>{supportingComp}</>
    </div>
  );
};

export default PageHeader;
