import { ErrorComponent } from "components/error/ErrorComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appAuthPages, appRoutePages } from "./pages";
import { MiddlewareOrganizer } from "./middlewares";
import { appRoutePaths } from "./paths";
import { AuthRouteLayout, PrimaryRouteLayout } from "./layout";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      element: <AuthRouteLayout />,
      children: appAuthPages.map((page) => ({
        path: page.path,
        element: (
          <MiddlewareOrganizer categories={page.category}>
            <>{page.element}</>
          </MiddlewareOrganizer>
        ),
        errorElement: <ErrorComponent message="Oops! Something went wrong" />,
      })),
      errorElement: <ErrorComponent message="Oops! Something went wrong" />,
    },
    {
      path: "/",

      element: <PrimaryRouteLayout />,
      children: appRoutePages.map((page) => ({
        path: page.path,
        element: (
          <MiddlewareOrganizer categories={page.category}>
            <>{page.element}</>
          </MiddlewareOrganizer>
        ),
        errorElement: <ErrorComponent message="Oops! Something went wrong" />,
      })),
      errorElement: <ErrorComponent message="Oops! Something went wrong" />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export { appRoutePaths };
export default AppRoutes;
