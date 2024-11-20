"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const PaymentEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const paymentsData = query?.data?.data;

  const { selectProps: cartSelectProps } = useSelect({
    resource: "carts",
    defaultValue: paymentsData?.cart,
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
      </Form>
    </Edit>
  );
};
