import { Button, Form, Input } from "antd";
import useHandleSubmitLoginForm from "modules/authentication/hooks/useHandleSubmitLoginForm";

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
        <Form.Item name="email" label="Email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input placeholder="Password" />
        </Form.Item>
        <div className="flex justify-between">
          <Button type="text">Forgot Password ?</Button>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Log in
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
