import { Card, Button } from "antd";
import { PropToValues } from "components/detail";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditRole from "./EditRole";
import DeleteRole from "./DeleteRole";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";

const RoleCard: React.FC<{ name: string; id: number }> = ({ name, id }) => {
  return (
    <Card
      className="shadow-sm"
      title={
        <div className="flex justify-between">
          <span className="text-lg">{name}</span>
          <div className="flex gap-x-1">
            <EditRole
              trigger={
                <Button
                  type="text"
                  icon={<MdOutlineModeEdit className="text-lg" />}
                />
              }
            />
            <DeleteRole
              trigger={
                <Button
                  type="text"
                  icon={<RiDeleteBin5Line className="text-lg" />}
                />
              }
            />
          </div>
        </div>
      }
    >
      <div className="flex justify-center">
        <div className="flex items-center lg:gap-x-8 justify-between mx-auto w-5/6 ">
          <PropToValues
            data={[
              { key: "Date Created:", value: "10/10/2022" },
              { key: "Last Modified:", value: "10/10/2022" },
            ]}
          />
          <Link to={appRoutePaths.rolePermissions(id).path}>
            <Button type="primary" ghost>
              Add Permissions
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
export const RoleCards = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-20 gap-x-4 lg:gap-y-10 gap-y-4">
      {Array(5)
        .fill({ name: "Role 1" })
        .map(({ name }, i) => (
          <RoleCard key={i} id={i} name={name} />
        ))}
    </div>
  );
};
