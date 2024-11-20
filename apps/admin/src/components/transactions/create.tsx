"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { NumericFormat } from "react-number-format";

export const TransactionCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: paymentMethodSelectProps } = useSelect({
    resource: "payment_methods",
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
          label="Payment Method"
          name={"payment_method"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...paymentMethodSelectProps} />
        </Form.Item>
        <Form.Item
          label="Amount"
          name={["amount"]}
          rules={[
            {
              required: true,
              validator(_rule, value, callback) {
                if (value < 0) callback("Amount must be positive");
              },
            },
          ]}
        >
          <NumericFormat
            allowLeadingZeros={false}
            allowNegative={false}
            allowedDecimalSeparators={["."]}
            decimalSeparator="."
            customInput={Input}
            decimalScale={2}
            fixedDecimalScale
            thousandSeparator=","
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
