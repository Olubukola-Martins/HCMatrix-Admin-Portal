import moment from "moment";
import { UsageData } from "../types";

const generateDateUsageArray = (): UsageData[] => {
  const dateUsageArray: UsageData[] = [];
  const startDate = moment().subtract(1, "years").startOf("year");
  const endDate = moment().startOf("hour");

  const currentDate = endDate.clone().startOf("day");

  while (currentDate.isSameOrAfter(startDate, "day")) {
    const year = currentDate.format("YYYY");
    const month = currentDate.format("MMMM");
    const week = currentDate.isoWeek();
    const day = currentDate.format("dddd");
    const date = currentDate.format("YYYY-MM-DD");

    let yearData = dateUsageArray.find((y) => y.year === year);
    if (!yearData) {
      yearData = { year, totalUsageCount: 0, months: [] };
      dateUsageArray.push(yearData);
    }

    let monthData = yearData.months.find((m) => m.month === month);
    if (!monthData) {
      monthData = { year, month, totalUsageCount: 0, weeks: [] };
      yearData.months.push(monthData);
    }

    let weekData = monthData.weeks.find((w) => w.week === week);
    if (!weekData) {
      weekData = { year, month, week, totalUsageCount: 0, days: [] };
      monthData.weeks.push(weekData);
    }

    let dayData = weekData.days.find((d) => d.date === date);
    if (!dayData) {
      dayData = { year, month, week, day, date, totalUsageCount: 0, hours: [] };
      weekData.days.push(dayData);
    }

    // Determine the last hour of the current day
    const lastHour = currentDate.isSame(moment(), "day") ? moment().hour() : 23;

    for (let hour = 0; hour <= lastHour; hour++) {
      const hourFormatted = currentDate.clone().hour(hour).format("ha");
      const totalUsageCount = Math.floor(Math.random() * 400);

      yearData.totalUsageCount += totalUsageCount;
      monthData.totalUsageCount += totalUsageCount;
      weekData.totalUsageCount += totalUsageCount;
      dayData.totalUsageCount += totalUsageCount;

      dayData.hours.push({
        hour: hourFormatted,
        totalUsageCount,
        day,
        date,
        week,
        month,
        year,
      });
    }

    currentDate.subtract(1, "day").startOf("day");
  }

  return dateUsageArray;
};
export const usageMockData = generateDateUsageArray();

export default { usageMockData };
