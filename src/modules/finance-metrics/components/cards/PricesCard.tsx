import { Card, Typography, Select, Button, List, Avatar } from "antd";
import React from "react";
import { IDivProps } from "types";

const dummyData = Array(5).fill({
  name: "Core HR",
  label: "TSubscriptionLabel",
  price: "$2000",
  iconUrl: ",",
});
const PricesCard: React.FC<IDivProps> = ({ className }) => {
  return (
    <Card
      className={className}
      title={
        <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
          <Typography.Title level={5}>
            <span className="font-light">Prices</span>
          </Typography.Title>
          <div className="space-x-4 flex flex-row">
            <Select placeholder={"Filter"} />
            <Button type="default">Set Prices</Button>
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
              description={null}
            />
            <span>{item.price}</span>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default PricesCard;
