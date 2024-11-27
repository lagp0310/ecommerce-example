"use client";
import React from "react";
import { Edit, useForm, useSelect, getValueFromEvent } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import { errorNotification, successNotification } from "@/lib/utils";

export const CategoryEdit = () => {
  const { formProps, saveButtonProps, query } = useForm({
    successNotification,
    errorNotification,
  });

  const categoriesData = query?.data?.data;

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    defaultValue: categoriesData?.store,
    optionLabel: "name",
  });

  return (
    <Edit
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
          label="Name"
          name={["name"]}
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
              max: 500,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Store"
          name={"store"}
          rules={[
            {
              required: true,
              validator(_, value) {
                if (!isUUID(value)) {
                  return Promise.reject(new Error("Store should be an UUID"));
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <Select {...storeSelectProps} />
        </Form.Item>
        <Form.Item label="Image">
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
        </Form.Item>
      </Form>
    </Edit>
  );
};
