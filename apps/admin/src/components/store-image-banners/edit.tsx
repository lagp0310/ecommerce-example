"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import isURL from "validator/es/lib/isURL";
import { errorNotification, successNotification } from "@/lib/utils";

export const StoreImageBannerEdit = () => {
  const { formProps, saveButtonProps, query } = useForm({
    successNotification,
    errorNotification,
  });

  const imageBannersData = query?.data?.data;

  const { selectProps: bannerTypeSelectProps } = useSelect({
    resource: "banner_types",
    optionLabel: "type",
    defaultValue: imageBannersData?.banner_type,
  });

  return (
    <Edit
      footerButtons={[]}
      title="Edit Image Banner"
      saveButtonProps={{
        ...saveButtonProps,
        className: "align-middle",
        icon: <FolderArrowDownIcon className="size-4 text-white" />,
      }}
      deleteButtonProps={{
        className: "align-middle mr-1.5",
        icon: <TrashIcon className="size-4 text-red-500" />,
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
              validator(_, value) {
                if (!isURL(value)) {
                  return Promise.reject(new Error("Should be a valid URL"));
                }

                return Promise.resolve();
              },
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
              validator(_, value) {
                if (!isUUID(value)) {
                  return Promise.reject(
                    new Error("Banner Type should be an UUID")
                  );
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <Select {...bannerTypeSelectProps} />
        </Form.Item>
        {/* <Form.Item label="Image">
          <Form.Item
            name="image_url"
            getValueProps={(value) => ({
              fileList: [{ url: value, name: value, uid: value }],
            })}
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Upload.Dragger listType="picture" beforeUpload={() => false}>
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item> */}
      </Form>
    </Edit>
  );
};
