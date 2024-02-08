import { Card, Typography } from "antd";
import { PageLayout } from "components/layouts";
import { settingPageLinks } from "constants";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SettingsContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Settings",
        },
      }}
    >
      <div className="bg-card lg:px-12 lg:py-10 px-6 py-4 flex flex-col gap-y-4 rounded-md">
        {settingPageLinks.map(({ label, link }, i) => (
          <Link key={i} to={link}>
            <Card>
              <div className="flex justify-between items-center group">
                <Typography.Title level={4}>
                  <span className="group-hover:text-primary">{label}</span>
                </Typography.Title>
                <FaChevronRight className="group-hover:text-primary" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default SettingsContainer;
