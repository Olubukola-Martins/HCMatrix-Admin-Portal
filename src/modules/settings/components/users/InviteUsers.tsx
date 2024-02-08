import { Button, Form, Input, Modal } from "antd";
import { ModalTitle } from "components/modal";
import { listOfEmailValidationRule } from "lib/validation";
import React from "react";

const InviteUsers: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const [form] = Form.useForm<{ dueDate: string }>();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Invite Users" />}
        footer={null}
      >
        <Form labelCol={{ span: 24 }} requiredMark={false} form={form}>
          <Form.Item
            label="Email(s)"
            name={`name`}
            rules={[listOfEmailValidationRule]}
          >
            <Input.TextArea rows={7} placeholder="Emails" />
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

export default InviteUsers;
