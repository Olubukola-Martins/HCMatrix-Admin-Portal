import { TCurrency } from "types";

type TError = {
  error: string;
};

export const errorMessageFormatter = (error: any): TError => {
  if (error.response) {
    return error.response.data;
  } else if (error.request) {
    return error.request;
  } else {
    return { error: error.message };
  }
};

export const generateHexColor = (input: string | number): string => {
  // Convert the input string to a hash code
  const data = `${input}`;
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    hash = data.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate a hex color from the hash
  const color = (hash & 0x00ffffff).toString(16).toUpperCase();

  // Pad the color code with zeros if needed
  return "#" + "00000".substring(0, 6 - color.length) + color;
};

const CURRENCY_MAP: Record<TCurrency, string> = {
  ngn: "₦",
  usd: "$",
};
export const currencyFormatter = (props: {
  currency: TCurrency;
  value: string | number;
}) => {
  const { currency, value } = props;
  return `${CURRENCY_MAP[currency]} ${value}`;
};

export const generateAvatarFromInitials = (name: string) => {
  return `https://ui-avatars.com/api/?name=${name
    .split(" ")
    .join("+")}&background=7772EB&color=fff&bold=true`;
};
