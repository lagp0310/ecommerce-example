"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";

export const StoreHeaderBannerEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const headerBannersData = query?.data?.data;

  const { selectProps: bannerTypeSelectProps } = useSelect({
    resource: "banner_types",
    optionLabel: "type",
    defaultValue: headerBannersData?.banner_type,
  });

  return (
    <Edit
      title="Edit Header Banner"
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
          label="Description"
          name={["description"]}
          rules={[
            {
              required: false,
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
        <Form.Item
          label="Subtitle"
          name={["subtitle"]}
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
          label="Subtitle Remark"
          name={["subtitle_remark"]}
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
          label="Subtitle Complement"
          name={["subtitle_complement"]}
          rules={[
            {
              required: true,
              max: 50,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
