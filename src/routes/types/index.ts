import { TPermissionLabel } from "lib/api/roles-and-permissions/get-permissions";

export type TRoutePageCategory =
  | "doesnt-require-authentication"
  | "inaccessible-if-user-is-authenticated";

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
