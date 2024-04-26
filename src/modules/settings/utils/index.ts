import { TDiscountType } from "types";

export const constructLabelNameforDiscountType = (
  discountType?: TDiscountType
): string => {
  let label = "";
  switch (discountType) {
    case "flat":
      label = "amount";

      break;
    case "percentage":
      label = "Discount Rate(%)";

      break;

    default:
      break;
  }
  return label;
};
