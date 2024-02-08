import { PageLayout } from "components/layouts";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { Tag } from "antd";
import FilterEnitity from "../filter/FilterEnitity";
import ExportEnitity from "components/entity/ExportEnitity";

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
              <ExportEnitity />
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
