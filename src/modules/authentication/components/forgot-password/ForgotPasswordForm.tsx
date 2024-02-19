import { Button, Form, Input } from "antd";
import { emailValidationRules } from "lib/validation";
import useHandleSubmitForgotPasswordForm from "modules/authentication/hooks/useHandleSubmitForgotPasswordForm";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";

const ForgotPasswordForm = () => {
  const { form, handleSubmit, isLoading } = useHandleSubmitForgotPasswordForm({
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

        <div className="flex justify-between">
          <Link to={appRoutePaths.login}>
            <Button type="text">Login</Button>
          </Link>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ForgotPasswordForm;
