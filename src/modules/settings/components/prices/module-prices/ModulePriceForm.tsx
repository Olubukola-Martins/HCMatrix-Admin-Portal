import { Button, Form, Input, Segmented, Select } from "antd";
import { billingCycleOptions, currencyOptions } from "constants";
import { useEffect, useState } from "react";
import { TBillingCycle, TCurrency } from "types";

type TPrice = {
  subscriptionId: number;
  subscriptionName: string;
  //   type: string;
  monthlyPricePerLicensedEmployee: number;
  yearlyPricePerLicensedEmployee: number;
};
const ModulePriceForm = () => {
  const [form] = Form.useForm<{ prices: TPrice[] }>();
  const [selection, setSelection] = useState<{
    billingCycle: TBillingCycle;
    currency: TCurrency;
  }>({
    billingCycle: "monthly",
    currency: "usd",
  });
  useEffect(() => {
    form.setFieldsValue({
      prices: [
        {
          monthlyPricePerLicensedEmployee: 200,
          subscriptionId: 2,
          subscriptionName: "Basic",
          yearlyPricePerLicensedEmployee: 30000,
        },
        {
          monthlyPricePerLicensedEmployee: 7000,
          subscriptionId: 4,
          subscriptionName: "Advanced",
          yearlyPricePerLicensedEmployee: 90000,
        },
        {
          monthlyPricePerLicensedEmployee: 4500,
          subscriptionId: 5,
          subscriptionName: "Premium",
          yearlyPricePerLicensedEmployee: 7400,
        },
      ],
    });
  }, [form]);
  return (
    <Form form={form}>
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
            setSelection({ ...selection, currency: v as unknown as TCurrency })
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
                    {form.getFieldValue("prices")[field.name]?.subscriptionName}
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
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={[field.name, "yearlyPricePerLicensedEmployee"]}
                    hidden={selection.billingCycle !== "yearly"}
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
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};

export default ModulePriceForm;
