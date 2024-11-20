"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Checkbox } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const PaymentMethodEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const paymentMethodsData = query?.data?.data;

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    defaultValue: paymentMethodsData?.store,
    optionLabel: "name",
  });

  return (
    <Edit
      title="Edit Payment Method"
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
    </Edit>
  );
};
