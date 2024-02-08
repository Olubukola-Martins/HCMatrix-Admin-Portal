import {
  FinanceMetricsContainer,
  ScheduledRenewalContainer,
  TaxReportContainer,
  TransactionHistoryContainer,
} from "modules/finance-metrics";
import SettingsContainer from "modules/settings/components/SettingsContainer";
import RolesAndPermissionContainer from "modules/settings/components/roles-and-permissions/RolesAndPermissionContainer";
import PermissionsContainer from "modules/settings/components/roles-and-permissions/permissions/PermissionsContainer";
import UsersContainer from "modules/settings/components/users/UsersContainer";
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
    element: <UsersContainer />,
    path: appRoutePaths.settingsUsers,
    title: "Users",
  },
  {
    element: <PermissionsContainer />,
    path: appRoutePaths.rolePermissions().format,
    title: "Permissions",
  },
  {
    element: <RolesAndPermissionContainer />,
    path: appRoutePaths.settingsRolesAndPermissions,
    title: "Settings",
  },
  {
    element: <SettingsContainer />,
    path: appRoutePaths.settings,
    title: "Settings",
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
