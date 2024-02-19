import { useGetUserPermissions } from "hooks/permission";
import { canUserAccessComponent } from "lib/utils";
import { appRoutePaths } from "routes/paths";

type TSettingPageLink = {
  label: string;
  link: string;
  hidden?: boolean;
};

export const useGenerateSettingPageLinks = (): {
  links: TSettingPageLink[];
} => {
  let links: TSettingPageLink[] = [];
  const { userPermissions } = useGetUserPermissions();
  links = [
    {
      label: "Roles & Permissions",
      link: appRoutePaths.settingsRolesAndPermissions,
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-roles-and-permissions"],
      }),
    },
    {
      label: "Users",
      link: appRoutePaths.settingsUsers,
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-users"],
      }),
    },
    {
      label: "Prices",
      link: appRoutePaths.settingsPrices,
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-subscription-prices"],
      }),
    },
    {
      label: "Discounts",
      link: appRoutePaths.settingsDiscounts,
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["manage-discounts"],
      }),
    },
  ];
  links = links.filter(
    (item) => item?.hidden === false || item.hidden === undefined
  );
  return { links };
};
