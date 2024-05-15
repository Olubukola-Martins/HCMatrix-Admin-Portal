import { Button, Form, Input } from "antd";
import { passwordValidationRules } from "lib/validation";
import useHandleSubmitResetPasswordForm from "modules/authentication/hooks/useHandleSubmitResetPasswordForm";

const ResetPasswordForm: React.FC<{ email?: string }> = ({ email }) => {
  const { form, handleSubmit, isLoading } = useHandleSubmitResetPasswordForm({
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
      >
        <Form.Item label="Email">
          <Input placeholder="Email" value={email} disabled />
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
            Reset Pasword
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ResetPasswordForm;
