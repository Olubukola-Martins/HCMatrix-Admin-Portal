import { Select } from "antd";
import { PageLayout } from "components/layouts";
import { AverageDaysActive } from "./card/AverageDaysActive";
import {
  USER_METRICS_DASHBOARD_DUMMY_COMPANY_OPTIONS,
  USER_METRICS_DASHBOARD_VIEW_OPTIONS,
} from "../constants/dummyConstants";

export const UserMetricsContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "User Metrics",
        },
        supportingComp: (
          <div className="flex gap-5">
            <div className="w-1/2">
              {" "}
              <Select
                options={USER_METRICS_DASHBOARD_DUMMY_COMPANY_OPTIONS}
                defaultValue={
                  USER_METRICS_DASHBOARD_DUMMY_COMPANY_OPTIONS?.[0].value
                }
              />
            </div>

            <Select
              options={USER_METRICS_DASHBOARD_VIEW_OPTIONS}
              defaultValue={USER_METRICS_DASHBOARD_VIEW_OPTIONS?.[0].value}
            />
          </div>
        ),
      }}
    >
      <div>
        
      </div>
    </PageLayout>
  );
};
