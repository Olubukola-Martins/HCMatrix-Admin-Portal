import { Button, Tag } from "antd";
import { PageLayout } from "components/layouts";
import { TbFileExport } from "react-icons/tb";
import ScheduledRenewalTable from "./ScheduledRenewalTable";
import FilterEnitity from "../filter/FilterEnitity";

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
              <Button
                icon={<TbFileExport className="text-2xl" />}
                size="large"
                type="text"
              />
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
