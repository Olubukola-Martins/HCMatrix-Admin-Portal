import { notification } from "antd";
import { errorFormatter, successFormatter } from "lib/utils";
import { QueryClient, QueryClientProvider } from "react-query";

const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (err) => {
          api.open({
            type: "error",
            message: "Error",
            description: errorFormatter(err).message,
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
