import { generateHexColor } from "lib/utils";
import React from "react";
import { IDivProps } from "types";
import { DoughnutChart } from "..";
import { Empty } from "antd";

const DoughnutChartWithExternalLabels: React.FC<
  Pick<IDivProps, "className"> & {
    dataEntityLabel?: string;
    externalLabels?: { value: string; color?: string }[];
    dataValues?: number[];
    centerTextFormatter?: (text: string | number) => string;
  }
> = ({
  externalLabels,
  className = "lg:h-64 flex lg:flex-row flex-col items-center",
  dataEntityLabel = "Amount",
  dataValues = [],
  centerTextFormatter,
}) => {
  const total = dataValues.reduce((a, b) => a + b, 0);
  const allDataValuesAreZero = dataValues.every((i) => i === 0);
  return (
    <div className={className}>
      {(dataValues.length === 0 || allDataValuesAreZero) && (
        <Empty description="No data" className="mx-auto" />
      )}
      {dataValues.length > 0 && !allDataValuesAreZero && (
        <>
          <div className="flex lg:flex-col flex-row gap-2 flex-wrap w-full">
            {externalLabels?.map((item, i) => (
              <div key={i} className="flex gap-x-2 items-center">
                <div
                  className="h-4 w-4 rounded-md"
                  style={{
                    backgroundColor: item.color || generateHexColor(item.value),
                  }}
                />
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="relative h-full">
            <div className="absolute z-1 top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
              <span className="text-accent text-center">
                {centerTextFormatter ? centerTextFormatter(total) : total}
              </span>
            </div>
            <DoughnutChart
              className="relative z-2"
              data={dataValues}
              labels={[]}
              dataEntityLabel={dataEntityLabel}
              bgColors={externalLabels?.map(
                (item) => item.color || generateHexColor(item.value)
              )}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DoughnutChartWithExternalLabels;
