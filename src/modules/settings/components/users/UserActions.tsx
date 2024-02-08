import { Button, Dropdown } from "antd";
import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import EditSingleUser from "./EditSingleUser";
import DeleteUser from "./DeleteUser";
import ResendInvite from "./ResendInvite";

type TAction = "edit-user" | "resend-invite" | "delete-user";
const UserActions: React.FC<{
  userId: number;
  trigger: React.ReactNode;
  actions?: TAction[];
}> = ({
  userId,
  trigger = <Button icon={<AiOutlineMore />} type="text" />,
  actions = ["edit-user", "resend-invite", "delete-user"],
}) => {
  const [action, setAction] = useState<TAction>();
  const handleClose = () => {
    setAction(undefined);
  };
  const handleAction = (action: TAction) => {
    setAction(action);
  };
  //   TODO: Confirm there is no issue with calling a modal from a dropdown and if so refactor EditSingleUser to use the trigger pattern
  return (
    <>
      <EditSingleUser
        open={action === "edit-user"}
        handleClose={handleClose}
        userId={userId}
      />
      <Dropdown
        menu={{
          items: [
            {
              key: "Edit User",
              label: "Edit User",
              onClick: () => handleAction("edit-user"),
              disabled: !actions.includes("edit-user"),
            },
            {
              key: "Resend Invite",
              label: <ResendInvite userId={userId} />,
              disabled: !actions.includes("resend-invite"),
            },
            {
              key: "Delete User",
              label: <DeleteUser userId={userId} />,
              disabled: !actions.includes("delete-user"),
            },
          ].filter(
            (item) => item.disabled === false || item.disabled === undefined
          ),
        }}
      >
        {trigger}
      </Dropdown>
    </>
  );
};

export default UserActions;
