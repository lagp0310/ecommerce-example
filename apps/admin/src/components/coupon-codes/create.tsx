"use client";

import React from "react";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { NumericFormat } from "react-number-format";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";
import { errorNotification, successNotification } from "@/lib/utils";

export const CouponCodesCreate = () => {
  const {
    formProps,
    saveButtonProps,
    form: { getFieldValue },
  } = useForm({
    successNotification,
    errorNotification,
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    optionLabel: "name",
  });

  return (
    <Create
      footerButtons={[]}
      title="Create Coupon Code"
      saveButtonProps={{
        ...saveButtonProps,
        icon: <FolderArrowDownIcon className="size-4 text-white" />,
      }}
    >
      <Form {...formProps} layout="vertical">
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
              validator(_, value) {
                if (!isUUID(value)) {
                  return Promise.reject(new Error("Store should be an UUID"));
                }

                return Promise.resolve();
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
              validator(_, value) {
                if (value < 0) {
                  return Promise.reject(
                    new Error("Percentage cannot be negative")
                  );
                } else if (value > 100) {
                  return Promise.reject(
                    new Error("Percentage cannot exceed 100")
                  );
                }

                const amountValue = getFieldValue("amount");
                if (!!amountValue) {
                  return Promise.reject(
                    new Error(
                      "Only one between 'percentage' and 'amount' should be set, not both"
                    )
                  );
                }

                return Promise.resolve();
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
              validator(_, value) {
                if (value < 0) {
                  return Promise.reject(new Error("Amount must be positive"));
                }

                const percentageValue = getFieldValue("percentage");
                if (!!percentageValue) {
                  return Promise.reject(
                    new Error(
                      "Only one between 'percentage' and 'amount' should be set, not both"
                    )
                  );
                }

                return Promise.resolve();
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
