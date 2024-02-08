import { Button, Dropdown } from "antd";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import AddSingleUser from "./AddSingleUser";
import ImportUsers from "./ImportUsers";
import InviteUsers from "./InviteUsers";

type TAction = "add-user" | "import-users" | "invite-users";
const AddUsers = () => {
  const [action, setAction] = useState<TAction>();
  const handleAction = (action: TAction) => {
    setAction(action);
  };
  const handleClose = () => {
    setAction(undefined);
  };
  return (
    <>
      <InviteUsers open={action === "invite-users"} handleClose={handleClose} />
      <AddSingleUser open={action === "add-user"} handleClose={handleClose} />
      <ImportUsers open={action === "import-users"} handleClose={handleClose} />
      <Dropdown
        menu={{
          items: [
            {
              key: "Add User",
              label: "Add User",
              onClick: () => handleAction("add-user"),
            },
            {
              key: "Import Users",
              label: "Import Users",
              onClick: () => handleAction("import-users"),
            },
            {
              key: "Invite Users",
              label: "Invite Users",
              onClick: () => handleAction("invite-users"),
            },
          ],
        }}
        trigger={["click"]}
      >
        <Button className="flex gap-x-2 items-center" type="primary">
          <span>Add Users</span>
          <FaAngleDown />
        </Button>
      </Dropdown>
    </>
  );
};

export default AddUsers;
