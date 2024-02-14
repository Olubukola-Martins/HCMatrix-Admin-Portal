import { useQuery } from "react-query";

import { TAddress, TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TIndustry } from "lib/api/industry";
import { TCompany } from "lib/api/company";

export const QUERY_KEY_FOR_SINGLE_TRANSACTION = "single-transaction";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TTransaction>> => {
  const url = `finance/transaction-history/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TTransaction>;
  return res;
};

export const useGetSingleTransaction = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_TRANSACTION, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};

export type TTransaction = {
  id: number;
  companyId: number;
  isActive: boolean;
  isFreeTrial: boolean;
  autoRenew: boolean;
  billingCycle: string;
  priceType: string;
  startDate: string;
  endDate: string;
  licensedEmployeeCount: number;
  unlicensedEmployeeCount: number;
  deactivatedEmployeeCount: number;
  createdAt: string;
  updatedAt: string;
  company: TCompany & { address: TAddress; industry: TIndustry };
  transaction: Transaction;
  purchased: Purchased[];
  addOns: AddOns;
};

interface AddOns {
  id: number;
  companySubscriptionId: number;
  supportCaseId: number;
  extraStorageId: number;
  trainingSessionId?: null;
  createdAt: string;
  updatedAt: string;
  extraStorage: ExtraStorage;
  supportCase: SupportCase;
  trainingSession?: TrainingSession;
}

interface SupportCase {
  id: number;
  name: string;
  label: string;
  description: string;
  priceInNgn: string;
  priceInUsd: string;
  createdAt: string;
  updatedAt: string;
}

interface ExtraStorage {
  id: number;
  name: string;
  label: string;
  description: string;
  size: number;
  priceInNgn: string;
  priceInUsd: string;
  createdAt: string;
  updatedAt: string;
}

interface Purchased {
  id: number;
  companySubscriptionId: number;
  subscriptionId: number;
  createdAt: string;
  updatedAt: string;
  subscription: Subscription;
}

interface Subscription {
  id: number;
  type: string;
  name: string;
  label: string;
  iconUrl?: string | null;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

interface Transaction {
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
}

type TrainingSession = {
  id: number;
  name: string;
  label: string;
  description: string;
  numberOfHours: number;
  priceInNgn: string;
  priceInUsd: string;
  createdAt: string;
  updatedAt: string;
};
