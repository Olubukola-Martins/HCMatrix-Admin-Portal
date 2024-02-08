import {  Tag } from "antd";
import { PageLayout } from "components/layouts";
import ScheduledRenewalTable from "./ScheduledRenewalTable";
import FilterEnitity from "../filter/FilterEnitity";
import ExportEnitity from "components/entity/ExportEnitity";

const ScheduledRenewalContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Scheduled Renewal",
        },
        supportingComp: (
          <div className="flex-1 ml-4 flex justify-between items-center">
            <Tag>200</Tag>
            <div className="flex items-center gap-x-4">
              <ExportEnitity />
              <FilterEnitity />
            </div>
          </div>
        ),
      }}
    >
      <ScheduledRenewalTable />
    </PageLayout>
  );
};

export default ScheduledRenewalContainer;
