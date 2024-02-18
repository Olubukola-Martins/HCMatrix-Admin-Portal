import { Button, Form, Input, Modal } from "antd";
import { ModalTitle } from "components/modal";
import { useInviteUsers } from "lib/api/user/invite/invite-users";
import { listOfEmailValidationRule } from "lib/validation";
import React from "react";

const InviteUsers: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const [form] = Form.useForm<{ emails: string }>();
  const { mutate, isLoading } = useInviteUsers();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Invite Users" />}
        footer={null}
      >
        <Form
          labelCol={{ span: 24 }}
          requiredMark={false}
          form={form}
          onFinish={(data) => {
            console.log(data, "....");
            mutate(
              {
                emails: data.emails.split(",").map((e) => e.trim()),
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
            label="Email(s)"
            name={`emails`}
            rules={[listOfEmailValidationRule]}
          >
            <Input.TextArea rows={7} placeholder="Emails" />
          </Form.Item>

          <div className="mt-4 flex justify-between items-center">
            <Button type="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Save__
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default InviteUsers;
