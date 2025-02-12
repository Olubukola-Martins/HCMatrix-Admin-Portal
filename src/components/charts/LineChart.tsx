import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TChartProps } from "types";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Data",
    },
  },
};

export const LineChart: React.FC<TChartProps> = ({
  labels,
  data = [],
  axis = "x",
  bgColors = "#1B59F8CC",
  dataEntityLabel = "data",
  useDataSet = false,
  dataSets = [],
  maintainAspectRatio = true,
}) => {
  const dataSrc = {
    labels,
    datasets: useDataSet
      ? dataSets
      : [
          {
            label: dataEntityLabel,
            borderColor: bgColors,
            data,
            backgroundColor: bgColors,
          },
        ],
  };
  return (
    <Line
      options={{
        ...options,
        maintainAspectRatio,
        indexAxis: axis,

        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      }}
      data={dataSrc}
    />
  );
};
