import { Button, Form, Input, Modal } from "antd";
import { ModalTitle } from "components/modal";
import {
  TCreateSupportCaseInput,
  useCreateSupportCase,
} from "lib/api/subscription/add-ons/support-case/create-support-case";
import {
  numberHasToBeGreaterThanValueRule,
  textInputValidationRules,
  textInputValidationRulesOp,
} from "lib/validation";
import React, { useState } from "react";

const AddSupportCase: React.FC<{ trigger?: React.ReactNode }> = ({
  trigger = (
    <button className="text-primary hover:text-accent">Add More</button>
  ),
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [form] = Form.useForm<TCreateSupportCaseInput>();
  const { mutate, isLoading } = useCreateSupportCase();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Add Support Case" />}
        footer={null}
      >
        <Form
          labelCol={{ span: 24 }}
          requiredMark={false}
          form={form}
          onFinish={(data) => {
            mutate(data, { onSuccess: () => handleClose() });
          }}
        >
          <Form.Item
            label="Name"
            name={`name`}
            rules={textInputValidationRules}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              label="Price in Ngn"
              name={`priceInNgn`}
              rules={[numberHasToBeGreaterThanValueRule(0)]}
            >
              <Input placeholder="Price in Ngn" />
            </Form.Item>
            <Form.Item
              label="Price in Usd"
              name={`priceInUsd`}
              rules={[numberHasToBeGreaterThanValueRule(0)]}
            >
              <Input placeholder="Price in Usd" />
            </Form.Item>
          </div>
          <Form.Item
            label="Description"
            name={`description`}
            rules={textInputValidationRulesOp}
          >
            <Input.TextArea placeholder="Description" />
          </Form.Item>
          <div className="mt-4 flex justify-between items-center">
            <Button type="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="primary" loading={isLoading} htmlType="submit">
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

export default AddSupportCase;
