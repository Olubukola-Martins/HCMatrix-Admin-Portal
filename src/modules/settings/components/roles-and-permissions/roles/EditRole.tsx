import { Button, Form, Input, Modal, Skeleton } from "antd";
import { ModalTitle } from "components/modal";
import { useGetSingleRole } from "lib/api/roles-and-permissions/role/get-role";
import {
  TUpdateRoleInput,
  useUpdateRole,
} from "lib/api/roles-and-permissions/role/update-role";
import { textInputValidationRules } from "lib/validation";
import React, { useEffect, useState } from "react";

const EditRole: React.FC<{
  trigger?: React.ReactNode;
  roleId: number;
}> = ({
  trigger = <Button type="primary">Edit Custom Role</Button>,
  roleId,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [form] = Form.useForm<Pick<TUpdateRoleInput["data"], "name">>();
  const { mutate, isLoading } = useUpdateRole();
  const { data: role, isLoading: isFetchingRole } = useGetSingleRole({
    id: roleId,
  });
  useEffect(() => {
    form.setFieldsValue({
      name: role?.data.name,
    });
  }, [role, form]);
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Edit Custom Role" />}
        footer={null}
      >
        <Skeleton loading={isFetchingRole} active paragraph={{ rows: 3 }}>
          <Form
            labelCol={{ span: 24 }}
            requiredMark={false}
            form={form}
            onFinish={(data) => {
              role &&
                mutate(
                  {
                    data: {
                      permissionIds: role?.data.permissions.map(
                        (item) => item.permissionId
                      ),
                      name: data.name,
                    },
                    id: role?.data.id,
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
              <Button type="primary" loading={isLoading} htmlType="submit">
                Save
              </Button>
            </div>
          </Form>
        </Skeleton>
      </Modal>
      <div className="cursor-pointer" onClick={handleOpen}>
        {trigger}
      </div>
    </>
  );
};

export default EditRole;
