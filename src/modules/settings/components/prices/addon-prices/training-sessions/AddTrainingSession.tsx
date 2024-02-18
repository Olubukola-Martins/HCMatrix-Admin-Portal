import { Button, Form, Input, InputNumber, Modal } from "antd";
import { ModalTitle } from "components/modal";
import {
  TCreateTrainingSessionInput,
  useCreateTrainingSession,
} from "lib/api/subscription/add-ons/training-session/create-training-session";
import {
  textInputValidationRules,
  numberHasToBeGreaterThanValueRule,
  textInputValidationRulesOp,
} from "lib/validation";
import React, { useState } from "react";

const AddTrainingSession: React.FC<{ trigger?: React.ReactNode }> = ({
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
  const [form] = Form.useForm<TCreateTrainingSessionInput>();
  const { mutate, isLoading } = useCreateTrainingSession();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Add Training Session" />}
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
              <InputNumber placeholder="Price in Ngn" className="w-full" />
            </Form.Item>
            <Form.Item
              label="Price in Usd"
              name={`priceInUsd`}
              rules={[numberHasToBeGreaterThanValueRule(0)]}
            >
              <InputNumber placeholder="Price in Usd" className="w-full" />
            </Form.Item>
          </div>
          <Form.Item
            label="Number of Hours"
            name={`numberOfHours`}
            rules={[numberHasToBeGreaterThanValueRule(0)]}
          >
            <InputNumber placeholder="Number of Hours" className="w-full" />
          </Form.Item>
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

export default AddTrainingSession;
