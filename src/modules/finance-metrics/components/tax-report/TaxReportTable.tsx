import { Table } from "antd";

const TaxReportTable = () => {
  return (
    <Table
      scroll={{ x: "max-content" }}
      columns={[
        {
          title: "Date",
          dataIndex: "Date",
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
          title: "Vat Rate",
          dataIndex: "Vat Rate",
        },
        {
          title: "Vat Report",
          dataIndex: "Vat Report",
        },
      ]}
      dataSource={[]}
    />
  );
};

export default TaxReportTable;
