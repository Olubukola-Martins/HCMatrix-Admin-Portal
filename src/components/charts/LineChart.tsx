import { Line } from "@ant-design/charts";
import { theme } from "antd";
import { dummyChartData } from "constants";
import useHandleColorTheme from "hooks/theme/useHandleColorTheme";

const LineChart: React.FC<{ data?: Record<string, number | string>[] }> = ({
  data = dummyChartData,
}) => {
  const { token } = theme.useToken();
  const { mode } = useHandleColorTheme();
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
  };
  return (
    <Line
      {...{
        ...config,
        theme: mode === "dark" ? "classicDark" : "classic",

        xAxis: {
          type: "time",
        },
        yAxis: {
          label: {
            formatter: (v: string) =>
              `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
          },
        },
        colorField: token.colorPrimary,
      }}
    />
  );
};

export default LineChart;
