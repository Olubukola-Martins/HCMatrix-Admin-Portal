export type TRoutePageCategory = "doesnt-require-authentication";

export type TRoutePageData = {
  path: string;
  element: JSX.Element;
  category?: TRoutePageCategory[];
  title?: string;
  hidden?: boolean;
};
