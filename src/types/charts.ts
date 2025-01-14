import { IDivProps } from "types";

export type TChartProps = Pick<IDivProps, "className"> & {
  maintainAspectRatio?: boolean;
  labels: string[];
  data?: number[];
  axis?: "x" | "y";
  bgColors?: string | string[];
  dataEntityLabel?: string;
  dataSets?: {
    data: number[] | number[][];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    label: string;
    stack?: string;
    borderSkipped?: boolean;
  }[];
  useDataSet?: boolean;
};
