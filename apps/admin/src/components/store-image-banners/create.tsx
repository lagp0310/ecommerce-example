"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";

export const StoreImageBannerCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: bannerTypeSelectProps } = useSelect({
    resource: "banner_types",
    optionLabel: "type",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Title"
          name={["title"]}
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
          label="Header"
          name={["header"]}
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
          label="Header Remark"
          name={["header_remark"]}
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
          label="Description"
          name={["description"]}
          rules={[
            {
              required: true,
              len: 500,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="CTA Text"
          name={["cta_text"]}
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
          label="CTA URL"
          name={["cta_url"]}
          rules={[
            {
              required: true,
              len: 500,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Banner Type"
          name={"banner_type"}
          rules={[
            {
              required: true,
              validator(_rule, value, callback) {
                if (!isUUID(value)) callback("Banner Type should be an UUID");
              },
            },
          ]}
        >
          <Select {...bannerTypeSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
