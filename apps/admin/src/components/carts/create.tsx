"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const CartCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: customerSelectProps } = useSelect({
    resource: "customers",
    optionLabel: (item) => `${item.first_name} ${item.last_name}`,
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    optionLabel: "name",
  });

  const { selectProps: currencySelectProps } = useSelect({
    resource: "currencies",
    optionLabel: (item) => `${item.name} (${item.three_letter_code})`,
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
          label="Currency"
          name={"currency"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...currencySelectProps} />
        </Form.Item>
      </Form>
    </Create>
  );
};
