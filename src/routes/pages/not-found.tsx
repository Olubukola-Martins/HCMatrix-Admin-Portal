import PageNotFoundContainer from "modules/not-found/components";
import { appRoutePaths } from "routes";
import { TRoutePageData } from "routes/types";

export const notFoundPages = (): TRoutePageData[] => {
  let routes: TRoutePageData[] = [];
  routes = [
    {
      element: <PageNotFoundContainer />,
      path: appRoutePaths.notFound,
      title: "Not Found",
    },
  ].map((item) => ({
    ...item,
    category: ["not-found"],
  }));
  return routes;
};
