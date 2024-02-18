import { useQuery } from "react-query";

import { TAddress, TApiResponse } from "lib/api/types";
import httpClient from "lib/http";
import { TIndustry } from "lib/api/industry";
import { TCurrency } from "types";

export const QUERY_KEY_FOR_SINGLE_SCHEDULED_RENEWAL =
  "single-scheduled-renewal";

type TGetDataProps = { id: number };
const getData = async (
  props: TGetDataProps
): Promise<TApiResponse<TScheduledRenewal>> => {
  const url = `finance/scheduled-renewal/${props.id}`;

  const response = await httpClient.get(url);
  const res = response.data as TApiResponse<TScheduledRenewal>;
  return res;
};

export const useGetSingleScheduledRenewal = (props: TGetDataProps) => {
  const queryData = useQuery(
    [QUERY_KEY_FOR_SINGLE_SCHEDULED_RENEWAL, props.id],
    () => getData({ ...props }),
    {}
  );

  return queryData;
};

export type TScheduledRenewal = {
  id: number;
  companyId: number;
  isActive: boolean;
  isFreeTrial: boolean;
  autoRenew: boolean;
  billingCycle: string;
  priceType: TCurrency;
  startDate: string;
  endDate: string;
  licensedEmployeeCount: number;
  unlicensedEmployeeCount: number;
  deactivatedEmployeeCount: number;
  createdAt: string;
  updatedAt: string;
  company: Company;
  transaction: Transaction;
  purchased: Purchased[];
  addOns: AddOns;
};

interface AddOns {
  id: number;
  companySubscriptionId: number;
  supportCaseId: number;
  extraStorageId: number;
  trainingSessionId: number;
  createdAt: string;
  updatedAt: string;
  extraStorage: ExtraStorage;
  supportCase: SupportCase;
  trainingSession: TrainingSession;
}

interface TrainingSession {
  id: number;
  name: string;
  label: string;
  description: string;
  numberOfHours: number;
  priceInNgn: string;
  priceInUsd: string;
  createdAt: string;
  updatedAt: string;
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

interface Company {
  id: number;
  name: string;
  label: string;
  tag: string;
  email: string;
  phoneNumber: string;
  isParent: boolean;
  isActive: boolean;
  color: string;
  industryId: number;
  userId: number;
  addressId?: number | null;
  logoUrl?: string | null;
  website?: string | null;
  parentId?: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  address?: TAddress | null;
  industry: TIndustry;
}
