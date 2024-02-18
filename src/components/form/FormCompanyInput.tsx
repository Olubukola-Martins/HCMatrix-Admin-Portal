import { Select, Form } from "antd";
import { useDebounce } from "hooks/utils/useDebounce";
import { useGetCompanies } from "lib/api/company";
import {
  generalValidationRules,
  generalValidationRulesOp,
} from "lib/validation";
import { useState } from "react";

export const FormCompanyInput: React.FC<{
  Form: typeof Form;
  showLabel?: boolean;
  control?: { label: string; name: string | (string | number)[] };
  optional?: boolean;
}> = ({ Form, showLabel = true, control, optional = false }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm: string = useDebounce<string>(searchTerm);

  const { data, isFetching } = useGetCompanies({
    search: debouncedSearchTerm,
  });

  const handleSearch = (val: string) => {
    setSearchTerm(val);
  };

  return (
    <Form.Item
      name={control?.name ?? "companyId"}
      label={showLabel ? control?.label ?? "Company" : null}
      rules={optional ? generalValidationRulesOp : generalValidationRules}
    >
      <Select
        placeholder="Select Company"
        loading={isFetching} //TO DO : this should be added to all custom Fetch Form Inputs
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
