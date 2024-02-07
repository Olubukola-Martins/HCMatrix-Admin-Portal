import { PageLayout } from "components/layouts";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { Tag, Button } from "antd";
import { TbFileExport } from "react-icons/tb";
import FilterEnitity from "../filter/FilterEnitity";

const TransactionHistoryContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Transaction History",
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
      <TransactionHistoryTable />
    </PageLayout>
  );
};

export default TransactionHistoryContainer;
