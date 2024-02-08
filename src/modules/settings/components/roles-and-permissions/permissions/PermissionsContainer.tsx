import { PageLayout } from "components/layouts";
import { Button, Card, Checkbox, Form, Typography } from "antd";
import { moduleOptions } from "constants";

const PermissionsContainer = () => {
  return (
    <PageLayout
      header={{
        title: {
          text: "Permissions",
        },
        supportingComp: (
          <div>
            <Button type="primary">Save</Button>
          </div>
        ),
      }}
    >
      <div className="space-y-4">
        <div className="bg-card p-4 rounded-md">
          <Typography.Title level={5}>Finance Manager</Typography.Title>
        </div>
        <Form>
          <Form.Item name="permissionIds">
            <Card>
              <Checkbox.Group className="lg:px-10 lg:py-4 grid lg:grid-cols-3 grid-cols-2 lg:gap-x-12 lg:gap-y-4 gap-x-4 gap-y-4">
                {moduleOptions.map((item, i) => (
                  <Checkbox
                    value={item}
                    key={i}
                    className="flex items-center border rounded-sm px-4 py-3"
                  >
                    <span className="capitalize">
                      {item.split("-").join(" ")}
                    </span>
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Card>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  );
};

export default PermissionsContainer;
