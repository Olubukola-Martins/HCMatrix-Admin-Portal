import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
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

export const PieChart: React.FC<TChartProps> = ({
  labels,
  data = [],
  // axis = "x",
  bgColors = "#1B59F8CC",
  dataEntityLabel = "items",
  // useDataSet = false,
  // dataSets = [],
  maintainAspectRatio = true,
}) => {
  const dataSrc = {
    labels,
    datasets: [
      {
        label: dataEntityLabel,

        data,
        backgroundColor: bgColors,
      },
    ],
  };
  return (
    <Pie
      options={{
        ...options,
        maintainAspectRatio,

        // indexAxis: axis,

        // scales: {
        //   x: {
        //     grid: {
        //       display: false,
        //     },
        //   },
        //   y: {
        //     grid: {
        //       display: false,
        //     },
        //   },
        // },
      }}
      data={dataSrc}
    />
  );
};
