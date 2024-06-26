import { BarChart } from "components/charts/BarChart";
import { UserMetricsChart } from "./UserMetricsChart";
import { Select } from "antd";
import { IProp } from "./ActiveUsers";

const FrequentlyUsedFeaturesChart = ({ additionalStyles }: IProp) => {
  const chartLabel = ["Loan", "Leave", "Payroll Comparison", "Onboarding", "Run Payroll", "Clock In", "Reimbursement"];
  const data = [20, 50, 79, 40, 10, 45, 80];
  const bgColors = ["#01966B", "#FF6647", "#455A64", "#AD6359", "#6F2E61", "#D69A00", "#216435"];

  return <UserMetricsChart additionalStyles={additionalStyles} isLineChart={false} featureSelect={<Select placeholder="Features" />} monthSelect={<Select placeholder="Month" />} header="Frequently Used Modules" chart={<BarChart labels={chartLabel} data={data} bgColors={bgColors} dataEntityLabel="Frequently Used Features" />} />;
};

export default FrequentlyUsedFeaturesChart;
