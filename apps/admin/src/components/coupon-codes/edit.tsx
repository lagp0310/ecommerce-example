"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { NumericFormat } from "react-number-format";
import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";

export const CouponCodesEdit = () => {
  const {
    formProps,
    saveButtonProps,
    query,
    form: { getFieldValue },
  } = useForm();

  const couponCodesData = query?.data?.data;

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    defaultValue: couponCodesData?.store,
    optionLabel: "name",
  });

  return (
    <Edit
      title="Edit Coupon Code"
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
          label="Code"
          name={["code"]}
          rules={[
            {
              required: true,
              max: 20,
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
              validator(_rule, value) {
                if (!isUUID(value)) {
                  throw new Error("Store should be an UUID");
                }
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
              validator(_rule, value) {
                if (value < 0) {
                  throw new Error("Percentage cannot be negative");
                } else if (value > 100) {
                  throw new Error("Percentage cannot exceed 100");
                }

                const amountValue = getFieldValue("amount");
                if (!!amountValue) {
                  throw new Error(
                    "Only one between 'percentage' and 'amount' should be set, not both"
                  );
                }
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
            suffix="%"
          />
        </Form.Item>
        <Form.Item
          label="Amount"
          name={["amount"]}
          rules={[
            {
              required: false,
              validator(_rule, value) {
                if (value < 0) {
                  throw new Error("Amount must be positive");
                }

                const percentageValue = getFieldValue("percentage");
                if (!!percentageValue) {
                  throw new Error(
                    "Only one between 'percentage' and 'amount' should be set, not both"
                  );
                }
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
