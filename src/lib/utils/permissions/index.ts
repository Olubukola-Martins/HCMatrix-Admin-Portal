import { TPermissionLabel } from "lib/api/roles-and-permissions/get-permissions";

export const canUserAccessComponent = ({
  userPermissions,
  requiredPermissions,
}: {
  userPermissions: TPermissionLabel[];
  requiredPermissions?: TPermissionLabel[];
}) => {
  let canAccess = false;

  const requiredPermissionsWereNotDefined =
    requiredPermissions === undefined || requiredPermissions.length === 0;
  // then check permissions
  const canAccessViaPermissions = requiredPermissionsWereNotDefined
    ? true
    : !!userPermissions?.some((item) => requiredPermissions?.includes(item));
  canAccess = canAccessViaPermissions;
  return canAccess;
};
