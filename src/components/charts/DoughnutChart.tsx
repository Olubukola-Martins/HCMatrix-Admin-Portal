import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TChartProps } from "types";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,

  plugins: {
    // legend: {
    //   position: "top" as const,
    // },
    title: {
      display: false,
      text: "Data",
    },
  },
};

export const DoughnutChart: React.FC<TChartProps> = ({
  labels,
  data = [],
  bgColors = "#1B59F8CC",
  dataEntityLabel = "items",

  maintainAspectRatio = true,
  ...props
}) => {
  const dataSrc = {
    labels,
    datasets: [
      {
        label: dataEntityLabel,
        borderColor: bgColors,

        data,
        backgroundColor: bgColors,
      },
    ],
  };
  return (
    <Doughnut
      {...props}
      options={{
        ...options,
        maintainAspectRatio,
      }}
      data={dataSrc}
    />
  );
};
