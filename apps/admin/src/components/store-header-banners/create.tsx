"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const StoreHeaderBannerCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: bannerTypeSelectProps } = useSelect({
    resource: "banner_types",
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
          label="CTA Text"
          name={["cta_text"]}
          rules={[
            {
              required: true,
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
            },
          ]}
        >
          <Select {...bannerTypeSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
