import React from "react";

const PropToValues: React.FC<{
  data?: { key: string; value: string | number }[];
}> = ({ data }) => {
  return (
    <ul className="space-y-2">
      {data?.map((item, index) => (
        <li key={index} className="space-x-2">
          <span className="text-gray-500">{item?.key}</span>
          <span>{item?.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default PropToValues;
