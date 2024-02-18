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
export type TSubscriptionType = "module" | "plan";
export type TOrderBy = "asc" | "desc";
export type TDuration = {
  startDate: string;
  endDate: string;
};
export type TBookingStatus = "pending" | "accepted" | "rejected" | "completed";
export interface TFormFileInput {
  uid: string;
  lastModified: number;
  lastModifiedDate: string;
  name: string;
  size: number;
  type: string;
  percent: number;
  originFileObj: OriginFileObj;
  status: string;
}

interface OriginFileObj {
  uid: string;
}
