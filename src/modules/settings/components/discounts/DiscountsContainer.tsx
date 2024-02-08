import TitleByIconHoverableCard from "components/cards/TitleByIconHoverableCard";
import { PageLayout } from "components/layouts";
import { discountPageLinks } from "constants";
import { Link } from "react-router-dom";

const DiscountsContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Discounts",
        },
      }}
    >
      <div className="bg-card lg:px-12 lg:py-10 px-6 py-4 flex flex-col gap-y-4 rounded-md">
        {discountPageLinks.map(({ label, link }, i) => (
          <Link key={i} to={link}>
            <TitleByIconHoverableCard label={label} />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default DiscountsContainer;
