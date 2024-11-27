"use client";

import React from "react";
import { Create, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { DatePicker, Form, Input, Select, Upload } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

export const ProductCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: currencySelectProps } = useSelect({
    resource: "currencies",
    optionLabel: (item) => `${item.name} (${item.three_letter_code})`,
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    optionLabel: "name",
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
          label="Name"
          name={["name"]}
          rules={[
            {
              required: true,
              max: 50,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name={["description"]}
          rules={[
            {
              required: false,
              max: 500,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="SKU"
          name={["sku"]}
          rules={[
            {
              required: true,
              max: 50,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Available Quantity"
          name={["available_quantity"]}
          rules={[
            {
              required: false,
              validator(_, value) {
                if (!!value && value < 0) {
                  return Promise.reject(
                    new Error("Available Quantity must be positive")
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
            customInput={Input}
            decimalScale={0}
            fixedDecimalScale
            thousandSeparator=","
          />
        </Form.Item>
        <Form.Item
          label="Currency"
          name={"currency"}
          rules={[
            {
              required: true,
              validator(_, value) {
                if (!isUUID(value)) {
                  return Promise.reject(
                    new Error("Currency should be an UUID")
                  );
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <Select {...currencySelectProps} />
        </Form.Item>
        <Form.Item
          label="Price"
          name={["price"]}
          rules={[
            {
              required: true,
              validator(_, value) {
                if (value < 0) {
                  return Promise.reject(new Error("Price must be positive"));
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
        <Form.Item
          label="Discounted Price"
          name={["discounted_price"]}
          rules={[
            {
              required: false,
              validator(_, value) {
                if (!!value && value < 0) {
                  return Promise.reject(new Error("Price must be positive"));
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
        <Form.Item
          label="Discounted Until"
          name={["discounted_until"]}
          rules={[
            {
              required: false,
              validator(_, value) {
                if (!value) return Promise.resolve();

                const isValid = dayjs(value).isValid();
                if (!isValid) {
                  return Promise.reject(new Error("Date is not valid"));
                }

                return Promise.resolve();
              },
            },
          ]}
        >
          <DatePicker format="MM-DD-YYYY HH:mm:ss" className="w-full" />
        </Form.Item>
        <Form.Item label="Image">
          <Form.Item
            name="image_url"
            getValueProps={(value) => ({
              fileList: [{ url: value, name: value, uid: value }],
            })}
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Upload.Dragger listType="picture" beforeUpload={() => false}>
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Create>
  );
};
