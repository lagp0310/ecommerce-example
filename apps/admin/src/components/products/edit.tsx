"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const ProductEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const productsData = query?.data?.data;

  const { selectProps: currencySelectProps } = useSelect({
    resource: "currencies",
    defaultValue: productsData?.currency,
    optionLabel: "name",
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    defaultValue: productsData?.store,
    optionLabel: "name",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="ID"
          name={["id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly disabled />
        </Form.Item>
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
    </Edit>
  );
};
