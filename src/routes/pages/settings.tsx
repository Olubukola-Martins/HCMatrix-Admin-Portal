import { canUserAccessComponent } from "lib/utils";
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
import { appRoutePaths } from "routes";
import { TAppPageDataFnProps, TRoutePageData } from "routes/types";

export const settingsPages = (props: TAppPageDataFnProps): TRoutePageData[] => {
  const { userPermissions } = props;
  let routes: TRoutePageData[] = [];
  routes = [
    // settings
    {
      element: <PricesContainer />,
      path: appRoutePaths.settingsPrices,
      title: "Prices",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-subscription-prices"],
      }),
    },
    {
      element: <SpecificDiscountsContainer />,
      path: appRoutePaths.settingsDiscountsSpecific,
      title: "Discounts",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-discounts"],
      }),
    },
    {
      element: <DiscountsContainer />,
      path: appRoutePaths.settingsDiscounts,
      title: "Discounts",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-discounts"],
      }),
    },
    {
      element: <UsersContainer />,
      path: appRoutePaths.settingsUsers,
      title: "Users",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-users"],
      }),
    },
    {
      element: <PermissionsContainer />,
      path: appRoutePaths.rolePermissions().format,
      title: "Permissions",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-roles-and-permissions"],
      }),
    },
    {
      element: <RolesAndPermissionContainer />,
      path: appRoutePaths.settingsRolesAndPermissions,
      title: "Roles & Permmissions",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-roles-and-permissions"],
      }),
    },
    {
      element: <SettingsContainer />,
      path: appRoutePaths.settings,
      title: "Settings",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: [
          "manage-discounts",
          "manage-subscription-prices",
          "manage-roles-and-permissions",
          "manage-users",
        ],
      }),
    },
    {
      element: <FinanceMetricsContainer />,
      path: appRoutePaths.financeMetrics,
      title: "Finance Metrics",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-finance-metrics"],
      }),
    },
    {
      element: <ScheduledRenewalContainer />,
      path: appRoutePaths.financeMetricsScheduledRenewal,
      title: "Scheduled Renewal",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-finance-metrics"], //TODO: Ask wether should be free or if there is a permission for this
      }),
    },
    {
      element: <TransactionHistoryContainer />,
      path: appRoutePaths.financeMetricsTransactionHistory,
      title: "Transaction History",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-finance-metrics"], //TODO: Ask wether should be free or if there is a permission for this
      }),
    },
    {
      element: <TaxReportContainer />,
      path: appRoutePaths.financeMetricsTaxReport,
      title: "Tax Reports",
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-finance-metrics"], //TODO: Ask wether should be free or if there is a permission for this
      }),
    },
  ].map((item) => ({
    ...item,
    category: ["requires-authentication"],
  }));
  return routes;
};
