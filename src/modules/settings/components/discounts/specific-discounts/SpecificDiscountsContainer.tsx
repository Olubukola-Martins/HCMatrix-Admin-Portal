import ExportEnitity from "components/entity/ExportEnitity";
import { PageLayout } from "components/layouts";
import AddSpecificDiscount from "./AddSpecificDiscount";
import SpecificDiscountsTable from "./SpecificDiscountsTable";

const SpecificDiscountsContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Specific Discounts",
        },
        supportingComp: (
          <div>
            <div className="flex items-center gap-x-4">
              <ExportEnitity />
              <AddSpecificDiscount />
            </div>
          </div>
        ),
      }}
    >
      <SpecificDiscountsTable />
    </PageLayout>
  );
};

export default SpecificDiscountsContainer;
