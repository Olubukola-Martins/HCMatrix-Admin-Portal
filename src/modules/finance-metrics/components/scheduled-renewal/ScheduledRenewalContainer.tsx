import { Tag } from "antd";
import { PageLayout } from "components/layouts";
import ScheduledRenewalTable from "./ScheduledRenewalTable";
import FilterEnitity, { TFilterFormProps } from "../filter/FilterEnitity";
import ExportEnitity from "components/entity/ExportEnitity";
import { useState } from "react";

const ScheduledRenewalContainer = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [filter, setFilter] = useState<TFilterFormProps>({});
  return (
    <PageLayout
      header={{
        title: {
          text: "Scheduled Renewal",
        },
        supportingComp: (
          <div className="flex-1 ml-4 flex justify-between items-center">
            <Tag>{totalCount}</Tag>
            <div className="flex items-center gap-x-4">
              <ExportEnitity />
              <FilterEnitity handleSubmit={{ fn: (val) => setFilter(val) }} />
            </div>
          </div>
        ),
      }}
    >
      <ScheduledRenewalTable
        handleTotalCount={(val) => setTotalCount(val)}
        filter={filter}
      />
    </PageLayout>
  );
};

export default ScheduledRenewalContainer;
