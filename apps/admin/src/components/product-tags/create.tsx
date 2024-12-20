"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Checkbox } from "antd";

export const ProductTagCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: productSelectProps } = useSelect({
    resource: "products",
    optionLabel: "name",
  });

  return (
    <Create saveButtonProps={saveButtonProps} footerButtons={[]}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Product"
          name={"product"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...productSelectProps} />
        </Form.Item>
        <Form.Item
          label="Tag"
          name={["tag"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Type"
          name={["type"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Is General Tag"
          valuePropName="checked"
          name={["is_general_tag"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Checkbox>Is General Tag</Checkbox>
        </Form.Item>
        <Form.Item
          label="Is Discount Tag"
          valuePropName="checked"
          name={["is_discount_tag"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Checkbox>Is Discount Tag</Checkbox>
        </Form.Item>
      </Form>
    </Create>
  );
};
