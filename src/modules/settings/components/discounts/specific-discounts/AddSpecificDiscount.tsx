import { Button, DatePicker, Form, InputNumber, Modal, Select } from "antd";
import { FormCompanyInput } from "components/form/FormCompanyInput";
import { ModalTitle } from "components/modal";
import { DEFAULT_DATE_FORMAT, discountTypeOptions } from "constants";
import { Dayjs } from "dayjs";
import {
  TCreateDiscountInput,
  useCreateDiscount,
} from "lib/api/subscription/discount/create-discount";
import {
  dateHasToBeGreaterThanOrEqualToCurrentDayRuleForRange,
  generalValidationRules,
  numberHasToBeGreaterThanValueRule,
} from "lib/validation";
import React, { useState } from "react";

const AddSpecificDiscount: React.FC<{ trigger?: React.ReactNode }> = ({
  trigger = <Button type="primary">Add New</Button>,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [form] = Form.useForm<
    Omit<TCreateDiscountInput, "startDate" | "endDate"> & {
      duration?: [Dayjs, Dayjs];
    }
  >();
  const { mutate, isLoading } = useCreateDiscount();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Add Specific Discount" />}
        footer={null}
      >
        <Form
          labelCol={{ span: 24 }}
          requiredMark={false}
          form={form}
          onFinish={(data) => {
            const formattedData = {
              ...data,
              endDate: data?.duration?.[1].format(DEFAULT_DATE_FORMAT) ?? "",
              startDate: data?.duration?.[0].format(DEFAULT_DATE_FORMAT) ?? "",
            };
            delete formattedData.duration;
            mutate(
              {
                ...formattedData,
              },
              {
                onSuccess: () => {
                  handleClose();
                  form.resetFields();
                },
              }
            );
          }}
        >
          <FormCompanyInput
            Form={Form}
            control={{ label: "Account/Company", name: "companyId" }}
          />

          <Form.Item
            label="Discount Type"
            name={`type`}
            rules={generalValidationRules}
          >
            <Select
              placeholder="Discount Type"
              options={discountTypeOptions.map((item) => ({
                label: <span className="capitalize">{item}</span>,
                value: item,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Discount Rate(%)"
            name={`value`}
            rules={[numberHasToBeGreaterThanValueRule(0)]}
          >
            <InputNumber placeholder="Discount Rate(%)" className="w-full" />
          </Form.Item>
          <Form.Item
            label="Duration"
            name={`duration`}
            rules={[dateHasToBeGreaterThanOrEqualToCurrentDayRuleForRange]}
          >
            <DatePicker.RangePicker
              placeholder={["Start Date", "End Date"]}
              className="w-full"
            />
          </Form.Item>
          <div className="mt-4 flex justify-between items-center">
            <Button type="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Save
            </Button>
          </div>
        </Form>
      </Modal>
      <div className="cursor-pointer" onClick={handleOpen}>
        {trigger}
      </div>
    </>
  );
};

export default AddSpecificDiscount;
