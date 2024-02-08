import { Form, Input } from "antd";
import { useEffect } from "react";
import { IDivProps, TBillingCycle, TCurrency } from "types";
import EditTrainingSession from "./EditTrainingSession";
import AddTrainingSession from "./AddTrainingSession";

type TPrice = {
  name: string;
  priceInNgn: number;
  priceInUsd: number;
  id: number;
  numberOfHrs: number | string;
};
const TrainingSessionsContainer: React.FC<
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
        name: "Train 1",
        id: 1,
        numberOfHrs: 3,
      },

      {
        numberOfHrs: 3,
        priceInNgn: 4500,
        priceInUsd: 7400,
        name: "Train 2",
        id: 2,
      },
      {
        numberOfHrs: 4,
        priceInNgn: 4500,
        priceInUsd: 900,
        name: "Train 3",
        id: 3,
      },
    ];
    form.setFieldsValue({
      prices: prices.map((item) => ({
        ...item,
        numberOfHrs: `${item.numberOfHrs} hrs`,
      })),
    });
  }, [form, selection]);
  return (
    <Form form={form} className={className}>
      <span className="text-lg font-medium">{`Training Sessions`}</span>
      <Form.List name={"prices"}>
        {(fields) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-28">
            {fields.map((field) => (
              <div className="">
                <div className="mb-0.5 flex justify-end items-center">
                  <EditTrainingSession
                    caseId={form.getFieldValue("prices")[field.name]?.id}
                  />
                </div>
                <div className="flex gap-x-4">
                  <Form.Item name={[field.name, "name"]}>
                    <Input disabled />
                  </Form.Item>
                  <Form.Item name={[field.name, "numberOfHrs"]}>
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    name={[field.name, "priceInNgn"]}
                    hidden={selection.currency !== "ngn"}
                  >
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    name={[field.name, "priceInUsd"]}
                    hidden={selection.currency !== "usd"}
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
        <AddTrainingSession />
      </div>
    </Form>
  );
};

export default TrainingSessionsContainer;
