"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const ProductCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: currencySelectProps } = useSelect({
    resource: "currencies",
    optionLabel: "name",
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    optionLabel: "name",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name={["description"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="SKU"
          name={["sku"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name={["price"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Currency"
          name={"currency"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...currencySelectProps} />
        </Form.Item>
        <Form.Item
          label="Rating"
          name={["rating"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Store"
          name={"store"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...storeSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
