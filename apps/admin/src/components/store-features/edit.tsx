"use client";

import React from "react";
import { Edit, useForm, useSelect, getValueFromEvent } from "@refinedev/antd";
import { Form, Input, Upload, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const StoreFeatureEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const storeFeaturesData = query?.data?.data;

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    defaultValue: storeFeaturesData?.store,
    optionLabel: "name",
  });

  return (
    <Edit
      title="Edit Store Feature"
      saveButtonProps={{
        ...saveButtonProps,
        icon: <FolderArrowDownIcon className="h-4 w-4 text-white" />,
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
        <Form.Item label="Icon">
          <Form.Item
            name="icon_url"
            getValueProps={(value) => ({
              fileList: [{ url: value, name: value, uid: value }],
            })}
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload.Dragger listType="picture" beforeUpload={() => false}>
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Store"
          name={"store"}
          rules={[
            {
              required: true,
              validator(_rule, value, callback) {
                if (!isUUID(value)) callback("Store should be an UUID");
              },
            },
          ]}
        >
          <Select {...storeSelectProps} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
