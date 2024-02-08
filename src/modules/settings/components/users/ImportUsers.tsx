import { Button, Form, Modal } from "antd";
import { FormFileInput } from "components/form/FormFileInput";
import { ColoredImportCircleIcon } from "components/icons";
import { ModalTitle } from "components/modal";
import React from "react";

const ImportUsers: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const [form] = Form.useForm<{ dueDate: string }>();
  return (
    <>
      <Modal open={open} onCancel={handleClose} title={null} footer={null}>
        <div className="space-y-4 flex flex-col items-center">
          <Form
            labelCol={{ span: 24 }}
            requiredMark={false}
            form={form}
            className="w-full gap-y-6 flex flex-col items-center"
          >
            <div className="flex flex-col gap-y-4 items-center">
              <ColoredImportCircleIcon />
              <ModalTitle text="Import Users" />
            </div>
            <FormFileInput
              Form={Form}
              triggerComp={
                <div className="flex w-full text-accent">
                  <button className="px-3 py-2 bg-card border rounded-tl-md rounded-bl-md">
                    Choose File
                  </button>
                  <button className="px-3 py-2 font-bold bg-transparent w-40 lg:w-60 text-left border rounded-tr-md rounded-br-md">
                    Please select a file
                  </button>
                </div>
              }
              name="file"
              ruleOptions={{
                required: true,
                allowedFileTypes: [
                  "text/csv",
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                ],
              }}
            />
            <span className="w-3/4 text-center">
              [only xls,xlsx and csv formats are supported] Maximum upload file
              size is 5 MB.
            </span>
            <span className="text-primary hover:text-accent cursor-pointer">
              Download Sample template for import
            </span>

            <div className="mt-6 flex gap-x-4 items-center">
              <Button type="default" size="large" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="primary" size="large">
                Upload
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default ImportUsers;
