import { Layout } from "antd";
import React, { useState } from "react";
import { TopBar } from "./TopBar";
import SideBar from "./SideBar";
const { Content } = Layout;
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // TODO: Check system theme and use as default theme on first entry
  // TODO: Get Auth Data n populate avatar
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <Layout className="text-accent">
      <TopBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Layout hasSider className="min-h-[100vh]">
        <SideBar showSideBar={showSideBar} />
        <Content className="pt-4 pb-4 px-6">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
