import { appRoutePaths } from "routes/paths";
import { TRoutePageData } from "routes/types";

export const appRoutePages: TRoutePageData[] = [
  {
    element: <div />,
    path: appRoutePaths.notFound,
    title: "Not Found",
    category: ["doesnt-require-authentication"],
  },
  {
    element: <div />,
    path: appRoutePaths.financeMetrics,
    title: "Finance Metrics",
  },
];
