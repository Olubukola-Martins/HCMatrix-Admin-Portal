import React from "react";

export { type IImageProps, type IIconProps } from "./image";
export { EThemePrimaryColor, type TThemeMode } from "./theme";
export { type TFileType } from "./file";
export interface IDivProps extends React.HTMLAttributes<HTMLDivElement> {}
export { type TChartProps } from "./charts";
export type TStorageUnit = "KB" | "MB" | "GB";
export type TDiscountType = "flat" | "percentage";
export type TCurrency = "ngn" | "usd";
export type TBillingCycle = "monthly" | "yearly";
export type TSubscriptionLabel =
  | "employee-management"
  | "hr-admin"
  | "payroll"
  | "time-and-attendance"
  | "performance"
  | "recruitment"
  | "learning-and-development";
export type TModule = TSubscriptionLabel;
