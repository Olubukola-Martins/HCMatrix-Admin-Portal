import { Typography } from "antd";

export type TPageTitle = { text: string };
const PageTitle: React.FC<TPageTitle> = ({ text }) => {
  return (
    <Typography.Title className="capitalize" level={3}>
      <span className="font-black">{text}</span>
    </Typography.Title>
  );
};

export default PageTitle;
