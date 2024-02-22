import { Navigate } from "react-router-dom";
import { appRoutePaths } from "routes";
import { TRoutePageData } from "routes/types";

export const homePages = (): TRoutePageData[] => {
  let routes: TRoutePageData[] = [];
  routes = [
    {
      element: <Navigate to={appRoutePaths.financeMetrics} />, //temporary until this is fleshed as per design
      path: appRoutePaths.home,
      title: "Home",
    },
  ].map((item) => ({
    ...item,
    category: ["requires-authentication"],
  }));
  return routes;
};
