import { Tag } from "antd";
import { PageLayout } from "components/layouts";
import TaxReportTable from "./TaxReportTable";
import FilterEnitity from "../filter/FilterEnitity";
import ExportEnitity from "components/entity/ExportEnitity";

const TaxReportContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Tax Report",
        },
        supportingComp: (
          <div className="flex-1 ml-4 flex justify-between items-center">
            <Tag>200</Tag>
            <div className="flex items-center gap-x-4">
              <ExportEnitity />
              <FilterEnitity
                itemsToDisplay={[
                  "billing-cycle",
                  "countries",
                  "industry",
                  "duration",
                ]}
              />
            </div>
          </div>
        ),
      }}
    >
      <TaxReportTable />
    </PageLayout>
  );
};

export default TaxReportContainer;
