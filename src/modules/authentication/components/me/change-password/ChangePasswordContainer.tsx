import { PageLayout } from "components/layouts";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePasswordContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Change Password",
        },
      }}
    >
      <div className="mx-auto flex justify-stretch w-4/6">
        <ChangePasswordForm />
      </div>
    </PageLayout>
  );
};
export default ChangePasswordContainer;
