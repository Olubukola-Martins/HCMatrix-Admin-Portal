import { Button } from "antd";
import DeleteEnitity from "components/entity/DeleteEnitity";
import { QUERY_KEY_FOR_USERS } from "lib/api/user";
import { TUser } from "lib/api/user/get-user";
import { EENTITY_TO_BE_DELETED, useDeleteEntity } from "lib/api/utils";
import { constructUserFullName } from "lib/utils";

import React from "react";
import { useQueryClient } from "react-query";

const DeleteUser: React.FC<{
  trigger?: React.ReactNode;
  user: Pick<TUser, "user" | "id" | "firstName" | "lastName">;
}> = ({ trigger = <Button type="primary">Delete</Button>, user }) => {
  const { mutate, isLoading } = useDeleteEntity();
  const queryClient = useQueryClient();
  return (
    <>
      <DeleteEnitity
        trigger={trigger}
        message={`Are you sure you want to delete ${constructUserFullName(
          user
        )}?`}
        title="Delete User"
        handleDelete={{
          isLoading,
          fn: () =>
            mutate(
              { enitity: EENTITY_TO_BE_DELETED.USER, id: user.id },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries([QUERY_KEY_FOR_USERS]);
                },
              }
            ),
        }}
      />
    </>
  );
};

export default DeleteUser;
