import { useSearchParams } from "react-router-dom";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPasswordContainer = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") ?? "";
  return (
    <div>
      <ResetPasswordForm email={email} />
    </div>
  );
};
export default ResetPasswordContainer;
