import { Table } from "antd";
import { DEFAULT_DATE_FORMAT } from "constants";
import { usePagination } from "hooks/utils/usePagination";
import { useGetUserInvites } from "lib/api/user/invite";
import moment from "moment";
import InviteActions from "./InviteActions";

const InvitedUsersTable: React.FC = () => {
  const { pagination, onChange } = usePagination();
  const { data, isLoading } = useGetUserInvites({ pagination });
  return (
    <Table
      loading={isLoading}
      pagination={{ ...pagination, onChange }}
      scroll={{ x: "max-content" }}
      columns={[
        {
          title: "Email",
          render: (_, item) => <span className="">{item.email}</span>,
        },

        {
          title: "Created At",
          render: (_, item) => (
            <span className="capitalize">
              {moment(item.createdAt).format(DEFAULT_DATE_FORMAT)}
            </span>
          ),
        },
        {
          title: "Last Sent",
          render: (_, item) => (
            <span className="capitalize">
              {moment(item.lastSent).format(DEFAULT_DATE_FORMAT)}
            </span>
          ),
        },
        {
          title: "",
          render: (_, item) => (
            <InviteActions invite={item} actions={["resend-invite"]} />
          ),
        },
      ]}
      dataSource={data?.data.result}
    />
  );
};

export default InvitedUsersTable;
