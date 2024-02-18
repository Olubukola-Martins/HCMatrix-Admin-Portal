import { Button, Form, Input, Segmented, Select, Skeleton } from "antd";
import { billingCycleOptions, currencyOptions } from "constants";
import { useGetVat } from "lib/api/subscription/vat/get-vat";
import { useEffect, useState } from "react";
import { TBillingCycle, TCurrency } from "types";

const VatForm: React.FC<{
  onSubmit: {
    fn: (props: { value: number }) => void;
    isLoading?: boolean;
  };
}> = ({ onSubmit }) => {
  const [form] = Form.useForm<{ value: number }>();
  const [selection, setSelection] = useState<{
    billingCycle: TBillingCycle;
    currency: TCurrency;
  }>({
    billingCycle: "monthly",
    currency: "usd",
  });
  const { data, isLoading } = useGetVat();
  useEffect(() => {
    form.setFieldsValue({
      value: data?.data?.value ? +data?.data?.value : 0,
    });
  }, [form, data]);
  return (
    <Skeleton active loading={isLoading} paragraph={{ rows: 4 }}>
      <Form form={form} labelCol={{ span: 24 }} onFinish={onSubmit.fn}>
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

        <Form.Item
          name={`value`}
          label={<span className="text-lg font-medium">Value in %</span>}
        >
          <Input className="max-w-32" placeholder="Value" />
        </Form.Item>
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit" loading={onSubmit.isLoading}>
            Save
          </Button>
        </div>
      </Form>
    </Skeleton>
  );
};

export default VatForm;
