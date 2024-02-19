import {
  Button,
  Checkbox,
  DatePicker,
  Drawer,
  Form,
  Radio,
  Select,
  Skeleton,
} from "antd";
import { ModalTitle } from "components/modal";
import { billingCycleOptions, moduleOptions } from "constants";
import { useGetCountries } from "lib/api/country";
import { useGetIndustries } from "lib/api/industry";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { TBillingCycle, TModule } from "types";

type TProps = {
  itemsToDisplay?: (
    | "modules"
    | "countries"
    | "billing-cycle"
    | "industry"
    | "duration"
  )[];
  handleSubmit?: { fn: (props: TFilterFormProps) => void; loading?: boolean };
};

export type TFilterFormProps = Partial<{
  billingCycle: TBillingCycle;
  countryIds: number[];
  industryIds: number[];
  modules: TModule[];
  duration: [string, string]; //startdate, enddate //TODO: Refactor this to use dayjs and actually have the default values to match what is on tables consuming this component
}>;

const FilterEnitity: React.FC<TProps> = ({
  itemsToDisplay = [
    "billing-cycle",
    "modules",
    "countries",
    "duration",
    "industry",
  ],
  handleSubmit,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [form] = Form.useForm<TFilterFormProps>();

  const { data: countries, isFetching: isFetchingCountries } = useGetCountries({
    pagination: { limit: 300 },
  });
  const { data: industries, isFetching: isFetchingIndustries } =
    useGetIndustries({ pagination: { limit: 300 } });
  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        title={<ModalTitle text="Filter By" />}
      >
        <Skeleton
          active
          loading={isFetchingCountries || isFetchingIndustries}
          paragraph={{ rows: 17 }}
        >
          <div className="text-accent">
            <Form
              form={form}
              labelCol={{ span: 24 }}
              requiredMark={false}
              onFinish={handleSubmit?.fn}
            >
              {itemsToDisplay.includes("billing-cycle") && (
                <Form.Item
                  className="border-b border-b-accent pb-4"
                  name={`billingCycle`}
                  label={<span className="text-lg">Billing Cycle</span>}
                >
                  <Radio.Group className="flex flex-col gap-y-4">
                    {billingCycleOptions.map((item, i) => (
                      <Radio value={item} key={i}>
                        <span className="capitalize">{item}</span>
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>
              )}
              {itemsToDisplay.includes("modules") && (
                <Form.Item
                  className="border-b border-b-accent pb-4"
                  name={`modules`}
                  label={<span className="text-lg">Modules</span>}
                >
                  <Checkbox.Group className="grid grid-cols-2 gap-3">
                    {moduleOptions.map((item, i) => (
                      <Checkbox
                        value={item}
                        key={i}
                        className="flex items-center"
                      >
                        <span className="capitalize">
                          {item.split("-").join(" ")}
                        </span>
                      </Checkbox>
                    ))}
                  </Checkbox.Group>
                </Form.Item>
              )}
              {itemsToDisplay.includes("countries") && (
                <Form.Item
                  className="border-b border-b-accent pb-4"
                  name={`countryIds`}
                  label={<span className="text-lg">Country(ies)</span>}
                >
                  <Select
                    mode="multiple"
                    className="w-full"
                    placeholder="Select Country(ies)"
                    options={countries?.data?.result.map((item) => ({
                      label: <span className="capitalize">{item.name}</span>,
                      value: item.id,
                    }))}
                  />
                </Form.Item>
              )}
              {itemsToDisplay.includes("industry") && (
                <Form.Item
                  className="border-b border-b-accent pb-4"
                  name={`industryIds`}
                  label={<span className="text-lg">Industry(ies)</span>}
                >
                  <Select
                    mode="multiple"
                    className="w-full"
                    placeholder="Select Industry(ies)"
                    options={industries?.data?.result.map((item) => ({
                      label: <span className="capitalize">{item.name}</span>,
                      value: item.id,
                    }))}
                  />
                </Form.Item>
              )}
              {itemsToDisplay.includes("duration") && (
                <Form.Item
                  className="border-b border-b-accent pb-4"
                  name={`duration`}
                  label={<span className="text-lg">Duration</span>}
                >
                  <DatePicker.RangePicker
                    className="w-full"
                    placeholder={["Start Date", "End Date"]}
                  />
                </Form.Item>
              )}
              <div className="flex justify-between">
                <Button onClick={handleClose} type="text">
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={handleSubmit?.loading}
                >
                  Apply
                </Button>
              </div>
            </Form>
          </div>
        </Skeleton>
      </Drawer>
      <Button onClick={handleOpen} className="flex gap-x-2 items-center">
        <span>Filter</span>
        <FaAngleDown />
      </Button>
    </>
  );
};

export default FilterEnitity;
