import { Button, Form, Input, Skeleton } from "antd";
import { useGetVat } from "lib/api/subscription/vat/get-vat";
import { useEffect } from "react";

const VatForm: React.FC<{
  onSubmit: {
    fn: (props: { value: number }) => void;
    isLoading?: boolean;
  };
}> = ({ onSubmit }) => {
  const [form] = Form.useForm<{ value: number }>();

  const { data, isLoading } = useGetVat();
  useEffect(() => {
    form.setFieldsValue({
      value: data?.data?.value ? +data?.data?.value : 0,
    });
  }, [form, data]);
  return (
    <Skeleton active loading={isLoading} paragraph={{ rows: 4 }}>
      <Form form={form} labelCol={{ span: 24 }} onFinish={onSubmit.fn}>
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
