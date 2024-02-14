import { Typography, DatePicker } from "antd";
import CurrencySwitcher from "components/currency/CurrencySwitcher";
import { SelectCountry } from "components/selection/SelectCountry";
import { DEFAULT_START_DATE, DEFAULT_END_DATE } from "constants";
import dayjs, { Dayjs } from "dayjs";
import useHandleCurrency from "hooks/currency/useHandleCurrency";
import React, { useState } from "react";

const IncomePerCardHeader: React.FC<{
  title: string;
  duration: [Dayjs, Dayjs];
  setDuration: React.Dispatch<React.SetStateAction<[Dayjs, Dayjs]>>;
  countryIds: number[];
  setCountryIds: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ countryIds, duration, setCountryIds, setDuration, title }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-4 justify-between my-4 lg:my-0">
      <Typography.Title level={5}>
        <span className="font-light capitalize">{title}</span>
      </Typography.Title>
      <div className="space-x-4 flex flex-row">
        <DatePicker.RangePicker
          placeholder={["From", "To"]}
          value={duration}
          onChange={(vals) =>
            vals &&
            vals?.length >= 2 &&
            vals[0] &&
            vals[1] &&
            setDuration([vals[0], vals[1]])
          }
        />
        <SelectCountry
          value={countryIds}
          handleSelect={(val) =>
            typeof val === "number" && setCountryIds([val])
          }
          placeholder={"Location"}
          handleClear={() => setCountryIds([])}
        />
        <CurrencySwitcher />
      </div>
    </div>
  );
};
export const useIncomePerHeaderControls = () => {
  const { selectedCurrency } = useHandleCurrency();
  const [countryIds, setCountryIds] = useState<number[]>([]);
  const [duration, setDuration] = useState<[Dayjs, Dayjs]>([
    dayjs(DEFAULT_START_DATE),
    dayjs(DEFAULT_END_DATE),
  ]);
  return { selectedCurrency, countryIds, duration, setDuration, setCountryIds };
};
export default IncomePerCardHeader;
