import { useGetUserPermissions } from "hooks/permission";
import { TPermissionLabel } from "lib/api/roles-and-permissions/get-permissions";
import { canUserAccessComponent } from "lib/utils";
import React from "react";

export const PermissionRestrictor: React.FC<{
  children: React.ReactNode;
  requiredPermissions: TPermissionLabel[];
}> = ({ requiredPermissions, children }) => {
  const { userPermissions } = useGetUserPermissions();

  return (
    <>
      {canUserAccessComponent({
        userPermissions,
        requiredPermissions,
      }) ? (
        <>{children}</>
      ) : null}
    </>
  );
};
