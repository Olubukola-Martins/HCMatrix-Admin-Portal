import { Button, DatePicker, Form, Input, Modal } from "antd";
import { ModalTitle } from "components/modal";
import dayjs from "dayjs";
import { TDiscount } from "lib/api/subscription/discount";
import {
  TUpdateDiscountEndDateInput,
  useUpdateDiscountEndDate,
} from "lib/api/subscription/discount/update-end-date";
import { dateHasToBeGreaterThanOrEqualToCurrentDayRule } from "lib/validation";
import React, { useState } from "react";

const UpdateDiscountEndDate: React.FC<{
  trigger?: React.ReactNode;
  discount: Pick<TDiscount, "id" | "company" | "endDate">;
}> = ({
  trigger = <Button type="primary">Change End Date</Button>,
  discount,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [form] = Form.useForm<TUpdateDiscountEndDateInput["data"]>();
  const { mutate, isLoading } = useUpdateDiscountEndDate();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Change Specific Discount End Date" />}
        footer={null}
      >
        <Form
          labelCol={{ span: 24 }}
          requiredMark={false}
          form={form}
          initialValues={{
            endDate: dayjs(discount.endDate),
          }}
          onFinish={(data) => {
            mutate(
              {
                data,
                id: discount.id,
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
          <Form.Item label="Account/Company">
            <Input
              placeholder="Account/Company"
              disabled
              value={discount.company.name}
            />
          </Form.Item>

          <Form.Item
            label="End Date"
            name={`endDate`}
            rules={[dateHasToBeGreaterThanOrEqualToCurrentDayRule]}
          >
            <DatePicker placeholder={"End Date"} className="w-full" />
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

export default UpdateDiscountEndDate;
