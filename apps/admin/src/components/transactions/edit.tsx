"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { NumericFormat } from "react-number-format";

export const TransactionEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const transactionsData = query?.data?.data;

  const { selectProps: paymentMethodSelectProps } = useSelect({
    resource: "payment_methods",
    defaultValue: transactionsData?.payment_method,
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
    </Edit>
  );
};
