import { Button } from "antd";
import DeleteEnitity from "components/entity/DeleteEnitity";

import React from "react";

const DeleteSpecificDiscount: React.FC<{
  trigger?: React.ReactNode;
  discountId: number;
}> = ({ trigger = <Button type="primary">Delete</Button> }) => {
  return (
    <>
      <DeleteEnitity
        trigger={trigger}
        message="Are you sure you want to delete this discount?"
        title="Delete Discount"
      />
    </>
  );
};

export default DeleteSpecificDiscount;
