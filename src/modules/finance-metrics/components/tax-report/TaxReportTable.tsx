import { Table } from "antd";
import {
  DEFAULT_DATE_FORMAT,
  DEFAULT_START_DATE,
  DEFAULT_END_DATE,
} from "constants";
import dayjs from "dayjs";
import { usePagination } from "hooks/utils/usePagination";
import { useGetTaxReports } from "lib/api/finance-metrics/tax-report";
import moment from "moment";
import { useEffect } from "react";
import { TFilterFormProps } from "../filter/FilterEnitity";

const TaxReportTable: React.FC<{
  handleTotalCount: (val: number) => void;
  filter?: Omit<TFilterFormProps, "modules">;
}> = ({ handleTotalCount, filter = {} }) => {
  const { billingCycle, countryIds, industryIds, duration } = filter;
  const { onChange, pagination } = usePagination();
  const { data, isLoading } = useGetTaxReports({
    duration: {
      startDate: duration?.[0]
        ? dayjs(duration?.[0]).format(DEFAULT_DATE_FORMAT)
        : DEFAULT_START_DATE,
      endDate: duration?.[1]
        ? dayjs(duration?.[1]).format(DEFAULT_DATE_FORMAT)
        : DEFAULT_END_DATE,
    },
    billingCycle,
    countryIds,
    industryIds,
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
            <span>{moment(val.createdAt).format(DEFAULT_DATE_FORMAT)}</span>
          ),
        },
        {
          title: "Account Name",
          dataIndex: "accountName",
          render: (_, val) => (
            <span>{val.companySubscription.company.name}</span>
          ),
        },
        {
          title: "Account ID",
          dataIndex: "accountID",
          render: (_, val) => (
            <span>
              {val.companySubscription.company.id.toString().padStart(3, "0")}
            </span>
          ),
        },
        {
          title: "Vat Rate",
          dataIndex: "Vat Rate",
          render: (_, val) => <span>{val.vat}</span>,
        },
        {
          title: "Vat Amount",
          dataIndex: "Vat Amount",
          render: (_, val) => <span>{val.totalAmountPaid}</span>,
        },
      ]}
    />
  );
};

export default TaxReportTable;
