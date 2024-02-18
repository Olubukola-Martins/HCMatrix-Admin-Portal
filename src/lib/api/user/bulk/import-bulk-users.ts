import httpClient from "lib/http";
import { useMutation, useQueryClient } from "react-query";
import { TFormFileInput } from "types";
import { QUERY_KEY_FOR_USERS } from "..";

export type TImportUsersInput = {
  csvFile: TFormFileInput[];
};
type TCreateDataProps = {
  data: {
    csvFile: TFormFileInput["originFileObj"];
  };
};
const createData = async (props: TCreateDataProps) => {
  const url = `/user/bulk`;

  const data: TCreateDataProps["data"] = {
    csvFile: props.data.csvFile,
  };

  const response = await httpClient.postForm(url, { ...data });
  return response;
};
export const useImportUsers = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (props: TImportUsersInput) =>
      createData({
        data: {
          csvFile: props.csvFile[0].originFileObj,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY_FOR_USERS]);
      },
    }
  );
};
