import { Space, notification } from "antd";
import { ERRORS_THAT_WARRANT_LOGOUT } from "constants";
import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import { errorFormatter, successFormatter } from "lib/utils";
import { QueryClient, QueryClientProvider } from "react-query";
import { useNavigate } from "react-router-dom";
import { appRoutePaths } from "routes";

const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, handleLogout } = useHandleAuthentication();
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const autoLogoutDueToLackOfAuthentication = (errMessage: string) => {
    if (ERRORS_THAT_WARRANT_LOGOUT.includes(errMessage)) {
      handleLogout();
      navigate(appRoutePaths.login, { replace: true });
    }
  };
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (err) => {
          const formattedErr = errorFormatter(err);

          autoLogoutDueToLackOfAuthentication(formattedErr.message);
          api.open({
            type: "error",
            message: formattedErr.message,
            description: (
              <Space direction="vertical">
                {errorFormatter(err).errors?.map((err) => (
                  <span className="capitalize">{err}</span>
                ))}
              </Space>
            ),
            duration: 0,
          });
        },
        onSuccess: (res) => {
          api.open({
            type: "success",
            message: "Success",
            description: successFormatter(res).message,
            duration: 4,
          });
        },
      },
      queries: {
        enabled: isAuthenticated, //Ensures that no requests are made if user is not authenticated
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: false, //Prevent Multiple Requests from being made on faliure
        onError: (err) => {
          const formattedErr = errorFormatter(err);

          autoLogoutDueToLackOfAuthentication(formattedErr.message);
          api.open({
            type: "error",
            message: "Error",
            description: formattedErr.message,
            duration: 0,
          });
        },
      },
    },
  });
  return (
    <>
      {contextHolder}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default ReactQueryProvider;
