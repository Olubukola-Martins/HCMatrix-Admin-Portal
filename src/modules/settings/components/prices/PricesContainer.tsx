import { Collapse, CollapseProps, theme } from "antd";
import { PageLayout } from "components/layouts";
import ModulePriceForm from "./module-prices/ModulePriceForm";
import AddOnForm from "./addon-prices/AddOnForm";
import VatForm from "./vat/VatForm";

const getItems: (panelStyle: React.CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: <span className="text-lg font-bold">Set Module Prices</span>,
    children: <ModulePriceForm />,
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
    children: <VatForm />,
    style: panelStyle,
  },
];
const PricesContainer = () => {
  const { token } = theme.useToken();

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
          items={getItems(panelStyle)}
        />
      </div>
    </PageLayout>
  );
};

export default PricesContainer;
