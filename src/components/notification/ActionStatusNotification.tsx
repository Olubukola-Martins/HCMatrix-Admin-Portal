import { Button, Modal } from "antd";
import { SuccessIcon, WarningIcon } from "components/icons";
import { ModalTitle } from "components/modal";
import React, { useState } from "react";

type TActionStatus = "error" | "success" | "warning";
const ActionStatusNotification: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  //   TODO: This should come from that hook that will be used to get the action status
  const status: TActionStatus = "warning";
  const message = "Role deleted successfully";
  //  TODO: Create a Notification Context that will be used to display these messages when action has been exexuted successfully or not
  return (
    <>
      <Modal open={open} onCancel={handleClose} title={null} footer={null}>
        <div className="flex flex-col items-center gap-6">
          {status === "warning" && <WarningIcon />}
          {status === "warning" && <SuccessIcon />}
          {/* TODO: Request design for error icon or just use warning icon*/}
          <ModalTitle text={message} />

          <div className="mt-4 flex gap-x-4 items-center">
            <Button type="primary" size="large">
              Back
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ActionStatusNotification;
