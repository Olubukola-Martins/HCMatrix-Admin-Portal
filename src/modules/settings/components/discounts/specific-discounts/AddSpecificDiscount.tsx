import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { ModalTitle } from "components/modal";
import { discountTypeOptions } from "constants";
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
  const [form] = Form.useForm<{ dueDate: string }>();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Add Specific Discount" />}
        footer={null}
      >
        <Form labelCol={{ span: 24 }} requiredMark={false} form={form}>
          <Form.Item label="Account/Company" name={`name`}>
            <Input placeholder="Account/Company" />
          </Form.Item>
          <Form.Item label="Discount Type" name={`type`}>
            <Select
              placeholder="Discount Type"
              options={discountTypeOptions.map((item) => ({
                label: <span className="capitalize">{item}</span>,
                value: item,
              }))}
            />
          </Form.Item>
          <Form.Item label="Discount Rate(%)" name={`name`}>
            <Input placeholder="Discount Rate(%)" />
          </Form.Item>
          <Form.Item label="Duration" name={`name`}>
            <DatePicker.RangePicker
              placeholder={["Start Date", "End Date"]}
              className="w-full"
            />
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

export default AddSpecificDiscount;
