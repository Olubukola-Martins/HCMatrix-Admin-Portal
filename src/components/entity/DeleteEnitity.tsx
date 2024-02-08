import { Button, Modal } from "antd";
import { WarningIcon } from "components/icons";
import { ModalTitle } from "components/modal";
import React, { useState } from "react";

const DeleteEnitity: React.FC<{
  trigger?: React.ReactNode;
  message: string;
  title: string;
}> = ({ trigger = <Button type="primary">Delete</Button>, title, message }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal open={open} onCancel={handleClose} title={null} footer={null}>
        <div className="flex flex-col items-center gap-6">
          <WarningIcon />
          <ModalTitle text={title} />
          <span>{message}</span>
          <div className="mt-4 flex gap-x-4 items-center">
            <Button type="default" size="large" danger onClick={handleClose}>
              Cancel
            </Button>
            <Button type="primary" size="large" danger>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
      <div className="cursor-pointer" onClick={handleOpen}>
        {trigger}
      </div>
    </>
  );
};

export default DeleteEnitity;
