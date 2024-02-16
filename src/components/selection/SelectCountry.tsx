import { Select } from "antd";
import { useDebounce } from "hooks/utils/useDebounce";
import { TCountry, useGetCountries } from "lib/api/country";
import { useState } from "react";

export const SelectCountry: React.FC<
  {
    handleSelect?: (
      val: number | number[],
      country?: TCountry | TCountry[]
    ) => void;
    handleClear?: () => void;
    value?: number | number[];
  } & Partial<{ placeholder: string; mode: "multiple" | "tags" }>
> = ({
  handleSelect,

  handleClear,
  value,
  placeholder,
  mode,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm: string = useDebounce<string>(searchTerm);

  const { data, isLoading } = useGetCountries({
    search: debouncedSearchTerm,
  });

  const handleSearch = (val: string) => {
    setSearchTerm(val);
  };

  const onClear = () => {
    setSearchTerm("");
    handleClear?.();
  };

  return (
    <Select
      value={value}
      mode={mode}
      loading={isLoading}
      onSelect={(val: number | number[]) => {
        if (Array.isArray(val)) {
          const countries = data?.data.result.filter((emp) =>
            val.includes(emp.id)
          );
          handleSelect?.(val, countries);
        } else {
          const country = data?.data.result.find((emp) => emp.id === val);
          handleSelect?.(val, country);
        }
      }}
      placeholder={placeholder}
      showSearch
      allowClear
      onClear={onClear}
      onSearch={handleSearch}
      className=""
      defaultActiveFirstOption={false}
      filterOption={false}
      options={data?.data.result?.map((item) => ({
        label: <span className="capitalize">{item.name} </span>,
        value: item.id,
      }))}
    />
  );
};