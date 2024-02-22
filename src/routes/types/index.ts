import { TPermissionLabel } from "lib/api/roles-and-permissions/get-permissions";

export type TRoutePageCategory =
  | "requires-authentication"
  | "authentication-initializer"
  | "not-found";

export type TRoutePageData = {
  path: string;
  element: JSX.Element;
  category?: TRoutePageCategory[];
  title?: string;
  hidden?: boolean;
};

export type TAppPageDataFnProps = {
  userPermissions: TPermissionLabel[];
};
