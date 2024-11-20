"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const PaymentCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: cartSelectProps } = useSelect({
    resource: "carts",
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
      </Form>
    </Create>
  );
};
