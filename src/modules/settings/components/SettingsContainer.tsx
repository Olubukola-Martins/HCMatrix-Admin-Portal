import TitleByIconHoverableCard from "components/cards/TitleByIconHoverableCard";
import { PageLayout } from "components/layouts";
import { Link } from "react-router-dom";
import { useGenerateSettingPageLinks } from "../hooks/useGenerateSettingPageLinks";
import { Skeleton } from "antd";

const SettingsContainer = () => {
  const { links, isLoading } = useGenerateSettingPageLinks();
  return (
    <PageLayout
      header={{
        title: {
          text: "Settings",
        },
      }}
    >
      <Skeleton active loading={isLoading} paragraph={{ rows: 8 }}>
        <div className="bg-card lg:px-12 lg:py-10 px-6 py-4 flex flex-col gap-y-4 rounded-md">
          {links.map(({ label, link }, i) => (
            <Link key={i} to={link}>
              <TitleByIconHoverableCard label={label} />
            </Link>
          ))}
        </div>
      </Skeleton>
    </PageLayout>
  );
};

export default SettingsContainer;
