import { Table } from "antd";

const InvitedUsersTable: React.FC = () => {
  return (
    <Table
      scroll={{ x: "max-content" }}
      columns={[
        {
          title: "Name",
        },
        {
          title: "Email",
        },
        {
          title: "Last Sent",
        },

        {
          title: "Action",
        },
      ]}
      dataSource={[]}
    />
  );
};

export default InvitedUsersTable;
