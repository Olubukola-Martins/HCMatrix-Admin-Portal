import { Button, Form, Input, Modal } from "antd";
import { FormRoleInput } from "components/form/FormRoleInput";
import { ModalTitle } from "components/modal";
import { TCreateUserInput, useCreateUser } from "lib/api/user/create-user";
import { emailValidationRules, textInputValidationRules } from "lib/validation";
import React from "react";

const AddSingleUser: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const [form] = Form.useForm<TCreateUserInput>();
  const { mutate, isLoading } = useCreateUser();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Add User" />}
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
          <div className="grid grid-cols-2 gap-x-4">
            <Form.Item
              label="First Name"
              name={`firstName`}
              rules={textInputValidationRules}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name={`lastName`}
              rules={textInputValidationRules}
            >
              <Input placeholder="last Name" />
            </Form.Item>
          </div>
          <Form.Item label="Email" name={`email`} rules={emailValidationRules}>
            <Input placeholder="Email" />
          </Form.Item>
          <FormRoleInput
            Form={Form}
            control={{ label: "Role", name: "roleId" }}
          />
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
    </>
  );
};

export default AddSingleUser;
