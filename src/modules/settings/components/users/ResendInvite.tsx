import { Button } from "antd";
import React from "react";

const ResendInvite: React.FC<{ trigger?: React.ReactNode; userId: number }> = ({
  trigger = <Button type="primary">Resend Invite</Button>,
}) => {
  return <div>{trigger}</div>;
};

export default ResendInvite;
