import { Card, Typography, DatePicker, Select } from "antd";
import { LineChart } from "components/charts";
import CurrencySwitcher from "components/currency/CurrencySwitcher";
import React from "react";
import { IDivProps } from "types";

const IncomeRateCard: React.FC<IDivProps> = ({ className }) => {
  return (
    <Card
      className={className}
      title={
        <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
          <Typography.Title level={5}>
            <span className="font-light">Income Rate</span>
          </Typography.Title>
          <div className="space-x-4 flex flex-row">
            <DatePicker.RangePicker placeholder={["From", "To"]} />
            <Select
              placeholder={"Module"}
              mode="multiple"
              className="lg:min-w-28"
            />
            <Select
              placeholder={"Location"}
              mode="multiple"
              className="lg:min-w-28"
            />
            <CurrencySwitcher />
          </div>
        </div>
      }
      bordered={false}
    >
      <div className="h-64">
        <LineChart />
      </div>
    </Card>
  );
};

export default IncomeRateCard;
