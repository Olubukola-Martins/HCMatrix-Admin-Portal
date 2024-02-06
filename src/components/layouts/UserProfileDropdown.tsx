import { Avatar, Dropdown } from "antd";
import ThemeSwitcher from "components/theme/ThemeSwitcher";

const UserProfileDropdown = () => {
  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items: [
          { key: 1, label: <ThemeSwitcher /> },
          { type: "divider" },
          { key: 2, label: "Logout" },
        ],
      }}
    >
      <Avatar className="cursor-pointer h-4 w-4 lg:w-6 lg:h-6" />
    </Dropdown>
  );
};

export default UserProfileDropdown;