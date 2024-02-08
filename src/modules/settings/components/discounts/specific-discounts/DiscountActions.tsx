import { Button, Dropdown } from "antd";
import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import UpdateDiscountEndDate from "./UpdateDiscountEndDate";
import DeleteSpecificDiscount from "./DeleteSpecificDiscount";

type TAction = "change-end-date" | "delete-discount";
const DiscountActions: React.FC<{
  discountId: number;
  trigger: React.ReactNode;
  actions?: TAction[];
}> = ({
  discountId,
  trigger = <Button icon={<AiOutlineMore />} type="text" />,
  actions = ["change-end-date", "delete-discount"],
}) => {
  return (
    <>
      <Dropdown
        menu={{
          items: [
            {
              key: "Change End Date",
              label: <UpdateDiscountEndDate discountId={discountId} />,
              disabled: !actions.includes("change-end-date"),
            },

            {
              key: "Delete Discount",
              label: <DeleteSpecificDiscount discountId={discountId} />,
              disabled: !actions.includes("delete-discount"),
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

export default DiscountActions;
