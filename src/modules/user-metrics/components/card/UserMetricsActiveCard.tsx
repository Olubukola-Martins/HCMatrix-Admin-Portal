import { Icon } from "@iconify/react/dist/iconify.js";

interface IActiveCardProps {
  header: string;
  icon: string;
  iconColor: string;
  iconText: string;
  days: string;
  ratingText: string;
}
export const UserMetricsActiveCard: React.FC<IActiveCardProps> = ({
  header,
  days,
  icon,
  iconColor,
  iconText,
  ratingText,
}) => {
  const isPositive = ratingText.startsWith("+");
  const isNegative = ratingText.startsWith("-");

  const ratingColor = isPositive ? "#01966B" : isNegative ? "#FF221E" : "black";
  const ratingIcon = isPositive
    ? "octicon:arrow-up-24"
    : isNegative
    ? "octicon:arrow-down-24"
    : "";
  return (
    <div className="border rounded-lg w-72 p-3">
      <div className="border rounded-lg p-4">
        <h2 className="text-center text-base py-2">{header}</h2>
        <div className="flex gap-5 items-center">
          <div
            className="border rounded-full p-1"
            style={{ borderColor: iconColor }}
          >
            <Icon
              icon={icon}
              width="20"
              height="20"
              style={{ color: iconColor }}
            />
          </div>

          <p className="">{iconText}</p>
          <p>
            <span className="font-bold text-lg">{days}</span> days
          </p>
          <p className="flex gap-1 items-center" style={{ color: ratingColor }}>
            {ratingText}{" "}
            {ratingIcon && (
              <Icon
                icon={ratingIcon}
                width="15"
                height="15"
                style={{ color: ratingColor }}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
