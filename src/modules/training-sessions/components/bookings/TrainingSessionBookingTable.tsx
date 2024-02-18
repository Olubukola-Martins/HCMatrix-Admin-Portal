import { Table } from "antd";
import { DEFAULT_DATE_FORMAT } from "constants";
import { usePagination } from "hooks/utils/usePagination";
import { useGetTrainingSessionBookings } from "lib/api/subscription/add-ons/training-session/bookings";
import { getAppropriateColorForStatus } from "lib/utils";
import moment from "moment";
import TrainingSessionBookingActions from "./TrainingSessionBookingActions";
import { generateTrainingSessionBookingActions } from "modules/training-sessions/utils";

const TrainingSessionBookingTable = () => {
  const { pagination, onChange } = usePagination();
  const { data, isLoading } = useGetTrainingSessionBookings({
    pagination,
    orderBy: "desc",
  });
  return (
    <Table
      loading={isLoading}
      pagination={{ ...pagination, onChange }}
      scroll={{ x: "max-content" }}
      columns={[
        {
          title: "Date Requested",
          render: (_, row) => (
            <span>{moment(row.createdAt).format(DEFAULT_DATE_FORMAT)}</span>
          ),
        },
        {
          title: `Company Name`,
          render: (_, row) => (
            <span className="capitalize">{row.company.name}</span>
          ),
        },
        {
          title: "Training Type",
          render: (_, row) => (
            <span className="capitalize">{row.trainingSession.name}</span>
          ),
        },
        {
          title: "Training Date",
          render: (_, row) => (
            <span className="capitalize">
              {moment(row.startDate).format(DEFAULT_DATE_FORMAT)}
            </span>
          ),
        },
        {
          title: "Status",
          render: (_, row) => (
            <span
              className="capitalize"
              style={{ color: getAppropriateColorForStatus(row.status) }}
            >
              {row.status}
            </span>
          ),
        },
        {
          title: "Action",
          render: (_, row) => (
            <TrainingSessionBookingActions
              booking={row}
              actions={generateTrainingSessionBookingActions(row.status)}
            />
          ),
        },
      ]}
      dataSource={data?.data.result}
    />
  );
};

export default TrainingSessionBookingTable;
