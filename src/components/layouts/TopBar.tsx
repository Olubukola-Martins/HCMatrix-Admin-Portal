import { Button, Layout } from "antd";
import {
  AppLogo,
  SearchIcon,
  SettingIcon,
  NotificationIcon,
} from "components/icons";
import UserProfileDropdown from "./UserProfileDropdown";
import ModeSwitcher from "components/theme/ModeSwitcher";
import ToggleSidebar from "./ToggleSidebar";
import { NavLink } from "react-router-dom";
import { appRoutePaths } from "routes";
import { PermissionRestrictor } from "components/permission-restriction/PermissionRestrictor";

const { Header } = Layout;
export const TopBar: React.FC<{
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showSideBar, setShowSideBar }) => {
  return (
    <Header className="px-4 lg:px-6 shadow-sm dark:shadow-md dark:shadow-slate-800 flex w-full justify-between items-center sticky z-10 top-0">
      <div className="flex gap-x-2 lg:gap-x-8 items-center">
        <ToggleSidebar
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <AppLogo className="h-6 lg:h-8" />
      </div>
      <div className="flex lg:gap-x-4 items-center">
        <Button
          type="text"
          size="large"
          className="lg:px-2 lg:py-2 px-1 py-1"
          icon={<SearchIcon className="h-4 w-4 md:h-6 md:w-6" />}
        />
        <ModeSwitcher />
        <PermissionRestrictor
          requiredPermissions={[
            "manage-discounts",
            "manage-subscription-prices",
            "manage-roles-and-permissions",
            "manage-users",
          ]}
        >
          <NavLink to={appRoutePaths.settings}>
            <SettingIcon className="h-4 w-4 md:h-6 md:w-6" />
          </NavLink>
        </PermissionRestrictor>
        <Button
          type="text"
          size="large"
          className="lg:px-2 lg:py-2 px-1 py-1"
          icon={
            <NotificationIcon isNotified className="h-4 w-4 md:h-6 md:w-6" />
          }
        />
        <UserProfileDropdown />
      </div>
    </Header>
  );
};
