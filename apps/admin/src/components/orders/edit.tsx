"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const OrderEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const ordersData = query?.data?.data;

  const { selectProps: cartSelectProps } = useSelect({
    resource: "carts",
    defaultValue: ordersData?.cart,
  });

  const { selectProps: addressSelectProps } = useSelect({
    resource: "addresses",
    optionLabel: "address",
  });

  return (
    <Edit
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
              required: true,
              max: 500,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
