import { useMutation } from "react-query";
import download from "js-file-download";
import httpClient from "lib/http";

type TResponse = void;

const TEMPLATE_NAME = "user-template.csv";
const createData = async (): Promise<TResponse> => {
  const url = `/user/bulk`;

  const res = await httpClient.get(url);

  download(res.data, TEMPLATE_NAME);
};

export const useGetImportUsersTemplate = () => {
  return useMutation(() => createData());
};
