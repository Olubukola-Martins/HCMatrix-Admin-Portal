import { Form as _Form } from "antd";
import {
  TChangePasswordInput,
  useChangePassword,
} from "lib/api/auth/me/change-password";

const useHandleSubmitChangePasswordForm = ({
  Form,
}: {
  Form: typeof _Form;
}) => {
  const { mutate, isLoading } = useChangePassword();
  const [form] = Form.useForm<TChangePasswordInput>();

  const handleSubmit = (data: TChangePasswordInput) => {
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

export default useHandleSubmitChangePasswordForm;
