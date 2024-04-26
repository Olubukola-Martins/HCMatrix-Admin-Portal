import { TDiscountType } from "types";

export const constructLabelNameforDiscountType = (
  discountType?: TDiscountType
): string => {
  let label = "Discount Value";
  switch (discountType) {
    case "flat":
      label = "Discount Amount";

      break;
    case "percentage":
      label = "Discount Rate(%)";

      break;

    default:
      break;
  }
  return label;
};
