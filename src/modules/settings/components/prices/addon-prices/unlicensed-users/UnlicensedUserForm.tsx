import { Button, Form, Input, Skeleton } from "antd";
import { useGetSubscriptions } from "lib/api/subscription";
import { TUpdateUnlicensedPricesInput } from "lib/api/subscription/prices/update-unlicensed-prices";
import { numberHasToBeGreaterThanValueRule } from "lib/validation";
import { useEffect } from "react";
import { IDivProps, TBillingCycle, TCurrency } from "types";

const UnlicensedUserForm: React.FC<
  IDivProps & {
    selection: {
      billingCycle: TBillingCycle;
      currency: TCurrency;
    };
    handleSubmit: {
      fn: (props: TUpdateUnlicensedPricesInput) => void;
      isLoading?: boolean;
    };
  }
> = ({ selection, className, handleSubmit }) => {
  const [form] = Form.useForm<TUpdateUnlicensedPricesInput>();
  const { data, isLoading } = useGetSubscriptions({
    priceType: selection.currency,
    type: "module",
  });

  useEffect(() => {
    const prices: TUpdateUnlicensedPricesInput["prices"] =
      data?.data
        .filter((sub) => sub.label !== "employee-management")
        .map((subscription) => {
          const price = subscription.prices.find(
            (price) => price.type === selection.currency
          );
          return {
            monthlyPricePerUnlicensedEmployee:
              price?.monthlyPricePerUnlicensedEmployee
                ? +price?.monthlyPricePerUnlicensedEmployee
                : 0,
            type: selection.currency,
            yearlyPricePerUnlicensedEmployee:
              price?.yearlyPricePerUnlicensedEmployee
                ? +price?.yearlyPricePerUnlicensedEmployee
                : 0,
          };
        }) ?? [];
    form.setFieldsValue({
      prices: prices
        .filter((item) => item.type === selection.currency)
        .slice(0, 1), //This is sliced as we only update for a type(ngn/usd) and not all subscriptions, note -> employee management is skipped above as its always to be zero, as per project defined specifications
    });
  }, [form, selection.currency, data]);
  return (
    <Skeleton active loading={isLoading} paragraph={{ rows: 3 }}>
      <Form
        form={form}
        className={className}
        onFinish={({ prices }) =>
          handleSubmit.fn({
            prices: prices.map((price) => ({
              ...price,
              monthlyPricePerUnlicensedEmployee:
                price?.monthlyPricePerUnlicensedEmployee
                  ? +price?.monthlyPricePerUnlicensedEmployee
                  : 0,
              yearlyPricePerUnlicensedEmployee:
                price?.yearlyPricePerUnlicensedEmployee
                  ? +price?.yearlyPricePerUnlicensedEmployee
                  : 0,
            })),
          })
        }
      >
        <Form.List name={"prices"}>
          {(fields) => (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-12">
              {fields.map((field) => (
                <div className="">
                  <div className="mb-2">
                    <span className="text-lg font-medium">
                      {`Unlicensed User`}
                    </span>
                  </div>
                  <div className="">
                    <Form.Item
                      name={[field.name, "monthlyPricePerUnlicensedEmployee"]}
                      hidden={selection.billingCycle !== "monthly"}
                      rules={[numberHasToBeGreaterThanValueRule(-1)]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "yearlyPricePerUnlicensedEmployee"]}
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
            loading={handleSubmit.isLoading}
          >
            Save
          </Button>
        </div>
      </Form>
    </Skeleton>
  );
};

export default UnlicensedUserForm;
