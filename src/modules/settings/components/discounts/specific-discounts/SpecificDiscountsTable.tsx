import { Table } from "antd";
import { DEFAULT_DATE_FORMAT } from "constants";
import { usePagination } from "hooks/utils/usePagination";
import { useGetDiscounts } from "lib/api/subscription/discount";
import moment from "moment";
import DiscountActions from "./DiscountActions";

const SpecificDiscountsTable = () => {
  const { pagination, onChange } = usePagination();
  const { data, isLoading } = useGetDiscounts();
  return (
    <Table
      loading={isLoading}
      scroll={{ x: "max-content" }}
      pagination={{ ...pagination, onChange }}
      columns={[
        {
          title: "Account/Company",
          render: (_, item) => (
            <span className="capitalize">{item.company.name}</span>
          ),
        },
        {
          title: "Discount Rate(%)",
          render: (_, item) => <span className="capitalize">{item.value}</span>,
        },
        {
          title: "Start Date",
          render: (_, item) => (
            <span className="">
              {moment(item.startDate).format(DEFAULT_DATE_FORMAT)}
            </span>
          ),
        },

        {
          title: "End Date",
          render: (_, item) => (
            <span className="">
              {moment(item.endDate).format(DEFAULT_DATE_FORMAT)}
            </span>
          ),
        },
        {
          title: "",
          render: (_, item) => <DiscountActions discount={item} />,
        },
      ]}
      dataSource={data?.data.result}
    />
  );
};

export default SpecificDiscountsTable;
