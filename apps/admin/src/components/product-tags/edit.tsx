"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Checkbox } from "antd";

export const ProductTagEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const productTagsData = query?.data?.data;

  const { selectProps: productSelectProps } = useSelect({
    resource: "products",
    defaultValue: productTagsData?.product,
    optionLabel: "name",
  });

  return (
    <Edit saveButtonProps={saveButtonProps} footerButtons={[]}>
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
    </Edit>
  );
};
