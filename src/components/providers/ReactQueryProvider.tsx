import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: (err) => {
        console.log(err, "err");
      },
      onSuccess: (res) => {
        console.log(res, "res");
      },
    },
    queries: {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
      retry: false, //Prevent Multiple Requests from being made on faliure
      onError: (err) => {
        console.log(err, "err");
      },
      onSuccess: (res) => {
        console.log(res, "res");
      },
    },
  },
});

const ReactQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
