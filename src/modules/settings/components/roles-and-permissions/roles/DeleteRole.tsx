import { Button } from "antd";
import DeleteEnitity from "components/entity/DeleteEnitity";

import React from "react";

const DeleteRole: React.FC<{ trigger?: React.ReactNode }> = ({
  trigger = <Button type="primary">Delete</Button>,
}) => {
  return (
    <>
      <DeleteEnitity
        trigger={trigger}
        message="Are you sure you want to delete this role?"
        title="Delete Role"
      />
    </>
  );
};

export default DeleteRole;