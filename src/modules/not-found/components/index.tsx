import { PageNotFoundIcon } from "components/icons";
import { PageLayout } from "components/layouts";

const PageNotFoundContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Page not found!",
        },
      }}
    >
      <div className="flex flex-col gap-4 w-full items-center">
        <PageNotFoundIcon />
      </div>
    </PageLayout>
  );
};

export default PageNotFoundContainer;
