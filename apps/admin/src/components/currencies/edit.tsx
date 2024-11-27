"use client";

import React from "react";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import { errorNotification, successNotification } from "@/lib/utils";

export const CurrencyEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    successNotification,
    errorNotification,
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
    </Edit>
  );
};
