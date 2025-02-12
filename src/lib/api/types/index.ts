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

export type TAddress = {
  id: number;
  streetAddress: string;
  countryId: number;
  stateId: number;
  lgaId: number;
  timezone: string;
  longitude?: string | null;
  latitude?: string | null;
  createdAt: string;
  updatedAt: string;
  country: Country;
  state: State;
  lga: Lga;
};

interface Lga {
  id: number;
  name: string;
  stateId: number;
  createdAt: string;
  updatedAt: string;
}

interface State {
  id: number;
  name: string;
  countryId: number;
  createdAt: string;
  updatedAt: string;
}

interface Country {
  id: number;
  name: string;
  sortName: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}
