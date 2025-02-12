"use client";

import React from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { errorNotification, successNotification } from "@/lib/utils";

export const CurrencyCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    successNotification,
    errorNotification,
  });

  return (
    <Create
      footerButtons={[]}
      saveButtonProps={{
        ...saveButtonProps,
        icon: <FolderArrowDownIcon className="size-4 text-white" />,
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
          label="Three Letter Code"
          name={["three_letter_code"]}
          rules={[
            {
              required: true,
              len: 3,
              pattern: new RegExp(/[A-Z]{3}/),
            },
          ]}
        >
          <Input maxLength={3} />
        </Form.Item>
        <Form.Item
          label="Numeric ID"
          name={["numeric_id"]}
          rules={[
            {
              required: true,
              len: 3,
              pattern: new RegExp(/[0-9]{3}/),
            },
          ]}
        >
          <Input maxLength={3} />
        </Form.Item>
      </Form>
    </Create>
  );
};
