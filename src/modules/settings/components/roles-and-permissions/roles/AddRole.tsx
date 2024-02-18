import { Button, Form, Input, Modal } from "antd";
import { ModalTitle } from "components/modal";
import {
  TCreateRoleInput,
  useCreateRole,
} from "lib/api/roles-and-permissions/role/create-role";
import { textInputValidationRules } from "lib/validation";
import React, { useState } from "react";

const AddRole: React.FC<{ trigger?: React.ReactNode }> = ({
  trigger = <Button type="primary">Add Custom Role</Button>,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [form] = Form.useForm<TCreateRoleInput>();
  const { mutate, isLoading } = useCreateRole();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Add Custom Role" />}
        footer={null}
      >
        <Form
          labelCol={{ span: 24 }}
          requiredMark={false}
          form={form}
          onFinish={(data) => {
            mutate(data, {
              onSuccess: () => {
                handleClose();
                form.resetFields();
              },
            });
          }}
        >
          <Form.Item
            label="Role Name"
            name={`name`}
            rules={textInputValidationRules}
          >
            <Input placeholder="Role Name" />
          </Form.Item>
          <div className="mt-4 flex justify-between items-center">
            <Button type="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={isLoading}>
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

export default AddRole;
