import { Button, Select, Space, Table } from "antd";
import { useState } from "react";
import { InputSelector } from "./input-select copy";
import { OutputSelector } from "./output-select";

const { Option } = Select;

export const TaskDataCollection = () => {

  const [data, setData] = useState([
    { key: "1", outputs: ["sms-chart", "sms-chart2"], inputs: ["customer-tech-pack", "customer-tech-pack2"] },
  ]);

  const handleChange = (value: string, key: string, index: number, field: "inputs" | "outputs") => {
    setData((prev) =>
      prev.map((item) =>
        item.key === key
          ? {
              ...item,
              [field]: item[field].map((el: string, i: number) => (i === index ? value : el)),
            }
          : item
      )
    );
  };

  const handleAddRow = () => {
    setData(prev => {
      const maxKey = Math.max(...prev.map(item => parseInt(item.key, 10)), 0);
      
      return [...prev, { key: (maxKey + 1).toString(), outputs: ["sms-chart"], inputs: [""]}];
    });
  };

  const columns = [
    {
      title: "Outputs",
      dataIndex: "outputs",
      key: "outputs",
      render: (text: any, record: any) => (
        <Space direction="vertical">
          {record.outputs.map((output: any, index: number) => (
            <OutputSelector
              key={index}
              value={output}
              index={index}
              keyProp={record.key}
              handleChange={handleChange}
            />  
          ))}
        </Space>
      ),
    },
    {
      title: "Inputs",
      dataIndex: "inputs",
      key: "inputs",
      render: (text: any, record: any) => (
        <Space direction="vertical">
          {record.inputs.map((input: any, index: number) => (
            <InputSelector
              key={index}
              value={input}
              index={index}
              keyProp={record.key}
              handleChange={handleChange}
            />  
          ))}
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false}></Table>
      <Button onClick={handleAddRow} type='dashed' block>+ Add new task</Button>
    </>
  );
};