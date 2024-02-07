import {
  FinanceMetricsContainer,
  ScheduledRenewalContainer,
  TaxReportContainer,
  TransactionHistoryContainer,
} from "modules/finance-metrics";
import { appRoutePaths } from "routes/paths";
import { TRoutePageData } from "routes/types";

export const appRoutePages: TRoutePageData[] = [
  {
    element: <div />,
    path: appRoutePaths.notFound,
    title: "Not Found",
    category: ["doesnt-require-authentication"],
  },
  {
    element: <FinanceMetricsContainer />,
    path: appRoutePaths.financeMetrics,
    title: "Finance Metrics",
  },
  {
    element: <ScheduledRenewalContainer />,
    path: appRoutePaths.financeMetricsScheduledRenewal,
    title: "Scheduled Renewal",
  },
  {
    element: <TransactionHistoryContainer />,
    path: appRoutePaths.financeMetricsTransactionHistory,
    title: "Transaction History",
  },
  {
    element: <TaxReportContainer />,
    path: appRoutePaths.financeMetricsTaxReport,
    title: "Tax Reports",
  },
];
