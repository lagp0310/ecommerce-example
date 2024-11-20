"use client";
import React from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const BusinessCreate = () => {
  const { formProps, saveButtonProps } = useForm();

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
      </Form>
    </Create>
  );
};
