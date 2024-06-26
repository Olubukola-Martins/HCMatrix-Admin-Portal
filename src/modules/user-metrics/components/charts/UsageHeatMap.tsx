import { Select } from "antd";
import { DefaultOptionType } from "antd/lib/select";
import { DayData, DisplayedUsageData, HourData, IHeatMapProps, MonthData, UsageDataTimeFrame, WeekData } from "modules/user-metrics/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "../../styles/usermetrics.module.css";

const UsageHeatMap = ({ dataValues, additionalStyles }: IHeatMapProps) => {
  // CONSTANTS && HELPERS
  const timeFrameOptions: DefaultOptionType[] = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
  ];
  const [duration, setDuration] = useState(7);
  const durationDailyOptions: DefaultOptionType[] = Array.from({ length: 7 }).map((_, index) => ({ label: `Last ${index + 1} Day${index > 0 ? "s" : ""}`, value: index + 1 }));
  const durationWeeklyOptions: DefaultOptionType[] = Array.from({ length: 4 }).map((_, index) => ({ label: `Last ${index + 1} Week${index > 0 ? "s" : ""}`, value: index + 1 }));
  const durationMonthlyOptions: DefaultOptionType[] = Array.from({ length: 12 }).map((_, index) => ({ label: `Last ${index + 1} Month${index > 0 ? "s" : ""}`, value: index + 1 }));
  const [durationOptions, setDurationOptions] = useState<DefaultOptionType[]>(durationDailyOptions);

  const getIntensity = (highestValue: number, totalUsageCount: number) => {
    return highestValue !== 0 ? Number(totalUsageCount / highestValue) : 0;
  };

  const getLastNDays = (data: DayData[], n: number) => {
    return data
      .slice(0, n)
      .reverse()
      .flatMap((day) => day.hours);
  };

  const getLastNWeeks = (data: WeekData[], n: number) => {
    return data
      .slice(0, n)
      .flatMap((week) => week.days)
      .reverse();
  };

  const getLastNMonths = (data: MonthData[], n: number) => {
    return data
      .slice(0, n)
      .flatMap((month) => month.weeks)
      .reverse();
  };

  function groupByMonth(data: WeekData[]): WeekData[][] {
    // Createing object
    const groupedData: { [key: string]: WeekData[] } = data.reduce((acc, obj) => {
      const { month } = obj;
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(obj);
      return acc;
    }, {} as { [key: string]: WeekData[] });

    // Converting to array
    const groupedArray = Object.keys(groupedData).map((month) => groupedData[month]);

    return groupedArray;
  }

  function getArrayWithMostItems(array: WeekData[][]) {
    if (array.length === 0) return [];

    return array.reduce((maxArray, currentArray) => (currentArray.length > maxArray.length ? currentArray : maxArray));
  }

  // END CONSTANTS && HELPERS

  const [timeFrame, setTimeFrame] = useState<UsageDataTimeFrame>("daily");
  const [displayedData, setDisplayedData] = useState<DisplayedUsageData>();

  useEffect(() => {
    const monthsArray = dataValues.flatMap((year) => year.months);
    const weeksArray = monthsArray.flatMap((month) => month.weeks);
    const daysArray = weeksArray.flatMap((week) => week.days);

    if (timeFrame === "daily") {
      const hoursData = getLastNDays(daysArray, duration);
      setDisplayedData(hoursData);
    }
    if (timeFrame === "weekly") {
      const weeksData = getLastNWeeks(weeksArray, duration);
      setDisplayedData(weeksData);
    }
    if (timeFrame === "monthly") {
      const monthsData = getLastNMonths(monthsArray, duration);
      setDisplayedData(monthsData);
    }
  }, [duration, timeFrame, dataValues]);

  const generateYAxisArray = useMemo(() => {
    if (timeFrame === "daily") {
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const daysArray = [];

      const today = new Date();

      for (let i = 0; i < duration; i++) {
        const dayIndex = (today.getDay() - i + 7) % 7;
        daysArray.push(dayNames[dayIndex]);
      }

      return daysArray;
    }
    if (timeFrame === "weekly" && displayedData) {
      const { week } = displayedData[displayedData?.length - 1] as DayData;
      const weeksArray = [];
      for (let i = 0; i < duration; i++) {
        weeksArray.push(`Week ${week - i}`);
      }
      return weeksArray;
    }
    if (timeFrame === "monthly" && displayedData) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthsArray = [];

      const today = new Date();
      for (let i = 0; i < duration; i++) {
        const dayIndex = (today.getMonth() - i + 12) % 12;
        monthsArray.push(months[dayIndex]);
      }
      return monthsArray;
    }
  }, [displayedData, duration, timeFrame]);

  const renderedMap = useCallback(() => {
    const colorCodes = ["#D9D9D9", "#93E7A2", "#2F984A", "#216435"];
    const getColorFromIntensity = (intensity: number) => {
      const colorIndex = Math.min(Math.floor(intensity * colorCodes.length), colorCodes.length - 1);
      return colorCodes[colorIndex];
    };

    //   for daily data
    if (timeFrame === "daily" && displayedData) {
      const highestValue = displayedData?.reduce((a, b) => Math.max(a, b.totalUsageCount), -Infinity);
      const timeArray = ["12 am", "2 am", "4 am", "6 am", "8 am", "10 am", "12 pm", "2 pm", "4 pm", "6 pm", "8 pm", "10 pm"];
      const daysArray = generateYAxisArray;
      return (
        <>
          <div className="flex flex-row gap-5 w-full max-w-full">
            <div className="flex flex-col justify-between  mb-9 ">
              {daysArray?.map((item) => (
                <p>{item}</p>
              ))}
            </div>

            <div className={` max-lg:overflow-x-auto w-full max-w-full  ${styles.scrollbarThin} `}>
              <div style={{ minWidth: 750, maxWidth: "100%" }}>
                <div className="grid grid-cols-24 gap-x-2.5 gap-y-5  whitespace-nowrap h-fit" style={{ WebkitTransform: "scaleY(-1)", transform: "scaleY(-1)" }}>
                  {displayedData?.map((hourItem, index) => {
                    const { date, hour, totalUsageCount } = hourItem as HourData;
                    const intensity = getIntensity(highestValue as number, totalUsageCount);
                    const color = getColorFromIntensity(intensity);
                    return <div key={`${index}-${date}-${hour}`} className=" h-4 min-w-6 col-span-1 rounded cursor-pointer bg-gray-400" title={`${totalUsageCount} users on ${date}, ${hour}`} style={{ backgroundColor: `${totalUsageCount === 0 ? "#ffffff10" : String(color)}` }} />;
                  })}
                </div>
                <div className="w-full grid grid-cols-12 mt-5">
                  {timeArray.map((time) => (
                    <p className="text-accent text-left">{time}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    //   for weekly data
    if (timeFrame === "weekly" && displayedData) {
      const highestValue = displayedData?.reduce((a, b) => Math.max(a, b.totalUsageCount), -Infinity);
      const timeArray = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
      const weeksArray = generateYAxisArray;
      return (
        <>
          <div className="flex flex-row gap-5  max-w-full">
            <div className="flex flex-col justify-between mb-8">
              {weeksArray?.map((item) => (
                <p className="whitespace-nowrap">{item}</p>
              ))}
            </div>
            <div className={`overflow-x-auto ${styles.scrollbarThin}`}>
              <div style={{ minWidth: 200 }}>
              <div className="grid grid-cols-7 gap-x-2.5 gap-y-5 w-full min-w-72    h-fit " style={{ WebkitTransform: "scaleY(-1)", transform: "scaleY(-1)" }}>
                {displayedData?.map((dayItem, index) => {
                  const { week, date, totalUsageCount } = dayItem as DayData;
                  const intensity = getIntensity(highestValue as number, totalUsageCount);
                  const color = getColorFromIntensity(intensity);
                  return <div key={`${index}-${week}-${date}`} className="h-4 min-w-6 col-span-1 rounded cursor-pointer bg-gray-400" title={`${totalUsageCount} users on ${date}`} style={{ backgroundColor: `${totalUsageCount === 0 ? "#ffffff10" : String(color)}` }} />;
                })}
              </div>
              <div className=" flex flex-row gap-4 mt-5 text-sm">
                {timeArray.map((time) => (
                  <p className="text-accent text-left ">{time}</p>
                ))}
              </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    //   for monthly data
    if (timeFrame === "monthly" && displayedData) {
      // it's grouped first by month because we dont have same number of weeks every month
      const groupedData = groupByMonth(displayedData as WeekData[]).reverse();
      const highestValue = displayedData?.reduce((a, b) => Math.max(a, b.totalUsageCount), -Infinity);
      const highestWeekNumber = getArrayWithMostItems(groupedData).length;
      const timeArray = Array.from({ length: highestWeekNumber }).map((_: unknown, index: number) => `Wk${index + 1}`);
      const monthsArray = generateYAxisArray;
      return (
        <>
          <div className="flex flex-row gap-5 max-w-full ">
            <div className="flex flex-col justify-between mb-8  ">
              {monthsArray?.map((item) => (
                <p>{item}</p>
              ))}
            </div>
            <div className={`overflow-x-auto ${styles.scrollbarThin}`}>
              <div className={`grid grid-rows-${duration} gap-y-6 min-w-fit w-full h-fit `}>
                {groupedData?.map((monthData, monthIndex) => (
                  <div key={monthIndex} className="flex flex-row gap-4">
                    {monthData.map((weekItem, index) => {
                      const { month, year, week, totalUsageCount } = weekItem as WeekData;
                      const intensity = getIntensity(highestValue as number, totalUsageCount);
                      const color = getColorFromIntensity(intensity);
                      return <div key={`${index}-month${month}`} className="h-4 min-w-6 rounded cursor-pointer bg-gray-400" title={`${totalUsageCount} users on week-${week} [${month}/${year}]`} style={{ backgroundColor: `${totalUsageCount === 0 ? "#ffffff10" : String(color)}` }} />;
                    })}
                  </div>
                ))}
              </div>

              <div className="w-full flex flex-row gap-3 min-w-fit mt-5 text-sm">
                {timeArray.map((time) => (
                  <p className="text-accent text-left ">{time}</p>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
  }, [displayedData, duration, generateYAxisArray, timeFrame]);

  return (
    <div className={`${additionalStyles} flex flex-col gap-5 w-full overflow-hidden h-fit shadow-accent rounded-lg shadow-md text-accent px-3 py-6`}>
      {/* header area  */}
      <div className="flex justify-between gap-3 flex-col md:flex-row">
        <h3 className="text-lg xl:text-2xl">Usage By Time Of Day</h3>

        <div className="flex gap-2 flex-col md:flex-row">
          <Select
            options={timeFrameOptions}
            className="w-40 min-w-fit"
            placeholder="Daily"
            onSelect={(val: UsageDataTimeFrame) => {
              if (val === "daily") {
                setTimeFrame("daily");
                setDuration(7);
                setDurationOptions(durationDailyOptions);
              }
              if (val === "weekly") {
                setTimeFrame("weekly");
                setDuration(4);
                setDurationOptions(durationWeeklyOptions);
              }
              if (val === "monthly") {
                setTimeFrame("monthly");
                setDuration(12);
                setDurationOptions(durationMonthlyOptions);
              }
            }}
          />
          <Select options={durationOptions} placeholder={timeFrame === "weekly" ? "Last 4 Weeks" : timeFrame === "monthly" ? "Last 12 Months" : timeFrame === "daily" ? "Last 7 Days" : "Last 7 Days"} onSelect={(val: number) => setDuration(val)} />
        </div>
      </div>

      {/* heat map */}
      {renderedMap()}
    </div>
  );
};

export default UsageHeatMap;
