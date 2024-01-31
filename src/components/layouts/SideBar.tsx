import React from "react";
import { Layout } from "antd";
import {
  UserMetricsIcon,
  ItAuditMetricsIcon,
  FinanceMetricsIcon,
  SalesMetricsIcon,
  TrainingSessionMetricsIcon,
  ReportsIcon,
} from "components/icons";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;
const SideBar: React.FC<{ showSideBar: boolean }> = ({ showSideBar }) => {
  return (
    <>
      {showSideBar && (
        <Sider width={120} className="fixed top-0">
          <div className="flex flex-col gap-8 h-full  px-4 pt-8 pb-4 shadow-sm">
            {[
              {
                label: "User Metrics",
                icon: <UserMetricsIcon />,
                link: "/",
              },
              {
                label: "IT/Audit Metrics",
                icon: <ItAuditMetricsIcon />,
                link: "/",
              },
              {
                label: "Finance Metrics",
                icon: <FinanceMetricsIcon />,
                link: "/",
              },
              {
                label: "Sales Metrics",
                icon: <SalesMetricsIcon />,
                link: "/",
              },
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
      )}
    </>
  );
};

const SideBarItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  link: string;
}> = ({ label, icon, link }) => {
  return (
    <NavLink to={link}>
      <button className="flex w-full text-center flex-col gap-y-2 items-center ">
        <div className="flex text-center flex-col bg-mainBg shadow-sm items-center px-4 py-3 rounded-md">
          {icon}
        </div>
        <span className="text-xs  capitalize">{label}</span>
      </button>
    </NavLink>
  );
};

export default SideBar;
