import { Select } from "antd";

const { Option } = Select;

interface OutputSelectorProps {
  value: string;
  keyProp: string;
  index: number;
  handleChange: (value: string, key: string, index: number, field: "inputs" | "outputs") => void;
}

export const OutputSelector = ({value, keyProp, index, handleChange}: OutputSelectorProps) => {
  console.log(keyProp);

  return (
    <Select value={value} onChange={(curr) => handleChange(curr, keyProp, index, "outputs")}>
      <Option value="sms-chart">SMS Chart</Option>
      <Option value="sms-chart2">SMS Chart 2</Option>
      <Option value="sms-chart3">SMS Chart 3</Option>
    </Select>
  );
};