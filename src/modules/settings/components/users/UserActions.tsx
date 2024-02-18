import { Button, Dropdown } from "antd";
import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import EditSingleUser from "./EditSingleUser";
import DeleteUser from "./DeleteUser";
import { TUser } from "lib/api/user/get-user";

type TAction = "edit-user" | "delete-user";
const UserActions: React.FC<{
  user: Pick<TUser, "user" | "id" | "firstName" | "lastName" | "role">;
  trigger?: React.ReactNode;
  actions?: TAction[];
}> = ({
  user,
  trigger = <Button icon={<AiOutlineMore />} type="text" />,
  actions = ["edit-user", "delete-user"],
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
        user={user}
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
              key: "Delete User",
              label: <DeleteUser user={user} trigger="Delete User" />,
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
