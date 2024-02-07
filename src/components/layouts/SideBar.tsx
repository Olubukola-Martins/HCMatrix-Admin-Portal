import React from "react";
import { Layout } from "antd";
import { NavLink, useMatches } from "react-router-dom";
import useGenerateSidebarLinks from "hooks/layout/useGenerateSidebarLinks";

const { Sider } = Layout;
const SideBar: React.FC<{ showSideBar: boolean }> = ({ showSideBar }) => {
  const { links } = useGenerateSidebarLinks();
  return (
    <>
      {showSideBar && (
        <Sider width={120} className="fixed top-0">
          <div className="flex flex-col gap-8 h-full  px-4 pt-8 pb-4 shadow-sm">
            {links.map((item) => (
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
  // TODO: Add animation transition to hover and even on sidebar close
  const matches = useMatches();
  const routeIsAMatch = matches
    .map((match) => match.pathname)
    .some((match) => new RegExp(link).test(match));
  return (
    <NavLink to={link}>
      <button
        className={`flex w-full text-center flex-col gap-y-2 items-center group`}
      >
        <div
          className={`flex group-hover:bg-primary text-center flex-col bg-mainBg shadow-sm items-center px-4 py-3 rounded-md ${
            routeIsAMatch ? "bg-primary" : ""
          }`}
        >
          {icon}
        </div>
        <span
          className={`text-xs capitalize group-hover:text-primary ${
            routeIsAMatch ? "text-primary" : ""
          }`}
        >
          {label}
        </span>
      </button>
    </NavLink>
  );
};

export default SideBar;
