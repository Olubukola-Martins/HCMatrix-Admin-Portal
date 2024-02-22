import { Table } from "antd";
import { usePagination } from "hooks/utils/usePagination";
import { useGetUsers } from "lib/api/user";
import { constructUserFullName } from "lib/utils";
import React from "react";
import UserActions from "../UserActions";

const ActiveUsersTable: React.FC = () => {
  const { pagination, onChange } = usePagination();
  const { data } = useGetUsers({ pagination });
  return (
    <Table
      scroll={{ x: "max-content" }}
      pagination={{ ...pagination, onChange }}
      columns={[
        {
          title: "Name",
          render: (_, item) => (
            <span className="capitalize">{constructUserFullName(item)}</span>
          ),
        },
        {
          title: "User ID",
          render: (_, item) => (
            <span className="uppercase">
              {item.id.toString().padStart(3, "0")}
            </span>
          ),
        },
        {
          title: "Role",
          render: (_, item) => (
            <span className="capitalize">{item.role.name}</span>
          ),
        },
        {
          title: "Email",
          render: (_, item) => (
            <span className="lowercase">{item.user.email}</span>
          ),
        },
        {
          title: "Action",
          render: (_, item) => (
            <UserActions user={item} actions={["delete-user", "edit-user"]} />
          ),
        },
      ]}
      // TODO: Ensure all table components have a key
      dataSource={data?.data.result.map((item) => ({
        ...item,
        key: item.id,
      }))}
    />
  );
};

export default ActiveUsersTable;
