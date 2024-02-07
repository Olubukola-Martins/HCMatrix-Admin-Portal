import { Card, Typography, Select, DatePicker } from "antd";
import { DoughnutChart } from "components/charts";
import CurrencySwitcher from "components/currency/CurrencySwitcher";
import React from "react";
import { IDivProps } from "types";

const IncomePerModuleCard: React.FC<IDivProps> = ({ className }) => {
  return (
    <Card
      className={className}
      title={
        <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
          <Typography.Title level={5}>
            <span className="font-light capitalize">Income per Module</span>
          </Typography.Title>
          <div className="space-x-4 flex flex-row">
            <DatePicker.RangePicker placeholder={["From", "To"]} />
            <Select placeholder={"Location"} />

            <CurrencySwitcher />
          </div>
        </div>
      }
      bordered={false}
    >
      <div className="h-64">
        <DoughnutChart />
      </div>
    </Card>
  );
};

export default IncomePerModuleCard;
