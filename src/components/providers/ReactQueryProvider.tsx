import { Space, notification } from "antd";
import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import { errorFormatter, successFormatter } from "lib/utils";
import { QueryClient, QueryClientProvider } from "react-query";

const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated } = useHandleAuthentication();
  const [api, contextHolder] = notification.useNotification();
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (err) => {
          api.open({
            type: "error",
            message: errorFormatter(err).message,
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
          api.open({
            type: "error",
            message: "Error",
            description: errorFormatter(err).message,
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
