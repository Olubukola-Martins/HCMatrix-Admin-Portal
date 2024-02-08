import { Table } from "antd";

const SpecificDiscountsTable = () => {
  return (
    <Table
      scroll={{ x: "max-content" }}
      columns={[
        {
          title: "Account/Company",
        },
        {
          title: "Discount Rate(%)",
        },
        {
          title: "Start Date",
        },

        {
          title: "End Date",
        },
      ]}
      dataSource={[]}
    />
  );
};

export default SpecificDiscountsTable;
