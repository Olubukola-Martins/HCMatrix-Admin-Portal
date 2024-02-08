import { Card, Typography } from "antd";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const TitleByIconHoverableCard: React.FC<{ label: string }> = ({ label }) => {
  return (
    <Card>
      <div className="flex justify-between items-center group">
        <Typography.Title level={4}>
          <span className="group-hover:text-primary">{label}</span>
        </Typography.Title>
        <FaChevronRight className="group-hover:text-primary" />
      </div>
    </Card>
  );
};

export default TitleByIconHoverableCard;
