import { Select } from "antd";
import { UserMetricsChart } from "./UserMetricsChart";
import { LineChart } from "components/charts/LineChart";

export interface IProp {
    additionalStyles?:string
}

const ActiveUsersChart = ({additionalStyles}:IProp) => {
    const chartLabel = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul']
    const data = [20,50,79,40,10,45,80]
  return <UserMetricsChart ratingText="Vs preceeding month" rating={0.4} additionalStyles={additionalStyles} chart={<LineChart labels={chartLabel} data={data} bgColors={"#01966B"} dataEntityLabel="Active users" />} header="Active Users" filterSelect={<Select placeholder={"Filter"} />} />;
};

export default ActiveUsersChart;
