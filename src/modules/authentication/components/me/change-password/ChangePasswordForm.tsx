import { Button, Form, Input } from "antd";
import {
  passwordValidationRules,
  textInputValidationRules,
} from "lib/validation";
import useHandleSubmitChangePasswordForm from "modules/authentication/hooks/useHandleSubmitChangePasswordForm";

const ChangePasswordForm = () => {
  const { form, handleSubmit, isLoading } = useHandleSubmitChangePasswordForm({
    Form,
  });
  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 24 }}
        requiredMark={false}
        size="large"
        onFinish={handleSubmit}
        className="w-full"
      >
        <Form.Item
          name="currentPassword"
          label="Current Password"
          rules={textInputValidationRules}
        >
          <Input placeholder="Current Password" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={passwordValidationRules}
        >
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={passwordValidationRules}
        >
          <Input placeholder="Confirm Password" />
        </Form.Item>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Change Password
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ChangePasswordForm;
