import TitleByIconHoverableCard from "components/cards/TitleByIconHoverableCard";
import { PageLayout } from "components/layouts";
import { Link } from "react-router-dom";
import { useGenerateSettingPageLinks } from "../hooks/useGenerateSettingPageLinks";

const SettingsContainer = () => {
  const { links } = useGenerateSettingPageLinks();
  return (
    <PageLayout
      header={{
        title: {
          text: "Settings",
        },
      }}
    >
      <div className="bg-card lg:px-12 lg:py-10 px-6 py-4 flex flex-col gap-y-4 rounded-md">
        {links.map(({ label, link }, i) => (
          <Link key={i} to={link}>
            <TitleByIconHoverableCard label={label} />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default SettingsContainer;
