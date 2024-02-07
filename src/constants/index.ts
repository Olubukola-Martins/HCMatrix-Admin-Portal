import { TBillingCycle, TModule } from "types";

export const dummyChartData = Array(15)
  .fill(0)
  .map(() => ({
    year: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][Math.floor(Math.random() * 12)], // Use Math.floor() to get a random index between 0 and 11
    value: Math.random() * 10 + 2, // Generate a random value between 2 and 12
    category: "Category A", // You can uncomment this line if you want all items to have the same category
  }));

export const billingCycleOptions: TBillingCycle[] = ["monthly", "yearly"];
export const moduleOptions: TModule[] = [
  "employee-management",
  "hr-admin",
  "payroll",
  "time-and-attendance",
  "performance",
  "recruitment",
  "learning-and-development",
];
