import { Form, Input } from "antd";
import { useEffect } from "react";
import { IDivProps, TBillingCycle, TCurrency } from "types";
import EditStorage from "./EditStorage";
import AddStorage from "./AddStorage";

type TPrice = {
  name: string;
  priceInNgn: number;
  priceInUsd: number;
  id: number;
};
const ExtraStoragesContainer: React.FC<
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
        priceInNgn: 200,
        priceInUsd: 30000,
        name: "Storage 1",
        id: 1,
      },

      {
        priceInNgn: 4500,
        priceInUsd: 7400,
        name: "Storage 2",
        id: 2,
      },
      {
        priceInNgn: 4500,
        priceInUsd: 900,
        name: "Storage 3",
        id: 3,
      },
    ];
    form.setFieldsValue({
      prices: prices,
    });
  }, [form, selection]);
  return (
    <Form form={form} className={className}>
      <span className="text-lg font-medium">{`Support Cases`}</span>
      <Form.List name={"prices"}>
        {(fields) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-28">
            {fields.map((field) => (
              <div className="w-full">
                <div className="mb-0.5 flex justify-end items-center">
                  <EditStorage
                    caseId={form.getFieldValue("prices")[field.name]?.id}
                  />
                </div>
                <div className="flex gap-x-4 w-full">
                  <Form.Item name={[field.name, "name"]} className="flex-1">
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    name={[field.name, "priceInNgn"]}
                    hidden={selection.currency !== "ngn"}
                    className="flex-1"
                  >
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    name={[field.name, "priceInUsd"]}
                    hidden={selection.currency !== "usd"}
                    className="flex-1"
                  >
                    <Input disabled />
                  </Form.Item>
                </div>
              </div>
            ))}
          </div>
        )}
      </Form.List>
      <div className="flex justify-end">
        <AddStorage />
      </div>
    </Form>
  );
};

export default ExtraStoragesContainer;