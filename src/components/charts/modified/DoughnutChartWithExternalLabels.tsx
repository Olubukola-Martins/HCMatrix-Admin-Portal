import { generateHexColor } from "lib/utils";
import React from "react";
import { IDivProps } from "types";
import { DoughnutChart } from "..";

const DoughnutChartWithExternalLabels: React.FC<
  Pick<IDivProps, "className"> & {
    dataEntityLabel?: string;
    externalLabels?: { value: string; color?: string }[];
    dataValues?: number[];
  }
> = ({
  externalLabels,
  className = "lg:h-64 flex lg:flex-row flex-col items-center",
  dataEntityLabel = "Amount",
  dataValues = [],
}) => {
  return (
    <div className={className}>
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
          <span className="text-accent text-center">$13905</span>
        </div>
        <DoughnutChart
          className="relative z-10"
          data={dataValues}
          labels={[]}
          dataEntityLabel={dataEntityLabel}
          bgColors={externalLabels?.map(
            (item) => item.color || generateHexColor(item.value)
          )}
        />
      </div>
    </div>
  );
};

export default DoughnutChartWithExternalLabels;
