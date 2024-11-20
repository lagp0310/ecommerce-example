"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const StoreCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: businessSelectProps } = useSelect({
    resource: "businesses",
    optionLabel: "name",
  });

  return (
    <Create
      saveButtonProps={{
        ...saveButtonProps,
        icon: <FolderArrowDownIcon className="h-4 w-4 text-white" />,
      }}
    >
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name={["name"]}
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
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Business"
          name={"business"}
          rules={[
            {
              required: true,
              validator(_rule, value, callback) {
                if (!isUUID(value)) callback("Business should be an UUID");
              },
            },
          ]}
        >
          <Select {...businessSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
