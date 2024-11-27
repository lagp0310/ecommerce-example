"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Select, Checkbox } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { errorNotification, successNotification } from "@/lib/utils";

export const PaymentMethodCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    successNotification,
    errorNotification,
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    optionLabel: "name",
  });

  const { selectProps: paymentMethodTypeProps } = useSelect({
    resource: "payment_method_types",
    optionLabel: "type",
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
          label="Payment Method Type"
          name={"payment_method_type"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...paymentMethodTypeProps} />
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
