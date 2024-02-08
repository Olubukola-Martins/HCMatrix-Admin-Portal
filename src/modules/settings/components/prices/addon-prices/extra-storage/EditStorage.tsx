import { Button, Form, Input, Modal, Select } from "antd";
import { ModalTitle } from "components/modal";
import { storageUnitOptions } from "constants";
import React, { useState } from "react";

const EditStorage: React.FC<{
  trigger?: React.ReactNode;
  caseId: number;
}> = ({
  trigger = <button className="hover:text-primary text-accent">Edit</button>,
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
        title={<ModalTitle text="Edit Support Case" />}
        footer={null}
      >
        <Form labelCol={{ span: 24 }} requiredMark={false} form={form}>
          <Form.Item label="Name" name={`name`}>
            <Input placeholder="Name" />
          </Form.Item>
          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item label="Price in Ngn" name={`priceInNgn`}>
              <Input placeholder="Price in Ngn" />
            </Form.Item>
            <Form.Item label="Price in Usd" name={`priceInUsd`}>
              <Input placeholder="Price in Usd" />
            </Form.Item>
            <Form.Item label="Size" name={`size`}>
              <Input placeholder="Size" />
            </Form.Item>
            <Form.Item label="Unit" name={`unit`}>
              <Select
                placeholder="Unit"
                options={storageUnitOptions.map((item) => ({
                  label: item,
                  value: item,
                }))}
              />
            </Form.Item>
          </div>
          <Form.Item label="Description" name={`name`}>
            <Input.TextArea placeholder="Description" />
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

export default EditStorage;
