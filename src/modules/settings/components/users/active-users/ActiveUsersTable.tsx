import { Table } from "antd";
import React from "react";

const ActiveUsersTable: React.FC = () => {
  return (
    <Table
      scroll={{ x: "max-content" }}
      columns={[
        {
          title: "Name",
        },
        {
          title: "User ID",
        },
        {
          title: "Role",
        },
        {
          title: "Email",
        },
        {
          title: "Action",
        },
      ]}
      dataSource={[]}
    />
  );
};

export default ActiveUsersTable;
