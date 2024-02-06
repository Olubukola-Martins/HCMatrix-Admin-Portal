import {
  UserMetricsIcon,
  ItAuditMetricsIcon,
  FinanceMetricsIcon,
  SalesMetricsIcon,
  TrainingSessionMetricsIcon,
  ReportsIcon,
} from "components/icons";
import { appRoutePaths } from "routes";
type TSidebarLink = { label: string; icon: React.ReactNode; link: string };
const useGenerateSidebarLinks = (): { links: TSidebarLink[] } => {
  return {
    links: [
      {
        label: "User Metrics",
        icon: <UserMetricsIcon />,
        link: appRoutePaths.userMetrics,
      },
      {
        label: "IT/Audit Metrics",
        icon: <ItAuditMetricsIcon />,
        link: appRoutePaths.itAuditMetrics,
      },
      {
        label: "Finance Metrics",
        icon: <FinanceMetricsIcon />,
        link: appRoutePaths.financeMetrics,
      },
      {
        label: "Sales Metrics",
        icon: <SalesMetricsIcon />,
        link: appRoutePaths.salesMetrics,
      },
      {
        label: "Training Sessions",
        icon: <TrainingSessionMetricsIcon />,
        link: appRoutePaths.trainingSessions,
      },
      {
        label: "Reports",
        icon: <ReportsIcon />,
        link: appRoutePaths.reports,
      },
    ],
  };
};

export default useGenerateSidebarLinks;
