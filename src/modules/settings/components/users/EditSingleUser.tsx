import { Button, Form, Input, Modal } from "antd";
import { ModalTitle } from "components/modal";
import React from "react";

const EditSingleUser: React.FC<{
  open: boolean;
  handleClose: () => void;
  userId: number;
}> = ({ open, handleClose }) => {
  const [form] = Form.useForm<{ dueDate: string }>();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Edit User" />}
        footer={null}
      >
        <Form labelCol={{ span: 24 }} requiredMark={false} form={form}>
          <Form.Item label="User Name" name={`name`}>
            <Input placeholder="User Name" />
          </Form.Item>
          <Form.Item label="Email" name={`email`}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Role" name={`Role`}>
            <Input placeholder="Role" />
          </Form.Item>
          <div className="mt-4 flex justify-between items-center">
            <Button type="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="primary">Save</Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default EditSingleUser;
