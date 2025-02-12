"use client";

import React from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { errorNotification, successNotification } from "@/lib/utils";

export const BannerTypeCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    successNotification,
    errorNotification,
  });

  return (
    <Create
      title="Create Banner Type"
      footerButtons={[]}
      saveButtonProps={{
        ...saveButtonProps,
        icon: <FolderArrowDownIcon className="size-4 text-white" />,
      }}
    >
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Type"
          name={["type"]}
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
