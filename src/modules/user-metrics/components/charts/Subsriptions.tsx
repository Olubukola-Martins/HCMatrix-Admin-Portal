import { LineChart } from "components/charts/LineChart";
import { UserMetricsChart } from "./UserMetricsChart";
import { Select } from "antd";
import { IProp } from "./ActiveUsers";

const SubsriptionsChart = ({ additionalStyles }: IProp) => {
  const chartLabel = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul"];
  const data = [20, 50, 79, 40, 10, 45, 80];
  return <UserMetricsChart rating={0.4} ratingText="Vs preceeding month" additionalStyles={additionalStyles} chart={<LineChart labels={chartLabel} data={data} bgColors={"#01966B"} dataEntityLabel="Subscriptions" />} header="Subscriptions" subscribedSelect={<Select placeholder="Subscribed" />} filterSelect={<Select placeholder={"Filter"} />} />;
};

export default SubsriptionsChart