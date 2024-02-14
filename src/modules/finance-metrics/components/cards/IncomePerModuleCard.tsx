import { Card, Skeleton } from "antd";
import DoughnutChartWithExternalLabels from "components/charts/modified/DoughnutChartWithExternalLabels";
import { DEFAULT_DATE_FORMAT } from "constants";
import { currencyFormatter, generateHexColor } from "lib/utils";
import React from "react";
import { IDivProps } from "types";
import IncomePerCardHeader, {
  useIncomePerHeaderControls,
} from "./headers/IncomePerCardHeader";
import { useGetIncomePerModule } from "lib/api/finance-metrics/analytic/income-per-module";

const IncomePerModuleCard: React.FC<IDivProps> = ({ className }) => {
  const { selectedCurrency, countryIds, duration, setCountryIds, setDuration } =
    useIncomePerHeaderControls();
  const { data, isLoading } = useGetIncomePerModule({
    priceType: selectedCurrency,
    duration: {
      startDate: duration?.[0].format(DEFAULT_DATE_FORMAT),
      endDate: duration?.[1].format(DEFAULT_DATE_FORMAT),
    },
    countryIds,
  });
  return (
    <Card
      className={className}
      title={
        <IncomePerCardHeader
          title="Income per Module"
          duration={duration}
          setDuration={setDuration}
          countryIds={countryIds}
          setCountryIds={setCountryIds}
        />
      }
      bordered={false}
    >
      <Skeleton loading={isLoading} paragraph={{ rows: 4 }}>
        <DoughnutChartWithExternalLabels
          dataValues={Object.values(data?.data.percentages ?? {}).map(
            (item) => (+item / 100) * (data?.data.totalSum ?? 0)
          )}
          dataEntityLabel="Amount"
          externalLabels={Object.keys(data?.data.percentages ?? {}).map(
            (item) => ({
              value: item,
              color: generateHexColor(item),
            })
          )}
          className="lg:h-64 flex lg:flex-row flex-col items-center"
          centerTextFormatter={(value) =>
            currencyFormatter({ currency: selectedCurrency, value })
          }
        />
      </Skeleton>
    </Card>
  );
};

export default IncomePerModuleCard;
