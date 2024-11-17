"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const ImageBannerEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const imageBannersData = query?.data?.data;

  const { selectProps: bannerTypeSelectProps } = useSelect({
    resource: "banner_types",
    defaultValue: imageBannersData?.banner_type,
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
          label="Header"
          name={["header"]}
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
    </Edit>
  );
};
