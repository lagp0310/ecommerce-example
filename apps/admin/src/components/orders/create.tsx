"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const OrderCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: cartSelectProps } = useSelect({
    resource: "carts",
  });

  const { selectProps: addressSelectProps } = useSelect({
    resource: "addresses",
    optionLabel: "address",
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
          label="Cart"
          name={"cart"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...cartSelectProps} />
        </Form.Item>
        <Form.Item
          label="Billing Address"
          name={["billing_address"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...addressSelectProps} />
        </Form.Item>
        <Form.Item
          label="Shipping Address"
          name={["shipping_address"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...addressSelectProps} />
        </Form.Item>
        <Form.Item
          label="Notes"
          name={["notes"]}
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
