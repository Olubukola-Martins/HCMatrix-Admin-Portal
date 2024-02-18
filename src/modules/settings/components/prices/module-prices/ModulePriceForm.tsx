import { Button, Form, Input, Segmented, Select, Skeleton } from "antd";
import { billingCycleOptions, currencyOptions } from "constants";
import { useGetSubscriptions } from "lib/api/subscription";
import { numberHasToBeGreaterThanValueRule } from "lib/validation";
import { useEffect, useState } from "react";
import { TBillingCycle, TCurrency } from "types";

type TPrice = {
  subscriptionId: number;
  subscriptionName: string;
  //   type: string;
  monthlyPricePerLicensedEmployee: number;
  yearlyPricePerLicensedEmployee: number;
};
const ModulePriceForm: React.FC<{
  onSubmit: {
    fn: (props: { prices: TPrice[]; currency: TCurrency }) => void;
    isLoading?: boolean;
  };
}> = ({ onSubmit }) => {
  // TODO: Refactor to a hook
  const [form] = Form.useForm<{ prices: TPrice[] }>();
  const [selection, setSelection] = useState<{
    billingCycle: TBillingCycle;
    currency: TCurrency;
  }>({
    billingCycle: "monthly",
    currency: "usd",
  });
  const { data, isLoading } = useGetSubscriptions({
    priceType: selection.currency,
    type: "module",
  });
  useEffect(() => {
    const prices =
      data?.data.map((subscription) => {
        const price = subscription.prices.find(
          (price) => price.type === selection.currency
        );
        return {
          monthlyPricePerLicensedEmployee:
            price?.monthlyPricePerLicensedEmployee
              ? +price?.monthlyPricePerLicensedEmployee
              : 0,
          subscriptionId: subscription.id,
          subscriptionName: subscription.name,
          yearlyPricePerLicensedEmployee: price?.yearlyPricePerLicensedEmployee
            ? +price?.yearlyPricePerLicensedEmployee
            : 0,
        };
      }) ?? [];
    form.setFieldsValue({
      prices,
    });
  }, [form, data, selection.currency]);
  return (
    <Skeleton active loading={isLoading} paragraph={{ rows: 4 }}>
      <Form
        form={form}
        onFinish={({ prices }) =>
          onSubmit.fn({ prices, currency: selection.currency })
        }
      >
        <div className="flex justify-end gap-x-4 mb-6">
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
              setSelection({
                ...selection,
                currency: v as unknown as TCurrency,
              })
            }
          />
        </div>

        <Form.List name={"prices"}>
          {(fields) => (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-12">
              {fields.map((field) => (
                <div className="">
                  <div className="mb-2">
                    <span className="text-lg font-medium">
                      {
                        form.getFieldValue("prices")[field.name]
                          ?.subscriptionName
                      }
                    </span>
                    <span className="text-xs">/Licensed User</span>
                  </div>
                  <div className="">
                    <Form.Item name={[field.name, "subscriptionId"]} hidden>
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "monthlyPricePerLicensedEmployee"]}
                      hidden={selection.billingCycle !== "monthly"}
                      rules={[numberHasToBeGreaterThanValueRule(-1)]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "yearlyPricePerLicensedEmployee"]}
                      hidden={selection.billingCycle !== "yearly"}
                      rules={[numberHasToBeGreaterThanValueRule(-1)]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Form.List>
        <div className="flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            loading={onSubmit?.isLoading}
          >
            Save
          </Button>
        </div>
      </Form>
    </Skeleton>
  );
};

export default ModulePriceForm;
