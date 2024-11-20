"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Select, Checkbox } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const PaymentMethodCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    optionLabel: "name",
  });

  return (
    <Create
      title="Create Payment Method"
      saveButtonProps={{
        ...saveButtonProps,
        icon: <FolderArrowDownIcon className="h-4 w-4 text-white" />,
      }}
    >
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Store"
          name={"store"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...storeSelectProps} />
        </Form.Item>
        <Form.Item
          label="Is Active"
          valuePropName="checked"
          name={["is_active"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Checkbox>Is Active</Checkbox>
        </Form.Item>
      </Form>
    </Create>
  );
};
