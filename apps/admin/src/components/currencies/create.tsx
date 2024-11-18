"use client";

import React from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const CurrencyCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name={["name"]}
          rules={[
            {
              required: true,
              len: 50,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Three Letter Code"
          name={["three_letter_code"]}
          rules={[
            {
              required: true,
              len: 3,
              pattern: new RegExp(/[A-Z]{3}/),
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
