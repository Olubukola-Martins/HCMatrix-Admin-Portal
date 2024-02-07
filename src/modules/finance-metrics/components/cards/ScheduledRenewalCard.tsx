import { Card, Typography, Select, List, Avatar } from "antd";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";
import { IDivProps } from "types";

const dummyData = Array(5).fill({
  name: "Dangote Cement",
  description: "Lisenced User -5 , Unlisenced User - 0",
  price: "$2000",
  iconUrl: ",",
});
const ScheduledRenewalCard: React.FC<IDivProps> = ({ className }) => {
  return (
    <Card
      className={className}
      title={
        <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
          <Typography.Title level={5}>
            <span className="font-light">Scheduled Renewal</span>
          </Typography.Title>
          <div className="space-x-4 flex flex-row">
            <Select placeholder={"Filter"} />
          </div>
        </div>
      }
      bordered={false}
    >
      <List
        loading={false}
        itemLayout="horizontal"
        dataSource={dummyData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar alt={item.name} src={item.iconUrl} />}
              title={<span>{item.name}</span>}
              description={item.description}
            />
            <span>{item.price}</span>
          </List.Item>
        )}
      />

      <div className="flex justify-center mt-4">
        <Link to={appRoutePaths.financeMetricsScheduledRenewal}>
          <button className="flex items-center space-x-2 group">
            <span className="group-hover:text-accent text-primary">
              View List
            </span>
            <FaArrowRightLong className="group-hover:text-accent text-primary" />
          </button>
        </Link>
      </div>
    </Card>
  );
};

export default ScheduledRenewalCard;
