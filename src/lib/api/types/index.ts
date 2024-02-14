export type TApiResponse<T> = {
  message: string;
  data: T;
};

export interface IPaginationProps {
  limit?: number;
  offset?: number;
}

export type TApiResponseWithPagination<T> = {
  message: string;
  data: {
    result: T[];
    totalCount: number;
  };
};
