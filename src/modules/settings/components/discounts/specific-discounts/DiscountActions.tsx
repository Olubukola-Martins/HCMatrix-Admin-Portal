import { Button, Dropdown } from "antd";
import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import UpdateDiscountEndDate from "./UpdateDiscountEndDate";
import DeleteSpecificDiscount from "./DeleteSpecificDiscount";
import { TDiscount } from "lib/api/subscription/discount";

type TAction = "change-end-date" | "delete-discount";
const DiscountActions: React.FC<{
  discount: Pick<TDiscount, "id" | "company" | "endDate">;
  trigger?: React.ReactNode;
  actions?: TAction[];
}> = ({
  discount,
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
              label: (
                <UpdateDiscountEndDate
                  discount={discount}
                  trigger="Change End Date"
                />
              ),
              disabled: !actions.includes("change-end-date"),
            },

            {
              key: "Delete Discount",
              label: (
                <DeleteSpecificDiscount
                  discount={discount}
                  trigger="Delete Discount"
                />
              ),
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
