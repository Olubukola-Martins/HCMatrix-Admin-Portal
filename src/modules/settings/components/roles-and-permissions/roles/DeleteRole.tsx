import { Button } from "antd";
import DeleteEnitity from "components/entity/DeleteEnitity";
import { QUERY_KEY_FOR_ROLES } from "lib/api/roles-and-permissions/role";
import { TRole } from "lib/api/roles-and-permissions/role/get-role";
import { EENTITY_TO_BE_DELETED, useDeleteEntity } from "lib/api/utils";

import React from "react";
import { useQueryClient } from "react-query";

const DeleteRole: React.FC<{
  trigger?: React.ReactNode;
  role: Pick<TRole, "id" | "name">;
}> = ({
  trigger = <Button type="primary">Delete</Button>,
  role: { id, name },
}) => {
  const { mutate, isLoading } = useDeleteEntity();
  const queryClient = useQueryClient();

  return (
    <>
      <DeleteEnitity
        trigger={trigger}
        message={`Are you sure you want to delete this ${name} role?`}
        title="Delete Role"
        handleDelete={{
          isLoading,
          fn: () =>
            mutate(
              { enitity: EENTITY_TO_BE_DELETED.ROLE, id },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries([QUERY_KEY_FOR_ROLES]);
                },
              }
            ),
        }}
      />
    </>
  );
};

export default DeleteRole;
