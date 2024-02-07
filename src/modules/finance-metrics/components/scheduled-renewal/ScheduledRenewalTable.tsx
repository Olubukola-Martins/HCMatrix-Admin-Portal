import { Table } from "antd";

const ScheduledRenewalTable = () => {
  return (
    <Table
      scroll={{ x: "max-content" }}
      columns={[
        {
          title: "Due Date",
          dataIndex: "dueDate",
        },
        {
          title: "Account Name",
          dataIndex: "accountName",
        },
        {
          title: "Account ID",
          dataIndex: "accountID",
        },
        {
          title: "Subcription Type",
          dataIndex: "subscriptionType",
        },
        {
          title: "Module(s)",
          dataIndex: "module",
        },
        {
          title: "No of Licensed Users",
          dataIndex: "li_users",
        },
        {
          title: "No of Unlicensed Users",
          dataIndex: "un_li_users",
        },
        {
          title: "Total Amount",
          dataIndex: "totalAmount",
        },
      ]}
      dataSource={[]}
    />
  );
};

export default ScheduledRenewalTable;
