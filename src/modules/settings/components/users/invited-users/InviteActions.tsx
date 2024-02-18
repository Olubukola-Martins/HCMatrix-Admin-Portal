import { Button } from "antd";
import React from "react";

import { TUserInvite } from "lib/api/user/invite";
import ResendInvite from "./ResendInvite";

type TAction = "resend-invite";
const InviteActions: React.FC<{
  invite: Pick<TUserInvite, "id">;
  actions?: TAction[];
}> = ({ invite, actions = ["resend-invite"] }) => {
  return (
    <>
      <div>
        {[
          {
            key: "Resend Invite",
            label: <ResendInvite invite={invite} trigger="Resend Invite" />,
            disabled: !actions.includes("resend-invite"),
          },
        ]
          .filter(
            (item) => item.disabled === false || item.disabled === undefined
          )
          .map((item) => (
            <Button type="text">{item.label}</Button>
          ))}
      </div>
    </>
  );
};

export default InviteActions;
