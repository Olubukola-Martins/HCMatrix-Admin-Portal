import { ErrorComponent } from "components/error/ErrorComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrimaryPageLayout from "./layout";
import { appRoutePages } from "./pages";
import { MiddlewareOrganizer } from "./middlewares";
import { appRoutePaths } from "./paths";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrimaryPageLayout />,
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
