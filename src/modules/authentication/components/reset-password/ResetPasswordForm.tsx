import { Button, Form, Input } from "antd";
import { emailValidationRules, textInputValidationRules } from "lib/validation";
import useHandleSubmitResetPasswordForm from "modules/authentication/hooks/useHandleSubmitResetPasswordForm";

const ResetPasswordForm = () => {
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
        <Form.Item name="email" label="Email" rules={emailValidationRules}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={textInputValidationRules}
        >
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={textInputValidationRules}
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
