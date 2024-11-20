"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";

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
