import { Avatar, Button, Layout } from "antd";
import {
  AppLogo,
  FinanceMetricsIcon,
  ItAuditMetricsIcon,
  MoonIcon,
  NotificationIcon,
  ReportsIcon,
  SalesMetricsIcon,
  SearchIcon,
  SettingIcon,
  TrainingSessionMetricsIcon,
  UserMetricsIcon,
} from "components/icons";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // TODO: Get Auth Data n populate avatar
  return (
    <Layout>
      <Header className="shadow-sm flex bg-white w-full justify-between items-center sticky z-10 top-0">
        <div className="flex gap-x-8 items-center">
          <Button type="text" size="large" icon={<AiOutlineMenu size={25} />} />
          <AppLogo />
        </div>
        <div className="flex gap-x-4 items-center">
          <Button type="text" size="large" icon={<SearchIcon />} />
          <Button
            type="text"
            size="large"
            icon={<MoonIcon className="h-6 w-6" />}
          />
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
          <Avatar />
        </div>
      </Header>
      <Layout className="min-h-[100vh] bg-white">
        <Sider width={120}>
          <div className="flex flex-col gap-4 h-full bg-[#F6F7FB] px-4 pt-8 pb-4 shadow-sm">
            {[
              { label: "User Metrics", icon: <UserMetricsIcon />, link: "/" },
              {
                label: "It/Audit Metrics",
                icon: <ItAuditMetricsIcon />,
                link: "/",
              },
              {
                label: "Finance Metrics",
                icon: <FinanceMetricsIcon />,
                link: "/",
              },
              { label: "Sales Metrics", icon: <SalesMetricsIcon />, link: "/" },
              {
                label: "Training Sessions",
                icon: <TrainingSessionMetricsIcon />,
                link: "/",
              },
              { label: "Reports", icon: <ReportsIcon />, link: "/" },
            ].map((item) => (
              <SideBarItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                link={item.link}
              />
            ))}
          </div>
        </Sider>
        <Content className="pt-4 pb-4 px-6">{children}</Content>
      </Layout>
    </Layout>
  );
};

const SideBarItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  link: string;
}> = ({ label, icon, link }) => {
  return (
    <NavLink to={link}>
      <button className="flex w-full text-center flex-col gap-y-4 shadow-sm items-center px-2 py-4 bg-white rounded-md">
        {icon}
        <span className="text-xs font-medium capitalize">{label}</span>
      </button>
    </NavLink>
  );
};

export default AppLayout;
