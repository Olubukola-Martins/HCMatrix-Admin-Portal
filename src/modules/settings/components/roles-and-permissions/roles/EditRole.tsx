import { Button, Form, Input, Modal } from "antd";
import { ModalTitle } from "components/modal";
import React, { useState } from "react";

const EditRole: React.FC<{ trigger?: React.ReactNode }> = ({
  trigger = <Button type="primary">Edit Custom Role</Button>,
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
        title={<ModalTitle text="Edit Custom Role" />}
        footer={null}
      >
        <Form labelCol={{ span: 24 }} requiredMark={false} form={form}>
          <Form.Item label="Role Name" name={`name`}>
            <Input placeholder="Role Name" />
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

export default EditRole;
