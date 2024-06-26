import { IProp } from "./components/charts/ActiveUsers";

 export type HourData = {
  hour: string;
  totalUsageCount: number;
  day: string;
  date: string;
  week: number;
  month: string;
  year: string;
};

export type DayData = {
  year: string;
  month: string;
  week: number;
  day: string;
  date: string;
  totalUsageCount: number;
  hours: HourData[];
};

 export type WeekData = {
  year: string;
  month: string;
  week: number;
  totalUsageCount: number;
  days: DayData[];
};

 export type MonthData = {
  year: string;
  month: string;
  totalUsageCount: number;
  weeks: WeekData[];
};

 export type YearData = {
  year: string;
  totalUsageCount: number;
  months: MonthData[];
};

export type UsageData = YearData;
export type DisplayedUsageData = HourData[] | DayData[] | WeekData[] 
export type UsageDataTimeFrame = "daily" | "weekly" | "monthly" ;

export interface IHeatMapProps extends IProp {
  dataValues: UsageData[]
}
