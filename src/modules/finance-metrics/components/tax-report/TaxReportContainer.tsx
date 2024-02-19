import { Tag } from "antd";
import { PageLayout } from "components/layouts";
import TaxReportTable from "./TaxReportTable";
import FilterEnitity, { TFilterFormProps } from "../filter/FilterEnitity";
import ExportEnitity from "components/entity/ExportEnitity";
import { useState } from "react";

const TaxReportContainer = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [filter, setFilter] = useState<Omit<TFilterFormProps, "modules">>({});
  return (
    <PageLayout
      header={{
        title: {
          text: "Tax Report",
        },
        supportingComp: (
          <div className="flex-1 ml-4 flex justify-between items-center">
            <Tag>{totalCount}</Tag>
            <div className="flex items-center gap-x-4">
              <ExportEnitity />
              <FilterEnitity
                itemsToDisplay={[
                  "billing-cycle",
                  "countries",
                  "industry",
                  "duration",
                ]}
                handleSubmit={{ fn: (val) => setFilter(val) }}
              />
            </div>
          </div>
        ),
      }}
    >
      <TaxReportTable
        handleTotalCount={(val) => setTotalCount(val)}
        filter={filter}
      />
    </PageLayout>
  );
};

export default TaxReportContainer;
