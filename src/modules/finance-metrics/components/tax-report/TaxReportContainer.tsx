import { Tag, Button } from "antd";
import { PageLayout } from "components/layouts";
import { TbFileExport } from "react-icons/tb";
import TaxReportTable from "./TaxReportTable";
import FilterEnitity from "../filter/FilterEnitity";

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
              <Button
                icon={<TbFileExport className="text-2xl" />}
                size="large"
                type="text"
              />
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
