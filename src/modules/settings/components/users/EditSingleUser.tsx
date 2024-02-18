import { Button, Form, Input, Modal } from "antd";
import { FormRoleInput } from "components/form/FormRoleInput";
import { ModalTitle } from "components/modal";
import { TUser } from "lib/api/user/get-user";
import { TUpdateUserInput, useUpdateUser } from "lib/api/user/update-user";
import { textInputValidationRules } from "lib/validation";
import React, { useEffect } from "react";

const EditSingleUser: React.FC<{
  open: boolean;
  handleClose: () => void;
  user: Pick<TUser, "user" | "id" | "firstName" | "lastName" | "role">;
}> = ({ open, handleClose, user }) => {
  const [form] = Form.useForm<TUpdateUserInput["data"]>();
  const { mutate, isLoading } = useUpdateUser();
  useEffect(() => {
    form.setFieldsValue({
      firstName: user.firstName,
      lastName: user.lastName,
      roleId: user.role.id,
    });
  }, [form, user]);
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Edit User" />}
        footer={null}
      >
        <Form
          labelCol={{ span: 24 }}
          requiredMark={false}
          form={form}
          onFinish={(data) => {
            mutate(
              {
                data,
                id: user.id,
              },
              {
                onSuccess: () => {
                  handleClose();
                  form.resetFields();
                },
              }
            );
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

export default EditSingleUser;
