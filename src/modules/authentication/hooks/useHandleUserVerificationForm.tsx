import { Form as _Form } from "antd";
import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import {
  TVerifyAccountInput,
  useVerifyAccountAndSetPassword,
} from "lib/api/user/verification/user-account-verification";
import { useSearchParams } from "react-router-dom";

const useHandleUserVerificationForm = ({ Form }: { Form: typeof _Form }) => {
  const { mutate, isLoading } = useVerifyAccountAndSetPassword();
  const [form] = Form.useForm<TVerifyAccountInput["data"]>();
  const { handleLogin } = useHandleAuthentication();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const uid = searchParams.get("uid") ?? "";
  const handleSubmit = (data: TVerifyAccountInput["data"]) => {
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

export default useHandleUserVerificationForm;
