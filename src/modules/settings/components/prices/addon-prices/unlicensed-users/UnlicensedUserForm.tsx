import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { IDivProps, TBillingCycle, TCurrency } from "types";

type TPrice = {
  type: TCurrency;
  monthlyPricePerLicensedEmployee: number;
  yearlyPricePerLicensedEmployee: number;
};
const UnlicensedUserForm: React.FC<
  IDivProps & {
    selection: {
      billingCycle: TBillingCycle;
      currency: TCurrency;
    };
  }
> = ({ selection, className }) => {
  const [form] = Form.useForm<{ prices: TPrice[] }>();

  useEffect(() => {
    const prices: TPrice[] = [
      {
        monthlyPricePerLicensedEmployee: 200,
        yearlyPricePerLicensedEmployee: 30000,
        type: "usd",
      },

      {
        monthlyPricePerLicensedEmployee: 4500,
        yearlyPricePerLicensedEmployee: 7400,
        type: "ngn",
      },
    ];
    form.setFieldsValue({
      prices: prices.filter((item) => item.type === selection.currency),
    });
  }, [form, selection]);
  return (
    <Form form={form} className={className}>
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

export default UnlicensedUserForm;
