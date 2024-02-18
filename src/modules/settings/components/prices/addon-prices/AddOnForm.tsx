// TODO: Ensure that the price for unlicenced user is retrieved from the server, and not from your manipulation here, inform Backend
import { Segmented, Select } from "antd";
import { billingCycleOptions, currencyOptions } from "constants";
import { useState } from "react";
import { TBillingCycle, TCurrency } from "types";
import UnlicensedUserForm from "./unlicensed-users/UnlicensedUserForm";
import SupportCasesContainer from "./support-cases/SupportCasesContainer";
import TrainingSessionsContainer from "./training-sessions/TrainingSessionsContainer";
import ExtraStoragesContainer from "./extra-storage/ExtraStoragesContainer";
import { useUpdateUnLicensedPrices } from "lib/api/subscription/prices/update-unlicensed-prices";

const AddOnForm = () => {
  const [selection, setSelection] = useState<{
    billingCycle: TBillingCycle;
    currency: TCurrency;
  }>({
    billingCycle: "monthly",
    currency: "usd",
  });
  const {
    mutate: updateUnlicensedPrices,
    isLoading: isUpdatingUnlicensedPrices,
  } = useUpdateUnLicensedPrices();
  return (
    <div>
      <div className="flex justify-end gap-x-4">
        <Select
          options={billingCycleOptions.map((item) => ({
            value: item,
            label: <span className="capitalize">{item}</span>,
          }))}
          className="min-w-24"
          value={selection.billingCycle}
          onSelect={(v) => setSelection({ ...selection, billingCycle: v })}
        />
        <Segmented
          options={currencyOptions.map((item) => ({
            value: item,
            label: <span className="uppercase">{item}</span>,
          }))}
          value={selection.currency}
          onChange={(v) =>
            setSelection({ ...selection, currency: v as unknown as TCurrency })
          }
        />
      </div>

      <div className="flex flex-col gap-y-12">
        <UnlicensedUserForm
          selection={selection}
          className="border-b border-card pb-4"
          handleSubmit={{
            isLoading: isUpdatingUnlicensedPrices,
            fn: ({ prices }) => {
              updateUnlicensedPrices({
                prices,
              });
            },
          }}
        />
        <SupportCasesContainer
          selection={selection}
          className="border-b border-card pb-4"
        />
        <TrainingSessionsContainer
          selection={selection}
          className="border-b border-card pb-4"
        />
        <ExtraStoragesContainer
          selection={selection}
          className="border-b border-card pb-4"
        />
      </div>
    </div>
  );
};

export default AddOnForm;
