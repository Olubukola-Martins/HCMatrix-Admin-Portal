import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Skeleton,
} from "antd";
import { ModalTitle } from "components/modal";
import { storageUnitOptions } from "constants";
import { useGetSingleExtraStorage } from "lib/api/subscription/add-ons/extra-storage/get-extra-storage";
import {
  TUpdateExtraStorageInput,
  useUpdateExtraStorage,
} from "lib/api/subscription/add-ons/extra-storage/update-extra-storage";
import {
  generalValidationRules,
  numberHasToBeGreaterThanValueRule,
  textInputValidationRulesOp,
} from "lib/validation";
import React, { useEffect, useState } from "react";
import { TStorageUnit } from "types";

const EditStorage: React.FC<{
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
  const { data: storage, isLoading: isFetchingStorage } =
    useGetSingleExtraStorage({ id: caseId });
  const [form] = Form.useForm<TUpdateExtraStorageInput["data"]>();
  useEffect(() => {
    const formattedSize = storage?.data?.size as string;
    const size = +formattedSize?.substring(0, formattedSize.length - 2);
    const unit = formattedSize?.substring(
      formattedSize.length - 2
    ) as TStorageUnit;
    form.setFieldsValue({
      description: storage?.data?.description,
      name: storage?.data?.name,
      priceInNgn: +(storage?.data?.priceInNgn as string),
      priceInUsd: +(storage?.data?.priceInUsd as string),
      size,
      unit,
    });
  }, [form, storage]);
  const { mutate, isLoading } = useUpdateExtraStorage();
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="Edit Support Case" />}
        footer={null}
      >
        <Skeleton active loading={isFetchingStorage} paragraph={{ rows: 7 }}>
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
            <Form.Item label="Name" name={`name`}>
              <Input placeholder="Name" className="w-full" />
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
              <Form.Item
                label="Size"
                name={`size`}
                rules={[numberHasToBeGreaterThanValueRule(0)]}
              >
                <InputNumber placeholder="Size" className="w-full" />
              </Form.Item>
              <Form.Item
                label="Unit"
                name={`unit`}
                rules={generalValidationRules}
              >
                <Select
                  placeholder="Unit"
                  options={storageUnitOptions.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                />
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

export default EditStorage;
