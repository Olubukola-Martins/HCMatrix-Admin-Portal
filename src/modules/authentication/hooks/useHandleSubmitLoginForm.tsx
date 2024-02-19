import { Form as _Form } from "antd";
import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import { useLogin, TLoginInput } from "lib/api/auth/login";
import { useNavigate } from "react-router-dom";
import { appRoutePaths } from "routes";

const useHandleSubmitLoginForm = ({ Form }: { Form: typeof _Form }) => {
  const { mutate, isLoading } = useLogin();
  const [form] = Form.useForm<TLoginInput>();
  const { handleLogin } = useHandleAuthentication();
  const navigate = useNavigate();
  const handleSubmit = (data: TLoginInput) => {
    mutate(
      {
        ...data,
      },
      {
        onSuccess: (res) => {
          navigate(appRoutePaths.home);
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
