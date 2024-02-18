import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import { ModalTitle } from "components/modal";
import { storageUnitOptions } from "constants";
import {
  TCreateExtraStorageInput,
  useCreateExtraStorage,
} from "lib/api/subscription/add-ons/extra-storage/create-extra-storage";
import {
  numberHasToBeGreaterThanValueRule,
  generalValidationRules,
  textInputValidationRulesOp,
} from "lib/validation";
import React, { useState } from "react";

const AddStorage: React.FC<{ trigger?: React.ReactNode }> = ({
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
  const [form] = Form.useForm<TCreateExtraStorageInput>();
  const { mutate, isLoading } = useCreateExtraStorage();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Add Extra Storage" />}
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
          <Form.Item label="Name" name={`name`}>
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
            <Form.Item
              label="Size"
              name={`size`}
              rules={[numberHasToBeGreaterThanValueRule(0)]}
            >
              <InputNumber placeholder="Size" className="w-full" />
            </Form.Item>
            <Form.Item
              label="Unit"
              name={`unit`}
              rules={generalValidationRules}
            >
              <Select
                placeholder="Unit"
                options={storageUnitOptions.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
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

export default AddStorage;
