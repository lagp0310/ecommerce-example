"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const CartEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const cartsData = query?.data?.data;

  const { selectProps: customerSelectProps } = useSelect({
    resource: "customers",
    defaultValue: cartsData?.customer,
    optionLabel: (item) => `${item.first_name} ${item.last_name}`,
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    defaultValue: cartsData?.store,
    optionLabel: "name",
  });

  const { selectProps: currencySelectProps } = useSelect({
    resource: "currencies",
    defaultValue: cartsData?.currency,
    optionLabel: (item) => `${item.name} (${item.three_letter_code})`,
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
          label="Id"
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
    </Edit>
  );
};
