import { useGetAuthUserProfile } from "lib/api/auth/me/profile";
import { TPermissionLabel } from "lib/api/roles-and-permissions/get-permissions";
import { canUserAccessComponent } from "lib/utils";

export const useGetUserPermissions = () => {
    const { data, isLoading, isSuccess } = useGetAuthUserProfile();
    const userPermissionsViaRole =
      data?.data.payload?.role?.permissions?.map(
        (item) => item.permission.label
      ) ?? [];
  
    return {
      userPermissions: [...userPermissionsViaRole],
      isLoading,
      isSuccess,
    };
  };
  export const useCanUserAccessComponent = (props: {
    requiredPermissions: TPermissionLabel[];
  }) => {
    const { requiredPermissions } = props;
    const { userPermissions } = useGetUserPermissions();
  
    return {
      canAccess: canUserAccessComponent({
        userPermissions,
        requiredPermissions,
      }),
      userPermissions,
    };
  };
  