import { Select } from "antd";

const { Option } = Select;

interface InputSelectorProps {
  value: string;
  keyProp: string;
  index: number;
  handleChange: (value: string, key: string, index: number, field: "inputs" | "outputs") => void;
}

export const InputSelector = ({value, keyProp, index, handleChange}: InputSelectorProps) => {
  console.log(keyProp);

  return (
    <Select value={value} onChange={(curr) => handleChange(curr, keyProp, index, "inputs")}>
      <Option value="customer-tech-pack">Customer Tech Pack</Option>
      <Option value="customer-tech-pack2">Customer Tech Pack 2</Option>
      <Option value="customer-tech-pack3">Customer Tech Pack 3</Option>
    </Select>
  );
};