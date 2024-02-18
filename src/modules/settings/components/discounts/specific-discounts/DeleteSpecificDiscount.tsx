import { Button } from "antd";
import DeleteEnitity from "components/entity/DeleteEnitity";
import {
  QUERY_KEY_FOR_DISCOUNTS,
  TDiscount,
} from "lib/api/subscription/discount";
import { EENTITY_TO_BE_DELETED, useDeleteEntity } from "lib/api/utils";

import React from "react";
import { useQueryClient } from "react-query";

const DeleteSpecificDiscount: React.FC<{
  trigger?: React.ReactNode;
  discount: Pick<TDiscount, "id" | "company">;
}> = ({
  trigger = <Button type="primary">Delete</Button>,
  discount: { id, company },
}) => {
  const { isLoading, mutate } = useDeleteEntity();
  const queryClient = useQueryClient();
  return (
    <>
      <DeleteEnitity
        trigger={trigger}
        message={`Are you sure you want to delete the discount for ${company.name}?`}
        title="Delete Discount"
        handleDelete={{
          fn: () => {
            mutate(
              { enitity: EENTITY_TO_BE_DELETED.DISCOUNT, id },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries(QUERY_KEY_FOR_DISCOUNTS);
                },
              }
            );
          },
          isLoading,
        }}
      />
    </>
  );
};

export default DeleteSpecificDiscount;
