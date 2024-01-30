import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BrowserRouter>
      <ConfigProvider>{children}</ConfigProvider>
    </BrowserRouter>
  );
};
