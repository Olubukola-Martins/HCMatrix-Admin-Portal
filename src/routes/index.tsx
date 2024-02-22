import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { appRoutePages } from "./pages";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import { appRoutePaths } from "./paths";
import { AuthRouteLayout, PrimaryRouteLayout } from "./layout";
import { useGetUserPermissions } from "hooks/permission";
import { TRoutePageData } from "./types";
import { Skeleton } from "antd";
import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { InaccessibleIfAuthenticatedMiddleware } from "./middlewares/InaccessibleIfAuthenticatedMiddleware";
import { ErrorComponent } from "components/error/ErrorComponent";

// TODO: Refactor and come up with a much more predictable approach to middleware as category implementation will lead to a bug bcos the category is linear while middleware is within , consider using a recusrive approach or chaining like in express
const AppRoutes = () => {
  const { userPermissions, isLoading } = useGetUserPermissions();

  const pageRoutes = createBrowserRouter(
    createRoutesFromElements(
      appRoutePages({
        userPermissions,
      }).map(({ path, element, category, title }: TRoutePageData, i) => {
        if (
          category?.some((item) => item === "requires-authentication") === true
        ) {
          return (
            <Route
              element={
                <AuthMiddleware>
                  <PrimaryRouteLayout />
                </AuthMiddleware>
              }
              key={path + i}
              errorElement={
                <ErrorComponent
                  message={`There seems to be an  issue with ${
                    title ?? "this"
                  } page. Please try again later.`}
                />
              }
            >
              <Route
                path={`${path}`}
                element={
                  <RequireAuth fallbackPath={appRoutePaths.login}>
                    {element}
                  </RequireAuth>
                }
              />
            </Route>
          );
        }
        if (
          category?.some((item) => item === "authentication-initializer") ===
          true
        ) {
          return (
            <Route
              element={
                <InaccessibleIfAuthenticatedMiddleware>
                  <AuthRouteLayout />
                </InaccessibleIfAuthenticatedMiddleware>
              }
              key={path + i}
              errorElement={
                <ErrorComponent
                  message={`There seems to be an  issue with ${
                    title ?? "this"
                  } page. Please try again later.`}
                />
              }
            >
              <Route path={`${path}`} element={element} />
            </Route>
          );
        }
        if (category?.some((item) => item === "not-found") === true) {
          return <Route element={element} key={path + i} path={`${path}`} />;
        }
        return <Route element={element} key={path + i} path={`${path}`} />;
      })
    )
  );

  return (
    <>
      <Skeleton active paragraph={{ rows: 17 }} loading={isLoading}>
        <RouterProvider
          router={pageRoutes}
          fallbackElement={<Skeleton active paragraph={{ rows: 17 }} />}
        />
      </Skeleton>
    </>
  );
};

// TODO: Remove the export below and refactor approriately
export { appRoutePaths };
export default AppRoutes;
