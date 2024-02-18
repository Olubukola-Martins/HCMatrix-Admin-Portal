import { Button, Form, Input, Modal, Skeleton } from "antd";
import { ModalTitle } from "components/modal";
import { useGetSingleSupportCase } from "lib/api/subscription/add-ons/support-case/get-support-case";
import {
  TUpdateSupportCaseInput,
  useUpdateSupportCase,
} from "lib/api/subscription/add-ons/support-case/update-support-case";
import {
  numberHasToBeGreaterThanValueRule,
  textInputValidationRules,
  textInputValidationRulesOp,
} from "lib/validation";
import React, { useEffect, useState } from "react";

const EditSupportCase: React.FC<{
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
  const { data: supportCase, isLoading: isFetchingCase } =
    useGetSingleSupportCase({ id: caseId });
  const [form] = Form.useForm<TUpdateSupportCaseInput["data"]>();
  useEffect(() => {
    form.setFieldsValue({
      description: supportCase?.data?.description,
      name: supportCase?.data?.name,
      priceInNgn: +(supportCase?.data?.priceInNgn as string),
      priceInUsd: +(supportCase?.data?.priceInUsd as string),
    });
  }, [form, supportCase]);
  const { mutate, isLoading } = useUpdateSupportCase();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Edit Support Case" />}
        footer={null}
      >
        <Skeleton active loading={isFetchingCase} paragraph={{ rows: 7 }}>
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
                    form.resetFields;
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
                <Input placeholder="Price in Ngn" />
              </Form.Item>
              <Form.Item
                label="Price in Usd"
                name={`priceInUsd`}
                rules={[numberHasToBeGreaterThanValueRule(0)]}
              >
                <Input placeholder="Price in Usd" />
              </Form.Item>
            </div>
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

export default EditSupportCase;
