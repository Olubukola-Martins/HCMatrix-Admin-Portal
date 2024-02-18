import { Button, Form, Input, InputNumber, Modal, Skeleton } from "antd";
import { ModalTitle } from "components/modal";
import { useGetSingleTrainingSession } from "lib/api/subscription/add-ons/training-session/get-training-session";
import {
  TUpdateTrainingSessionInput,
  useUpdateTrainingSession,
} from "lib/api/subscription/add-ons/training-session/update-training-session";
import {
  numberHasToBeGreaterThanValueRule,
  textInputValidationRules,
  textInputValidationRulesOp,
} from "lib/validation";
import React, { useEffect, useState } from "react";

const EditTrainingSession: React.FC<{
  trigger?: React.ReactNode;
  caseId: number;
}> = ({
  trigger = <button className="hover:text-primary text-accent">Edit</button>,
  caseId,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const { data: session, isLoading: isFetchingSession } =
    useGetSingleTrainingSession({ id: caseId });
  const [form] = Form.useForm<TUpdateTrainingSessionInput["data"]>();
  useEffect(() => {
    form.setFieldsValue({
      description: session?.data?.description,
      name: session?.data?.name,
      priceInNgn: +(session?.data?.priceInNgn as string),
      priceInUsd: +(session?.data?.priceInUsd as string),
      numberOfHours: +(session?.data?.numberOfHours ?? 0),
    });
  }, [form, session]);
  const { mutate, isLoading } = useUpdateTrainingSession();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Edit Training Session" />}
        footer={null}
      >
        <Skeleton active loading={isFetchingSession} paragraph={{ rows: 7 }}>
          <Form
            labelCol={{ span: 24 }}
            requiredMark={false}
            form={form}
            onFinish={(data) => {
              mutate(
                { data, id: caseId },
                {
                  onSuccess: () => {
                    handleClose();
                    form.resetFields();
                  },
                }
              );
            }}
          >
            <Form.Item
              label="Name"
              name={`name`}
              rules={textInputValidationRules}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <div className="grid grid-cols-2 gap-x-4">
              <Form.Item
                label="Price in Ngn"
                name={`priceInNgn`}
                rules={[numberHasToBeGreaterThanValueRule(0)]}
              >
                <InputNumber placeholder="Price in Ngn" className="w-full" />
              </Form.Item>
              <Form.Item
                label="Price in Usd"
                name={`priceInUsd`}
                rules={[numberHasToBeGreaterThanValueRule(0)]}
              >
                <InputNumber placeholder="Price in Usd" className="w-full" />
              </Form.Item>
            </div>
            <Form.Item
              label="Number of Hours"
              name={`numberOfHours`}
              rules={[numberHasToBeGreaterThanValueRule(0)]}
            >
              <InputNumber placeholder="Number of Hours" className="w-full" />
            </Form.Item>
            <Form.Item
              label="Description"
              name={`description`}
              rules={textInputValidationRulesOp}
            >
              <Input.TextArea placeholder="Description" />
            </Form.Item>
            <div className="mt-4 flex justify-between items-center">
              <Button type="text" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="primary" loading={isLoading} htmlType="submit">
                Save
              </Button>
            </div>
          </Form>
        </Skeleton>
      </Modal>
      <div className="cursor-pointer" onClick={handleOpen}>
        {trigger}
      </div>
    </>
  );
};

export default EditTrainingSession;
