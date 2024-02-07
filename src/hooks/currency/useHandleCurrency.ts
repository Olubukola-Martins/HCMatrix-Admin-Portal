import { CurrencyContext } from "components/providers/CurrencyContextProvider";
import { useContext } from "react";

const useHandleCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error(
      "useHandleCurrency must be used within a CurrencyContextProvider"
    );
  }
  const { handleCurrencySelection, selectedCurrency } = context;
  return { handleCurrencySelection, selectedCurrency };
};

export default useHandleCurrency;
