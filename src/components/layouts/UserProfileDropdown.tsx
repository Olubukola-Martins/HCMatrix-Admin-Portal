import { Avatar, Dropdown } from "antd";
import ThemeSwitcher from "components/theme/ThemeSwitcher";
import useHandleAuthentication from "hooks/auth/useHandleAuthentication";
import { useGetAuthUserProfile } from "lib/api/auth/me/profile";
import { useNavigate } from "react-router-dom";
import { appRoutePaths } from "routes";
import { SyncOutlined } from "@ant-design/icons";
import { generateAvatarFromInitials } from "lib/utils";

const UserProfileDropdown = () => {
  const { handleLogout } = useHandleAuthentication();
  const { isLoading, data } = useGetAuthUserProfile();
  const navigate = useNavigate();
  const fullName = data?.data.user.fullName;

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
      {
        <Avatar
          className="cursor-pointer h-4 w-4 lg:w-8 lg:h-8"
          icon={isLoading ? <SyncOutlined spin /> : null}
          alt="user image"
          src={
            fullName
              ? generateAvatarFromInitials(fullName, "ff6647")
              : undefined
          }
        />
      }
    </Dropdown>
  );
};

export default UserProfileDropdown;
