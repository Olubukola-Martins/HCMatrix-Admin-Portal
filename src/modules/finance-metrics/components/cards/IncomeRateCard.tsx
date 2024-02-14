import { Card, Skeleton } from "antd";
import LineChartWithLabelsCovered from "components/charts/modified/LineChartWithLabelsCovered";
import { DEFAULT_DATE_FORMAT } from "constants";
import { useGetIncomeRate } from "lib/api/finance-metrics/analytic/income-rate";
import React from "react";
import { IDivProps } from "types";
import IncomeRateHeader, {
  useIncomeRateHeaderControls,
} from "./headers/IncomeRateHeader";

const IncomeRateCard: React.FC<IDivProps> = ({ className }) => {
  const {
    selectedCurrency,
    countryIds,
    duration,
    setCountryIds,
    setDuration,
    modules,
    setModules,
  } = useIncomeRateHeaderControls();
  const { data, isLoading } = useGetIncomeRate({
    priceType: selectedCurrency,
    duration: {
      startDate: duration?.[0].format(DEFAULT_DATE_FORMAT),
      endDate: duration?.[1].format(DEFAULT_DATE_FORMAT),
    },
    countryIds,
    modules,
  });
  return (
    <Card
      className={className}
      title={
        <IncomeRateHeader
          title="Income Rate"
          duration={duration}
          setDuration={setDuration}
          countryIds={countryIds}
          setCountryIds={setCountryIds}
          modules={modules}
          setModules={setModules}
        />
      }
      bordered={false}
    >
      <Skeleton loading={isLoading} paragraph={{ rows: 4 }}>
        <LineChartWithLabelsCovered
          dataValues={Object.values(data?.data ?? {}).map((item) => +item)}
          labels={Object.keys(data?.data ?? {}).map((item) => item)}
          className="h-64 relative"
        />
      </Skeleton>
    </Card>
  );
};

export default IncomeRateCard;
