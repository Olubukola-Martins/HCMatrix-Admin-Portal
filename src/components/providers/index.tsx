import { ConfigProvider, theme } from "antd";

import useHandleColorTheme from "hooks/theme/useHandleColorTheme";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./ThemeContextProvider";
export { ThemeContextProvider };

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // TODO: Rename useHandleColorTheme to useTheme
  const { color, mode } = useHandleColorTheme();
  // TODO: Refactor Theme config to be in a constants folder
  return (
    <div color-theme={color} data-theme={mode}>
      <BrowserRouter>
        <ConfigProvider
          theme={
            mode === "dark"
              ? {
                  algorithm: theme.darkAlgorithm,
                  cssVar: true,

                  token: {
                    fontFamily: "Sen, sans-serif",
                    colorPrimary: color,
                  },
                }
              : {
                  cssVar: true,

                  token: {
                    fontFamily: "Sen, sans-serif",
                    colorPrimary: color,
                  },
                  components: {
                    Layout: {
                      bodyBg: "#fff",
                      siderBg: "#F6F7FB",
                      headerBg: "#fff",
                    },
                    // Button: {
                    //   colorPrimary: "red",
                    //   colorBgBase: "red",
                    //   colorBgContainer: "red",
                    //   colorFill: "red",
                    //   colorBgElevated: "red",
                    //   colorPrimaryBg: "red",
                    // },
                  },
                }
          }
        >
          {children}
        </ConfigProvider>
      </BrowserRouter>
    </div>
  );
};
