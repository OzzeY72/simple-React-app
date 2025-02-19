import { Button, Form, Input } from "antd";
import { useState } from "react";

export const UserInfoForm = () => {
  const [form] = Form.useForm();
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    setIsValid(
      form.isFieldsTouched(true) &&
      !form.getFieldsError().some(({ errors }) => errors.length)
    );
  };


  return (
    <>
      <Form 
        onFieldsChange={validate}
        style={{ maxWidth: '80vw', margin: "0 auto" }}
        form={form}
      >
        <Form.Item  name="id" rules={[{ required: true }]}>
          <Input placeholder="Enter your ID" />
        </Form.Item>
        <Form.Item name="title" rules={[{ required: true }]}>
          <Input placeholder="Enter your job title" />
        </Form.Item>
        <Form.Item>
          <Button disabled={!isValid} htmlType="button" style={{ width: "100%" }}>
            Next
          </Button>
        </Form.Item>  
      </Form>
    </>
  );
};