"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";

export const StoreImageBannerEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const imageBannersData = query?.data?.data;

  const { selectProps: bannerTypeSelectProps } = useSelect({
    resource: "banner_types",
    optionLabel: "type",
    defaultValue: imageBannersData?.banner_type,
  });

  return (
    <Edit
      title="Edit Image Banner"
      saveButtonProps={{
        ...saveButtonProps,
        className: "align-middle",
        icon: <FolderArrowDownIcon className="h-4 w-4 text-white" />,
      }}
      deleteButtonProps={{
        className: "align-middle mr-1.5",
        icon: <TrashIcon className="h-4 w-4 text-red-500" />,
      }}
    >
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
              max: 50,
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
              max: 50,
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
              max: 50,
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
              max: 50,
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
              max: 500,
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
              required: false,
              max: 500,
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
              validator(_rule, value) {
                if (!isUUID(value)) {
                  throw new Error("Banner Type should be an UUID");
                }
              },
            },
          ]}
        >
          <Select {...bannerTypeSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
