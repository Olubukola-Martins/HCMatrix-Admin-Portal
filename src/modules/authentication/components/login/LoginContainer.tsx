import { useSearchParams } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginContainer = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") ?? "";
  return (
    <div>
      <LoginForm email={email} />
    </div>
  );
};
export default LoginContainer;
