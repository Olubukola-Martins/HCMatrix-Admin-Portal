import { Button, Form, Input } from "antd";
import { passwordValidationRules } from "lib/validation";
import useHandleUserVerificationForm from "modules/authentication/hooks/useHandleUserVerificationForm";

const UserVerificationForm = () => {
  const { form, handleSubmit, isLoading } = useHandleUserVerificationForm({
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

export default UserVerificationForm;
