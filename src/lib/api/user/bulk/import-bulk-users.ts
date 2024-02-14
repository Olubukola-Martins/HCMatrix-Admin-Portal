import axios from "axios";
import { useMutation } from "react-query";

type TData = {
  csvFile: File;
};
const createData = async (props: { data: TData }) => {
  const url = `/user/bulk`;

  const data: TData = {
    ...props.data,
  };

  const response = await axios.postForm(url, data);
  return response;
};
export const useImportUsers = () => {
  return useMutation((props: { data: TData }) =>
    createData({
      data: props.data,
    })
  );
};
