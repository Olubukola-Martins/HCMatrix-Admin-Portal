import { useQuery } from "react-query";

import { TAddress, TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TIndustry } from "lib/api/industry";

export const QUERY_KEY_FOR_SINGLE_TAX_REPORT = "single-tax-report";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TTaxReport>> => {
  const url = `finance/tax-report/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TTaxReport>;
  return res;
};

export const useGetSingleTaxReport = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_TAX_REPORT, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};

export type TTaxReport = {
  id: number;
  companySubscriptionId: number;
  vat: string;
  discount: string;
  totalAmount: string;
  totalAmountPaid: string;
  status: string;
  reference: string;
  createdAt: string;
  updatedAt: string;
  companySubscription: CompanySubscription;
};

interface CompanySubscription {
  id: number;
  companyId: number;
  vatId: number;
  vat: Vat;
  company: Company;
}

interface Company {
  id: number;
  name: string;
  logoUrl: string;
  industryId: number;
  addressId: number;
  industry: TIndustry;
  address: TAddress;
}

interface Vat {
  id: number;
  value: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}
