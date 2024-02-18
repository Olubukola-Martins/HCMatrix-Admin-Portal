import { Collapse, theme } from "antd";
import { PageLayout } from "components/layouts";
import ModulePriceForm from "./module-prices/ModulePriceForm";
import AddOnForm from "./addon-prices/AddOnForm";
import VatForm from "./vat/VatForm";
import { useUpdateLicensedPrices } from "lib/api/subscription/prices/update-licensed-prices";
import { useHandleVat } from "lib/api/subscription/vat/handle-vat";

const PricesContainer = () => {
  const { token } = theme.useToken();
  const { mutate: updatePrices, isLoading: isUpdatingPrices } =
    useUpdateLicensedPrices();
  const { mutate: handleVat, isLoading: isUpdatingVat } = useHandleVat();
  const panelStyle: React.CSSProperties = {
    marginBottom: 15,
    background: "var(--background)",
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <PageLayout
      header={{
        title: {
          text: "Prices",
        },
      }}
    >
      <div className="bg-card lg:px-12 lg:py-10 px-6 py-4 flex flex-col gap-y-4 rounded-md">
        <Collapse
          accordion
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="right"
          className="bg-transparent"
          items={[
            {
              key: "1",
              label: (
                <span className="text-lg font-bold">Set Module Prices</span>
              ),
              children: (
                <ModulePriceForm
                  onSubmit={{
                    isLoading: isUpdatingPrices,
                    fn: ({ prices, currency }) => {
                      updatePrices({
                        prices: prices.map((price) => ({
                          monthlyPricePerLicensedEmployee:
                            price.monthlyPricePerLicensedEmployee,
                          subscriptionId: price.subscriptionId,
                          yearlyPricePerLicensedEmployee:
                            price.yearlyPricePerLicensedEmployee,
                          type: currency,
                        })),
                      });
                    },
                  }}
                />
              ),
              style: panelStyle,
            },
            {
              key: "2",
              label: <span className="text-lg font-bold">Add-ons</span>,
              children: <AddOnForm />,
              style: panelStyle,
            },
            {
              label: <span className="text-lg font-bold">VAT</span>,
              key: "3",
              children: (
                <VatForm
                  onSubmit={{ isLoading: isUpdatingVat, fn: handleVat }}
                />
              ),
              style: panelStyle,
            },
          ]}
        />
      </div>
    </PageLayout>
  );
};

export default PricesContainer;
