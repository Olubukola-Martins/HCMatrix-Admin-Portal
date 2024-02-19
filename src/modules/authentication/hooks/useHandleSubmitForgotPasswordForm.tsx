import { Form as _Form } from "antd";
import {
  TForgotPasswordInput,
  useForgotPassword,
} from "lib/api/auth/forgot-password";

const useHandleSubmitForgotPasswordForm = ({
  Form,
}: {
  Form: typeof _Form;
}) => {
  const { mutate, isLoading } = useForgotPassword();
  const [form] = Form.useForm<TForgotPasswordInput>();
  const handleSubmit = (data: TForgotPasswordInput) => {
    mutate({
      ...data,
    });
  };
  return {
    form,
    handleSubmit,
    isLoading,
  };
};

export default useHandleSubmitForgotPasswordForm;
