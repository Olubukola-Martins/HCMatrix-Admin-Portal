import { Card, Typography, Select, DatePicker } from "antd";
import { DoughnutChart } from "components/charts";
import CurrencySwitcher from "components/currency/CurrencySwitcher";
import { dummyModuleChartData } from "constants";
import { generateHexColor } from "lib/utils";
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
      <div className="lg:h-64 flex lg:flex-row flex-col items-center">
        <div className="flex lg:flex-col flex-row gap-2 flex-wrap w-full">
          {dummyModuleChartData.map((item) => (
            <div key={item.type} className="flex gap-x-2 items-center">
              <div
                className="h-4 w-4 rounded-md"
                style={{ backgroundColor: generateHexColor(item.type) }}
              />
              <span>27% {item.type}</span>
            </div>
          ))}
        </div>
        <div className="relative h-full">
          <div className="absolute z-1 top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
            <span className="text-accent text-center">$13905</span>
          </div>
          <DoughnutChart
            className="relative z-10"
            data={dummyModuleChartData.map((item) => item.value)}
            labels={[]}
            dataEntityLabel="Amount"
            bgColors={dummyModuleChartData.map((item) =>
              generateHexColor(item.type)
            )}
          />
        </div>
      </div>
    </Card>
  );
};

export default IncomePerModuleCard;
