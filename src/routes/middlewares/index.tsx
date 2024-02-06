import { TRoutePageCategory } from "routes/types";
import AuthMiddleware from "./AuthMiddleware";

export const MiddlewareOrganizer: React.FC<{
  children: React.ReactNode;
  categories?: TRoutePageCategory[];
  disabled?: boolean;
}> = ({ children, categories, disabled = false }) => {
  if (disabled) {
    return <>{children}</>;
  }
  if (
    categories === undefined ||
    !categories.includes("doesnt-require-authentication")
  ) {
    return (
      <AuthMiddleware>
        <>{children}</>
      </AuthMiddleware>
    );
  }
  return <>{children}</>;
};
