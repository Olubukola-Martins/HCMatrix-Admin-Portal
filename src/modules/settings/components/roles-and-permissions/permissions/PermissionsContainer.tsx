import { PageLayout } from "components/layouts";
import { Button, Card, Checkbox, Form, Skeleton, Typography } from "antd";
import { useGetPermissions } from "lib/api/roles-and-permissions/get-permissions";
import { useParams } from "react-router-dom";
import { useGetSingleRole } from "lib/api/roles-and-permissions/role/get-role";
import { useEffect } from "react";
import {
  TUpdateRoleInput,
  useUpdateRole,
} from "lib/api/roles-and-permissions/role/update-role";
import { generalValidationRules } from "lib/validation";
import { ErrorWrapper } from "components/error/ErrorWrapper";
import ErrorBoundary from "components/error/ErrorBoundary";
import { errorFormatter } from "lib/utils";

const PermissionsContainer = () => {
  const { data: permissions, isLoading: isFetchingPermissions } =
    useGetPermissions();
  const params = useParams<{ id: string }>();
  const {
    data: role,
    isLoading: isFetchingRole,
    isError,
    error,
  } = useGetSingleRole({
    id: params.id ? +params.id : undefined,
  });
  const [form] =
    Form.useForm<Pick<TUpdateRoleInput["data"], "permissionIds">>();
  const { mutate, isLoading } = useUpdateRole();
  useEffect(() => {
    form.setFieldsValue({
      permissionIds: role?.data.permissions.map((item) => item.permissionId),
    });
  }, [role, form]);
  return (
    <ErrorBoundary>
      <ErrorWrapper isError={isError} message={errorFormatter(error).message}>
        <PageLayout
          header={{
            title: {
              text: "Permissions",
            },
            supportingComp: (
              <div>
                <Button
                  type="primary"
                  onClick={() => form.submit()}
                  loading={isLoading}
                >
                  Save
                </Button>
              </div>
            ),
          }}
        >
          <div className="space-y-4">
            <Skeleton loading={isFetchingRole} active paragraph={{ rows: 1 }}>
              <div className="bg-card p-4 rounded-md">
                <Typography.Title level={5}>{role?.data.name}</Typography.Title>
              </div>
            </Skeleton>
            <Skeleton
              loading={isFetchingPermissions}
              active
              paragraph={{ rows: 8 }}
            >
              <Card>
                <Form
                  form={form}
                  onFinish={(data) => {
                    role &&
                      mutate({
                        id: role?.data.id,
                        data: { ...data, name: role?.data.name },
                      });
                  }}
                >
                  <Form.Item
                    name="permissionIds"
                    rules={generalValidationRules}
                  >
                    <Checkbox.Group className="lg:px-10 lg:py-4 grid lg:grid-cols-3 grid-cols-2 lg:gap-x-12 lg:gap-y-4 gap-x-4 gap-y-4">
                      {/* This is getting the first item as backend returns an array, and the first item contains all permissions */}
                      {permissions?.data?.[0]?.permissions.map((item) => (
                        <Checkbox
                          value={item.id}
                          key={item.id}
                          className="flex items-center border rounded-sm px-4 py-3"
                        >
                          <span className="capitalize">{item.name}</span>
                        </Checkbox>
                      ))}
                    </Checkbox.Group>
                  </Form.Item>
                </Form>
              </Card>
            </Skeleton>
          </div>
        </PageLayout>
      </ErrorWrapper>
    </ErrorBoundary>
  );
};

export default PermissionsContainer;
