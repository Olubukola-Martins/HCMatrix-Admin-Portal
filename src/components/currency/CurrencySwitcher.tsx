import { Segmented } from "antd";
import useHandleCurrency from "hooks/currency/useHandleCurrency";
import { TCurrency } from "types";

const options: TCurrency[] = ["usd", "ngn"];
const CurrencySwitcher = () => {
  const { handleCurrencySelection, selectedCurrency } = useHandleCurrency();
  return (
    <Segmented
      value={selectedCurrency}
      onChange={(val) => handleCurrencySelection(val as unknown as TCurrency)}
      options={options.map((item) => ({
        label: <span className="uppercase">{item}</span>,
        value: item,
      }))}
    />
  );
};

export default CurrencySwitcher;
