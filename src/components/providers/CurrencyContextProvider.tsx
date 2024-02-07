import React, { createContext, useState } from "react";
import { TCurrency } from "types";

interface IProps {
  children: React.ReactNode;
}
interface ICurrencyContextProps {
  selectedCurrency: TCurrency;
  handleCurrencySelection: (currency: TCurrency) => void;
}
export const CurrencyContext = createContext<ICurrencyContextProps>({
  selectedCurrency: "usd",
  handleCurrencySelection: () => {},
});
const CurrencyContextProvider = ({ children }: IProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<TCurrency>("usd");
  const handleCurrencySelection = (currency: TCurrency) => {
    setSelectedCurrency(currency);
  };

  return (
    <CurrencyContext.Provider
      value={{ handleCurrencySelection, selectedCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
