import { Table } from "antd";
import {
  DEFAULT_DATE_FORMAT,
  DEFAULT_END_DATE,
  DEFAULT_START_DATE,
} from "constants";
import { usePagination } from "hooks/utils/usePagination";
import { useGetScheduledRenewals } from "lib/api/finance-metrics/scheduled-renewal";
import moment from "moment";
import { useEffect } from "react";
import { TFilterFormProps } from "../filter/FilterEnitity";
import dayjs from "dayjs";

const ScheduledRenewalTable: React.FC<{
  handleTotalCount: (val: number) => void;
  filter?: TFilterFormProps;
}> = ({ handleTotalCount, filter = {} }) => {
  const { billingCycle, countryIds, industryIds, modules, duration } = filter;
  const { onChange, pagination } = usePagination();
  const { data, isLoading } = useGetScheduledRenewals({
    duration: {
      startDate:
        dayjs(duration?.[0]).format(DEFAULT_DATE_FORMAT) ?? DEFAULT_START_DATE,
      endDate:
        dayjs(duration?.[1]).format(DEFAULT_DATE_FORMAT) ?? DEFAULT_END_DATE,
    },
    billingCycle,
    countryIds,
    industryIds,
    modules,
    pagination,
  });
  useEffect(() => {
    data && handleTotalCount(data.data.totalCount);
  }, [data, handleTotalCount]);
  return (
    <Table
      loading={isLoading}
      pagination={{
        ...pagination,
        onChange,
      }}
      dataSource={data?.data.result}
      scroll={{ x: "max-content" }}
      columns={[
        {
          title: "Due Date",
          dataIndex: "dueDate",
          render: (_, val) => (
            <span>{moment(val.endDate).format(DEFAULT_DATE_FORMAT)}</span>
          ),
        },
        {
          title: "Account Name",
          dataIndex: "accountName",
          render: (_, val) => <span>{val.company.name}</span>,
        },
        {
          title: "Account ID",
          dataIndex: "accountID",
          render: (_, val) => (
            <span>{val.company.id.toString().padStart(3, "0")}</span>
          ),
        },
        {
          title: "Subcription Type",
          dataIndex: "subscriptionType",
          render: (_, val) => (
            <span className="capitalize">
              {val.purchased?.[0]?.subscription?.type}
            </span>
          ),
        },
        {
          title: "Module(s)",
          dataIndex: "module",
          render: (_, val) => (
            <span>
              {val.purchased.map((item) => item.subscription.name).join(",")}
            </span>
          ),
        },
        {
          title: "No of Licensed Users",
          dataIndex: "li_users",
          render: (_, val) => <span>{val.licensedEmployeeCount}</span>,
        },
        {
          title: "No of Unlicensed Users",
          dataIndex: "un_li_users",
          render: (_, val) => <span>{val.unlicensedEmployeeCount}</span>,
        },
        {
          title: "Total Amount",
          dataIndex: "totalAmount",
          render: (_, val) => <span>{val.transaction.totalAmountPaid}</span>,
        },
      ]}
    />
  );
};

export default ScheduledRenewalTable;
