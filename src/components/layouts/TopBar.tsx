import { Button, Layout } from "antd";
import {
  AppLogo,
  SearchIcon,
  SettingIcon,
  NotificationIcon,
} from "components/icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import UserProfileDropdown from "./UserProfileDropdown";
import ModeSwitcher from "components/theme/ModeSwitcher";

const { Header } = Layout;
export const TopBar: React.FC<{
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showSideBar, setShowSideBar }) => {
  return (
    <Header className="shadow-sm dark:shadow-md dark:shadow-slate-800 flex w-full justify-between items-center sticky z-10 top-0">
      <div className="flex gap-x-8 items-center">
        <Button
          type="text"
          size="large"
          icon={
            showSideBar === true ? (
              <AiOutlineMenu size={25} />
            ) : (
              <AiOutlineClose size={25} />
            )
          }
          onClick={() => setShowSideBar((val) => !val)}
        />
        <AppLogo className="h-8" />
      </div>
      <div className="flex gap-x-4 items-center">
        <Button type="text" size="large" icon={<SearchIcon />} />
        <ModeSwitcher />
        <Button
          type="text"
          size="large"
          icon={<SettingIcon className="h-6 w-6" />}
        />
        <Button
          type="text"
          size="large"
          icon={<NotificationIcon isNotified />}
        />
        <UserProfileDropdown />
      </div>
    </Header>
  );
};
