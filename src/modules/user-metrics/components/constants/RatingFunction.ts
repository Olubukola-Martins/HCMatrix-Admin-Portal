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
  