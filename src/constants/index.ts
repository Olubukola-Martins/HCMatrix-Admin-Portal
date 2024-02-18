import { appRoutePaths } from "routes/paths";
import {
  TBillingCycle,
  TCurrency,
  TDiscountType,
  TModule,
  TStorageUnit,
  TSubscriptionType,
} from "types";
import { ENV } from "./enviroment";
import dayjs from "dayjs";
export { ENV };
export const LOCAL_STORAGE_AUTH_TOKEN_KEY = "auth_token";
export const DEFAULT_MAX_FILE_UPLOAD_SIZE_IN_MB = 2;
export const DEFAULT_MAX_FILE_UPLOAD_COUNT = 1;
export const dummyChartData = Array(15)
  .fill(0)
  .map(() => ({
    year: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][Math.floor(Math.random() * 12)], // Use Math.floor() to get a random index between 0 and 11
    value: Math.random() * 10 + 2, // Generate a random value between 2 and 12
    category: "Category A", // You can uncomment this line if you want all items to have the same category
  }));
export const dummyModuleChartData = [
  {
    type: "Performance",
    value: 27,
  },
  {
    type: "Payroll",
    value: 250,
  },
  {
    type: "Hr Admin",
    value: 18,
  },
  {
    type: "Learning & Development",
    value: 15,
  },
  {
    type: "Recruitment",
    value: 10,
  },
  {
    type: "Time & Attendance",
    value: 5,
  },
];
export const subscriptionTypeOptions: TSubscriptionType[] = ["module", "plan"];
export const storageUnitOptions: TStorageUnit[] = ["KB", "MB", "GB"];
export const currencyOptions: TCurrency[] = ["ngn", "usd"];
export const billingCycleOptions: TBillingCycle[] = ["monthly", "yearly"];
export const moduleOptions: TModule[] = [
  "employee-management",
  "hr-admin",
  "payroll",
  "time-and-attendance",
  "performance",
  "recruitment",
  "learning-and-development",
];
export const discountTypeOptions: TDiscountType[] = ["flat", "percentage"];
export const discountPageLinks = [
  {
    label: "Specific Discounts",
    link: appRoutePaths.settingsDiscountsSpecific,
  },
];
export const settingPageLinks = [
  {
    label: "Roles & Permissions",
    link: appRoutePaths.settingsRolesAndPermissions,
  },
  {
    label: "Users",
    link: appRoutePaths.settingsUsers,
  },
  {
    label: "Prices",
    link: appRoutePaths.settingsPrices,
  },
  {
    label: "Discounts",
    link: appRoutePaths.settingsDiscounts,
  },
];
export const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export const DEFAULT_START_DATE = dayjs()
  .subtract(18, "month")
  .format(DEFAULT_DATE_FORMAT);
export const DEFAULT_END_DATE = dayjs().format(DEFAULT_DATE_FORMAT);

export const DEFAULT_PAGE_LIMIT = 15;
export const DEFAULT_PAGE_OFFSET = 0;
