import { TApiResponse, TApiResponseWithPagination } from "lib/api/types";
import { TBookingStatus, TCurrency } from "types";

type TError = {
  message: string;
};
type TSuccess = TError;

export { canUserAccessComponent } from "./permissions";
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
export const successFormatter = (success: unknown): TSuccess => {
  const DEFAULT_SUCCESS_MESSAGE = "Operation Successful!";
  return {
    message:
      (success as TApiResponse<null>)?.message ??
      (success as TApiResponseWithPagination<null>)?.message ??
      DEFAULT_SUCCESS_MESSAGE,
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

export const generateAvatarFromInitials = (name: string, bg?: string) => {
  return `https://ui-avatars.com/api/?name=${name
    .split(" ")
    .join("+")}&background=${bg ?? "7772EB"}&color=fff&bold=true`;
};

export const constructUserFullName = (detail?: {
  firstName: string;
  lastName: string;
}) => (detail ? `${detail.firstName} ${detail.lastName}` : `No Name`);

const ECOLOR: { [key: TBookingStatus | string]: string } = {
  pending: "#FFA600",
  approved: "#01966B",
  rejected: "#FF221E",
  closed: "#1ace17",
  low: "#06e9ec",
  high: "#FF221E",
  medium: "#08b0f8",
  active: "#08b0f8",
  new: "#f7e930",
  "in-review": "#FFA600",
};

export const getAppropriateColorForStatus = (status: string) => {
  return ECOLOR?.[status] ?? generateHexColor(status);
};

type TUpdateStatusDetail = {
  message: string;
  title: string;
  confirmText: string;
};
export const generateUpdateStatusDetails = (
  status: TBookingStatus
): TUpdateStatusDetail => {
  let detail: TUpdateStatusDetail = {
    message: "Are you sure you want to update this booking status?",
    title: "Update Status",
    confirmText: "Update",
  };
  switch (status) {
    case "accepted":
      detail = {
        message: "Are you sure you want to accept this booking?",
        title: "Accept Booking",
        confirmText: "Accept",
      };
      break;
    case "rejected":
      detail = {
        message: "Are you sure you want to reject this booking?",
        title: "Reject Booking",
        confirmText: "Reject",
      };
      break;
    case "completed":
      detail = {
        message: "Are you sure you want to mark this booking as completed?",
        title: "Complete Booking",
        confirmText: "Complete",
      };
      break;
    default:
      break;
  }
  return detail;
};
