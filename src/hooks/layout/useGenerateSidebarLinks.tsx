import {
  UserMetricsIcon,
  ItAuditMetricsIcon,
  FinanceMetricsIcon,
  SalesMetricsIcon,
  TrainingSessionMetricsIcon,
  ReportsIcon,
} from "components/icons";
import { useGetUserPermissions } from "hooks/permission";
import { canUserAccessComponent } from "lib/utils";
import { appRoutePaths } from "routes";
type TSidebarLink = {
  label: string;
  icon: React.ReactNode;
  link: string;
  hidden?: boolean;
};
const useGenerateSidebarLinks = (): {
  links: TSidebarLink[];
  isLoading?: boolean;
} => {
  const { userPermissions, isLoading } = useGetUserPermissions();
  let links: TSidebarLink[] = [];

  links = [
    {
      label: "User Metrics",
      icon: <UserMetricsIcon />,
      link: appRoutePaths.userMetrics,
      hidden: true,
    },
    {
      label: "IT/Audit Metrics",
      icon: <ItAuditMetricsIcon />,
      link: appRoutePaths.itAuditMetrics,
      hidden: true,
    },
    {
      label: "Finance Metrics",
      icon: <FinanceMetricsIcon />,
      link: appRoutePaths.financeMetrics,
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-finance-metrics"],
      }),
    },
    {
      label: "Sales Metrics",
      icon: <SalesMetricsIcon />,
      link: appRoutePaths.salesMetrics,
      hidden: true,
    },
    {
      label: "Training Sessions",
      icon: <TrainingSessionMetricsIcon />,
      link: appRoutePaths.trainingSessions,
      hidden: !canUserAccessComponent({
        userPermissions,
        requiredPermissions: ["view-training-sessions"],
      }),
    },
    {
      label: "Reports",
      icon: <ReportsIcon />,
      link: appRoutePaths.reports,
      hidden: true,
    },
  ];
  links = links.filter(
    (item) => item?.hidden === false || item.hidden === undefined
  );
  return { links, isLoading };
};

export default useGenerateSidebarLinks;
