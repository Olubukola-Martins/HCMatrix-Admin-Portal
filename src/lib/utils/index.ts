import { TCurrency } from "types";

type TError = {
  message: string;
};

export const errorFormatter = (error: unknown): TError => {
  const DEFAULT_ERR_MESSAGE = "Ooops! Something went wrong!";
  return {
    message:
      (error as Record<string, Record<string, Record<string, string>>>)
        ?.response.data.message ??
      (
        error as Record<
          string,
          Record<string, Record<string, Record<string, string>>>
        >
      )?.response.data.error.message ??
      DEFAULT_ERR_MESSAGE,
  };
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

export function formatNumberWithCommas(
  value: number | string | undefined,
  minimumFractionDigits?: number
) {
  if (typeof value === "undefined") return "0";
  if (typeof value === "string")
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: minimumFractionDigits ?? 2,
    });

  return value.toLocaleString("en-US", {
    minimumFractionDigits: minimumFractionDigits ?? 2,
  });
}
const CURRENCY_MAP: Record<TCurrency, string> = {
  ngn: "₦",
  usd: "$",
};
export const currencyFormatter = (props: {
  currency: TCurrency;
  value: string | number;
}) => {
  const { currency, value } = props;
  return `${CURRENCY_MAP[currency]}${formatNumberWithCommas(value)}`;
};

export const generateAvatarFromInitials = (name: string) => {
  return `https://ui-avatars.com/api/?name=${name
    .split(" ")
    .join("+")}&background=7772EB&color=fff&bold=true`;
};
