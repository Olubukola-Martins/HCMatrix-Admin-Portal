import { Button } from "antd";
import { TUserInvite } from "lib/api/user/invite";
import { useResendUserInvite } from "lib/api/user/invite/resend-user-invite";
import React from "react";
import { SyncOutlined } from "@ant-design/icons";

const ResendInvite: React.FC<{
  trigger?: React.ReactNode;
  invite: Pick<TUserInvite, "id">;
}> = ({ trigger = <Button type="primary">Resend Invite</Button>, invite }) => {
  const { mutate, isLoading } = useResendUserInvite();
  return (
    <div
      onClick={() => mutate({ id: invite.id })}
      className="flex gap-x-2 items-center"
    >
      {trigger} <SyncOutlined spin={isLoading} />
    </div>
  );
};

export default ResendInvite;
