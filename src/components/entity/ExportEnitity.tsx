import { Button } from "antd";

import React from "react";
import { TbFileExport } from "react-icons/tb";

const ExportEnitity: React.FC<{
  trigger?: React.ReactNode;
}> = ({
  trigger = (
    <Button
      icon={<TbFileExport className="text-2xl" />}
      size="large"
      type="text"
    />
  ),
}) => {
  return (
    <>
      <div className="cursor-pointer">{trigger}</div>
    </>
  );
};

export default ExportEnitity;
