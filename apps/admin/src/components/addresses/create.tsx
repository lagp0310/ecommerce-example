"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Select, Input } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const AddressCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: customerSelectProps } = useSelect({
    resource: "customers",
    optionLabel: (item) => `${item.first_name} ${item.last_name}`,
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
          label="Address"
          name={"address"}
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
          label="Customer"
          name={"customer"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...customerSelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
