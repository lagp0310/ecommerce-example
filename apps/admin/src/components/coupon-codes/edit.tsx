"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { NumericFormat } from "react-number-format";

export const CouponCodesEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const couponCodesData = query?.data?.data;

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    defaultValue: couponCodesData?.store,
    optionLabel: "name",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          label="Code"
          name={["code"]}
          rules={[
            {
              required: true,
              len: 20,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Store"
          name={"store"}
          rules={[
            {
              required: true,
              validator(_rule, value, callback) {
                if (!isUUID(value)) callback("Store should be an UUID");
              },
            },
          ]}
        >
          <Select {...storeSelectProps} />
        </Form.Item>
        <Form.Item
          label="Percentage"
          name={["percentage"]}
          rules={[
            {
              required: false,
              min: 0,
              max: 100,
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
        <Form.Item
          label="Amount"
          name={["amount"]}
          rules={[
            {
              required: false,
              min: 0,
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
