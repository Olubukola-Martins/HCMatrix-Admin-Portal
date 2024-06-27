export const getRatingDetails = (rating: string) => {
  const isPositive = rating.startsWith("+");
  const isNegative = rating.startsWith("-");

  const ratingColor = isPositive ? "#01966B" : isNegative ? "#FF221E" : "black";
  const ratingIcon = isPositive
    ? "octicon:arrow-up-24"
    : isNegative
    ? "octicon:arrow-down-24"
    : "";

  return {
    isPositive,
    isNegative,
    ratingColor,
    ratingIcon,
  };
};

export const getUserMetricDBComparisonIndicatorValues = (
  value: number
): { color: string; icon: string; formattedValue: string } => {
  let color = "black";
  let icon = "";
  let formattedValue = value.toString();

  if (value > 0) {
    color = "#01966B";
    icon = "octicon:arrow-up-24";
    formattedValue = `+${value}`;
  } else if (value < 0) {
    color = "#FF221E";
    icon = "octicon:arrow-down-24";
    formattedValue = `${value}`;
  }

  return {
    color,
    icon,
    formattedValue,
  };
};
