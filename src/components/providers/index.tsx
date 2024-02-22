import ThemeContextProvider from "./ThemeContextProvider";
import CurrencyContextProvider from "./CurrencyContextProvider";
import ReactQueryProvider from "./ReactQueryProvider";
import AntdConfigProvider from "./AntdConfigProvider";
import ReactAuthKitProvider from "./ReactAuthKitProvider";
import ErrorBoundary from "components/error/ErrorBoundary";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ErrorBoundary message="Please contact administrator!">
      <ReactAuthKitProvider>
        <ThemeContextProvider>
          <AntdConfigProvider>
            <CurrencyContextProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </CurrencyContextProvider>
          </AntdConfigProvider>
        </ThemeContextProvider>
      </ReactAuthKitProvider>
    </ErrorBoundary>
  );
};
