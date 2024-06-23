import moment from "moment";

const generateDateUsageArray = () => {
  const dateUsageArray = [];
  const startDate = moment().subtract(2, "months").startOf("day");
  const endDate = moment();

  let currentDate = startDate.clone();

  while (currentDate.isBefore(endDate)) {
    const date = currentDate.format("YYYY-MM-DD");
    const usageCount = Math.floor(Math.random() * 100); // Random usage count between 0 and 99

    dateUsageArray.push({
      date,
      usageCount,
    });

    currentDate.add(1, "day");
  }

  return dateUsageArray;
};

const usersUsageMockData = generateDateUsageArray();

export {usersUsageMockData}
