import { Select, Form } from "antd";
import { useDebounce } from "hooks/utils/useDebounce";
import { useGetRoles } from "lib/api/roles-and-permissions/role";
import {
  generalValidationRules,
  generalValidationRulesOp,
} from "lib/validation";
import { useState } from "react";

export const FormRoleInput: React.FC<{
  Form: typeof Form;
  showLabel?: boolean;
  control?: { label: string; name: string | (string | number)[] };
  optional?: boolean;
}> = ({ Form, showLabel = true, control, optional = false }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm: string = useDebounce<string>(searchTerm);

  const { data, isFetching } = useGetRoles({
    search: debouncedSearchTerm,
  });

  const handleSearch = (val: string) => {
    setSearchTerm(val);
  };

  return (
    <Form.Item
      name={control?.name ?? "roleId"}
      label={showLabel ? control?.label ?? "Role" : null}
      rules={optional ? generalValidationRulesOp : generalValidationRules}
    >
      <Select
        placeholder="Select Role"
        loading={isFetching}
        showSearch
        allowClear
        onClear={() => setSearchTerm("")}
        onSearch={handleSearch}
        className="rounded border-slate-400 w-full"
        defaultActiveFirstOption={false}
        filterOption={false}
      >
        {data?.data.result.map((item) => (
          <Select.Option key={item.id} value={item.id}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};
