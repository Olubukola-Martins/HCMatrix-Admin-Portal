import { Pie } from "@ant-design/charts";

const dummyChartData = [
  {
    type: "Performance",
    value: 27,
  },
  {
    type: "Payroll",
    value: 25,
  },
  {
    type: "Hr Admin",
    value: 18,
  },
  {
    type: "Learning & Development",
    value: 15,
  },
  {
    type: "Recruitment",
    value: 10,
  },
  {
    type: "Time & Attendance",
    value: 5,
  },
];
const DoughnutChart: React.FC<{ data?: Record<string, number | string>[] }> = ({
  data = dummyChartData,
}) => {
  // const config = {
  //   appendPadding: 10,
  //   data,
  //   angleField: "value",
  //   colorField: "type",
  //   radius: 1,
  //   innerRadius: 0.6,
  //   // label: {
  //   //   // type: "inner",
  //   //   // offset: "-50%",
  //   //   // content: "{value}",
  //   //   // style: {
  //   //   //   textAlign: "center",
  //   //   //   fontSize: 14,
  //   //   // },
  //   // },
  //   interactions: [
  //     {
  //       type: "element-selected",
  //     },
  //     {
  //       type: "element-active",
  //     },
  //   ],
  //   statistic: {
  //     title: false,
  //     content: {
  //       style: {
  //         whiteSpace: "pre-wrap",
  //         overflow: "hidden",
  //         textOverflow: "ellipsis",
  //       },
  //       content: "__",
  //     },
  //   },
  // };
  return (
    <Pie
      {...{
        appendPadding: 1,
        data,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        label: false,
        // label: {
        //   // type: "inner",
        //   // offset: "-50%",
        //   // content: "{value}",
        //   // style: {
        //   //   textAlign: "center",
        //   //   fontSize: 14,
        //   // },
        // },
        interactions: [
          {
            type: "element-selected",
          },
          {
            type: "element-active",
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: "pre-wrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            content: "__",
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
