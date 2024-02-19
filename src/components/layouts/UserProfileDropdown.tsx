import { Avatar, Dropdown } from "antd";
import ThemeSwitcher from "components/theme/ThemeSwitcher";
import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import { useNavigate } from "react-router-dom";
import { appRoutePaths } from "routes";

const UserProfileDropdown = () => {
  const { handleLogout } = useHandleAuthentication();
  const navigate = useNavigate();
  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items: [
          {
            key: 0,
            label: "Change Password",
            onClick: () => navigate(appRoutePaths.changePassword),
          },
          { key: 1, label: <ThemeSwitcher /> },
          { type: "divider" },
          { key: 2, label: "Logout", onClick: () => handleLogout() },
        ],
      }}
    >
      <Avatar className="cursor-pointer h-4 w-4 lg:w-6 lg:h-6" />
    </Dropdown>
  );
};

export default UserProfileDropdown;
