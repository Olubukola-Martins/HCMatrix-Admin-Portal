import { Button } from "antd";
import DeleteEnitity from "components/entity/DeleteEnitity";

import React from "react";

const DeleteUser: React.FC<{ trigger?: React.ReactNode; userId: number }> = ({
  trigger = <Button type="primary">Delete</Button>,
}) => {
  return (
    <>
      <DeleteEnitity
        trigger={trigger}
        message="Are you sure you want to delete this user?"
        title="Delete User"
      />
    </>
  );
};

export default DeleteUser;
