"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const StoreEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const storesData = query?.data?.data;

  const { selectProps: businessSelectProps } = useSelect({
    resource: "businesses",
    defaultValue: storesData?.business,
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
          label="Business"
          name={"business"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...businessSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
