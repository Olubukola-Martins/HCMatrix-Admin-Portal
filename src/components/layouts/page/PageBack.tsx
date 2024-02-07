import { Button } from "antd";
import { ArrowLeftIcon } from "components/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
export type TPageBack = { link?: string };
const PageBack: React.FC<TPageBack> = ({ link }) => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  if (!link)
    return (
      <Button onClick={handleBack} type="text" className="relative -top-1.5">
        <ArrowLeftIcon className="cursor-pointer " />
      </Button>
    );
  return (
    <Button type="text" className="relative -top-1.5">
      <Link to={link}>
        <ArrowLeftIcon className="cursor-pointer mx-2 relative -top-2" />
      </Link>
    </Button>
  );
};

export default PageBack;
