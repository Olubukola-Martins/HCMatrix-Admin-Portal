import { Form, Input, Modal, Select } from "antd";
import { PropToValues } from "components/detail";
import { ModalTitle } from "components/modal";
import React, { useState } from "react";

const RenewalDetails: React.FC<{ trigger?: React.ReactNode }> = ({
  trigger = <span>View Details</span>,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [form] = Form.useForm<{ dueDate: string }>();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Renewal Details" />}
      >
        <div className="space-y-8">
          <PropToValues
            data={[
              {
                key: "Payment Method",
                value: "Wallet",
              },
            ]}
          />
          <Form
            labelCol={{ span: 24 }}
            requiredMark={false}
            form={form}
            disabled
          >
            <Form.Item label="Due Date" name={`dueDate`}>
              <Input />
            </Form.Item>
            <Form.Item label="Account Name">
              <Input />
            </Form.Item>
            <div className="grid grid-cols-2 gap-x-6">
              <Form.Item label="Location">
                <Input />
              </Form.Item>
              <Form.Item label="Industry">
                <Input />
              </Form.Item>
              <Form.Item label="Account ID">
                <Input />
              </Form.Item>
              <Form.Item label="Module">
                <Input />
              </Form.Item>
              <Form.Item label="Number of Admin License(s)">
                <Input />
              </Form.Item>
              <Form.Item label="Number of Employee License(s)">
                <Input />
              </Form.Item>
            </div>
            <Form.Item label="Add-ons">
              <Select mode="multiple" options={[]} />
            </Form.Item>
            <Form.Item label="Subscription Type">
              <Input />
            </Form.Item>
            <Form.Item label="Total Amount">
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <div className="cursor-pointer">{trigger}</div>
    </>
  );
};

export default RenewalDetails;
