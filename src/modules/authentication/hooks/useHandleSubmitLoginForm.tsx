import { Form as _Form } from "antd";
import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import { useLogin, TLoginInput } from "lib/api/auth/login";

const useHandleSubmitLoginForm = ({ Form }: { Form: typeof _Form }) => {
  const { mutate, isLoading } = useLogin();
  const [form] = Form.useForm<TLoginInput>();
  const { handleLogin } = useHandleAuthentication();
  const handleSubmit = (data: TLoginInput) => {
    mutate(
      {
        ...data,
      },
      {
        onSuccess: (res) => {
          handleLogin(res.data?.accessToken ?? "");
        },
      }
    );
  };
  return {
    form,
    handleSubmit,
    isLoading,
  };
};

export default useHandleSubmitLoginForm;
