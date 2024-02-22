import { Button, Form, Input } from "antd";
import { emailValidationRules, passwordValidationRules } from "lib/validation";
import useHandleSubmitLoginForm from "modules/authentication/hooks/useHandleSubmitLoginForm";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";

const LoginForm = () => {
  const { form, handleSubmit, isLoading } = useHandleSubmitLoginForm({ Form });
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
          rules={passwordValidationRules}
        >
          <Input placeholder="Password" />
        </Form.Item>
        <div className="flex justify-between">
          <Link to={appRoutePaths.forgotPassword}>
            <Button type="text">Forgot Password ?</Button>
          </Link>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Log in
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
