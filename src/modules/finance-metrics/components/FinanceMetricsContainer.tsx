import { PageLayout } from "components/layouts";
import IncomeRateCard from "./cards/IncomeRateCard";
import PricesCard from "./cards/PricesCard";
import IncomePerModuleCard from "./cards/IncomePerModuleCard";
import IncomePerAddOnCard from "./cards/IncomePerAddOnCard";
import ScheduledRenewalCard from "./cards/ScheduledRenewalCard";
import TransactionHistoryCard from "./cards/TransactionHistoryCard";
import TaxReportCard from "./cards/TaxReportCard";

const FinanceMetricsContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Finance Metrics",
        },
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-12">
        <IncomeRateCard className="lg:col-span-3 shadow-md" />
        <PricesCard className="lg:col-span-1 shadow-md" />
        <IncomePerModuleCard className="lg:col-span-2 shadow-md" />
        <IncomePerAddOnCard className="lg:col-span-2 shadow-md" />
        <ScheduledRenewalCard className="lg:col-span-2 shadow-md" />
        <TransactionHistoryCard className="lg:col-span-2 shadow-md" />
        <TaxReportCard className="lg:col-span-2 shadow-md" />
      </div>
    </PageLayout>
  );
};

export default FinanceMetricsContainer;
