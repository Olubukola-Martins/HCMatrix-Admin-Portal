import { Button, DatePicker, Form, Input, Modal } from "antd";
import { ModalTitle } from "components/modal";
import { dateHasToBeGreaterThanOrEqualToCurrentDayRule } from "lib/validation";
import React, { useState } from "react";

const UpdateDiscountEndDate: React.FC<{
  trigger?: React.ReactNode;
  discountId: number;
}> = ({ trigger = <Button type="primary">Change End Date</Button> }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [form] = Form.useForm<{ dueDate: string }>();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Change Specific Discount End Date" />}
        footer={null}
      >
        <Form labelCol={{ span: 24 }} requiredMark={false} form={form}>
          <Form.Item label="Account/Company" name={`name`}>
            <Input placeholder="Account/Company" />
          </Form.Item>

          <Form.Item
            label="End Date"
            name={`name`}
            rules={[dateHasToBeGreaterThanOrEqualToCurrentDayRule]}
          >
            <DatePicker placeholder={"End Date"} className="w-full" />
          </Form.Item>
          <div className="mt-4 flex justify-between items-center">
            <Button type="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="primary">Save</Button>
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
