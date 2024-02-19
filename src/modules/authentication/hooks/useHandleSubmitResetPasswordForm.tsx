import { Form as _Form } from "antd";
import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import {
  TResetPasswordInput,
  useResetPassword,
} from "lib/api/auth/reset-password";
import { useNavigate, useSearchParams } from "react-router-dom";
import { appRoutePaths } from "routes";

const useHandleSubmitResetPasswordForm = ({ Form }: { Form: typeof _Form }) => {
  const { mutate, isLoading } = useResetPassword();
  const [form] = Form.useForm<TResetPasswordInput["data"]>();
  const { handleLogin } = useHandleAuthentication();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token") ?? "";
  const uid = searchParams.get("uid") ?? "";
  const handleSubmit = (data: TResetPasswordInput["data"]) => {
    mutate(
      {
        data,
        queryParams: {
          token,
          uid,
        },
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

export default useHandleSubmitResetPasswordForm;
