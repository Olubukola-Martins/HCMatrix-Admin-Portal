import { Card, Button, Pagination, Skeleton } from "antd";
import { PropToValues } from "components/detail";
import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import EditRole from "./EditRole";
import DeleteRole from "./DeleteRole";
import { Link } from "react-router-dom";
import { appRoutePaths } from "routes";
import { useGetRoles } from "lib/api/roles-and-permissions/role";
import { usePagination } from "hooks/utils/usePagination";
import { TRole } from "lib/api/roles-and-permissions/role/get-role";
import dayjs from "dayjs";
import { DEFAULT_DATE_FORMAT } from "constants";

const RoleCard: React.FC<
  Pick<TRole, "name" | "id" | "createdAt" | "updatedAt">
> = ({ name, id, createdAt, updatedAt }) => {
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
              roleId={id}
            />
            <DeleteRole
              role={{ id, name }}
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
              {
                key: "Date Created:",
                value: dayjs(createdAt).format(DEFAULT_DATE_FORMAT),
              },
              {
                key: "Last Modified:",
                value: dayjs(updatedAt).format(DEFAULT_DATE_FORMAT),
              },
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
  const { pagination, onChange } = usePagination();
  const { data, isLoading } = useGetRoles();
  return (
    <Skeleton loading={isLoading} paragraph={{ rows: 12 }}>
      <div className="space-y-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-20 gap-x-4 lg:gap-y-10 gap-y-4">
          {data?.data.result?.map(({ name, id, createdAt, updatedAt }) => (
            <RoleCard
              key={id}
              id={id}
              name={name}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Pagination {...pagination} onChange={onChange} size="small" />
        </div>
      </div>
    </Skeleton>
  );
};
