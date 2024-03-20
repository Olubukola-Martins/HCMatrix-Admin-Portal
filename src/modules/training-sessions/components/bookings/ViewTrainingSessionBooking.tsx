import { Button, Form, Input, Modal, Skeleton } from "antd";
import { ModalTitle } from "components/modal";
import { DEFAULT_DATE_FORMAT } from "constants";
import {
  TTrainingSessionBooking,
  useGetSingleTrainingSessionBooking,
} from "lib/api/subscription/add-ons/training-session/bookings/get-booking";

import moment from "moment";
import React, { useEffect, useState } from "react";
import UpdateSessionBookingStatus from "./UpdateSessionBookingStatus";

const ViewTrainingSessionBooking: React.FC<{
  trigger?: React.ReactNode;
  bookingId: number;
}> = ({
  trigger = <button className="hover:text-primary text-accent">View</button>,
  bookingId,
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const { data: _booking, isLoading: isFetchingBooking } =
    useGetSingleTrainingSessionBooking({ id: bookingId });
  const [form] = Form.useForm<
    Pick<
      TTrainingSessionBooking,
      "reason" | "status" | "startDate" | "endDate" | "createdAt"
    > & {
      trainingSessionName: string;
      companyName: string;
    }
  >();
  useEffect(() => {
    const booking = _booking?.data;
    form.setFieldsValue({
      companyName: booking?.company.name,
      createdAt: moment(booking?.createdAt).format(DEFAULT_DATE_FORMAT),
      endDate: moment(booking?.endDate).format("YYYY-MM-DD hh:mm A"),
      startDate: moment(booking?.startDate).format("YYYY-MM-DD hh:mm A"),
      reason: booking?.reason,
      status: booking?.status,
      trainingSessionName: booking?.trainingSession.name,
    });
  }, [form, _booking]);
  return (
    <>
      <Modal
        open={open}
        onCancel={handleClose}
        title={<ModalTitle text="View Training Session" />}
        footer={null}
      >
        <Skeleton active loading={isFetchingBooking} paragraph={{ rows: 7 }}>
          <Form
            labelCol={{ span: 24 }}
            requiredMark={false}
            form={form}
            disabled
          >
            <div className="grid grid-cols-2 gap-x-4">
              <Form.Item label="Company Name" name={`companyName`}>
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item label="Trainining Type" name={`trainingSessionName`}>
                <Input placeholder="Type" />
              </Form.Item>
              <Form.Item label="Status" name={`status`}>
                <Input placeholder="Status" className="w-full" />
              </Form.Item>
              <Form.Item label="Date Requested" name={`createdAt`}>
                <Input placeholder="Date Requested" className="w-full" />
              </Form.Item>
              <Form.Item label="Start Date" name={`startDate`}>
                <Input placeholder="Start Date" className="w-full" />
              </Form.Item>
              <Form.Item label="End Date" name={`endDate`}>
                <Input placeholder="End Date" className="w-full" />
              </Form.Item>
            </div>

            <Form.Item label="Reason" name={`reason`}>
              <Input.TextArea placeholder="Reason" />
            </Form.Item>
          </Form>
          <div className="mt-4 flex justify-between items-center">
            <Button type="text" onClick={handleClose}>
              Cancel
            </Button>
            {_booking?.data.status === "pending" ? (
              <div className="flex gap-x-4 items-center">
                <UpdateSessionBookingStatus
                  key="accept"
                  data={{
                    status: "accepted",
                  }}
                  booking={{
                    id: bookingId,
                  }}
                  trigger={<Button type="primary">Accept</Button>}
                />
                <UpdateSessionBookingStatus
                  key="reject"
                  data={{
                    status: "rejected",
                  }}
                  booking={{
                    id: bookingId,
                  }}
                  trigger={
                    <Button type="default" danger>
                      Reject
                    </Button>
                  }
                />
              </div>
            ) : null}
          </div>
        </Skeleton>
      </Modal>
      <div className="cursor-pointer" onClick={handleOpen}>
        {trigger}
      </div>
    </>
  );
};

export default ViewTrainingSessionBooking;
