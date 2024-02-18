import LoginContainer from "modules/authentication/components/login/LoginContainer";
import {
  FinanceMetricsContainer,
  ScheduledRenewalContainer,
  TaxReportContainer,
  TransactionHistoryContainer,
} from "modules/finance-metrics";
import SettingsContainer from "modules/settings/components/SettingsContainer";
import DiscountsContainer from "modules/settings/components/discounts/DiscountsContainer";
import SpecificDiscountsContainer from "modules/settings/components/discounts/specific-discounts/SpecificDiscountsContainer";
import PricesContainer from "modules/settings/components/prices/PricesContainer";
import RolesAndPermissionContainer from "modules/settings/components/roles-and-permissions/RolesAndPermissionContainer";
import PermissionsContainer from "modules/settings/components/roles-and-permissions/permissions/PermissionsContainer";
import UsersContainer from "modules/settings/components/users/UsersContainer";
import TrainingSessionContainer from "modules/training-sessions/components/TrainingSessionContainer";
import TrainingSessionBookingContainer from "modules/training-sessions/components/bookings/TrainingSessionBookingContainer";
import { appRoutePaths } from "routes/paths";
import { TRoutePageData } from "routes/types";

export const appAuthPages: TRoutePageData[] = [
  {
    element: <LoginContainer />,
    path: appRoutePaths.login,
    title: "Login",
    category: ["inaccessible-if-user-is-authenticated"],
  },
];
export const appRoutePages: TRoutePageData[] = [
  {
    element: <div>Home</div>,
    path: appRoutePaths.home,
    title: "Home",
  },
  {
    element: <div>Page Not Found!</div>,
    path: appRoutePaths.notFound,
    title: "Not Found",
    category: ["doesnt-require-authentication"],
  },
  // training sessions
  {
    element: <TrainingSessionContainer />,
    path: appRoutePaths.trainingSessions,
    title: "Training Sessions",
  },
  {
    element: <TrainingSessionBookingContainer />,
    path: appRoutePaths.trainingSessionsBookings,
    title: "Training Session Bookings",
  },
  // training sessions

  // settings
  {
    element: <PricesContainer />,
    path: appRoutePaths.settingsPrices,
    title: "Prices",
  },
  {
    element: <SpecificDiscountsContainer />,
    path: appRoutePaths.settingsDiscountsSpecific,
    title: "Discounts",
  },
  {
    element: <DiscountsContainer />,
    path: appRoutePaths.settingsDiscounts,
    title: "Discounts",
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
