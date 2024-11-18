"use client";

import React from "react";
import { Create, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Upload } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { NumericFormat } from "react-number-format";

export const ProductCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: currencySelectProps } = useSelect({
    resource: "currencies",
    optionLabel: "name",
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    optionLabel: "name",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name={["name"]}
          rules={[
            {
              required: true,
              len: 50,
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
              required: true,
              len: 500,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="SKU"
          name={["sku"]}
          rules={[
            {
              required: true,
              len: 50,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name={["price"]}
          rules={[
            {
              required: true,
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
        <Form.Item
          label="Currency"
          name={"currency"}
          rules={[
            {
              required: true,
              validator(_rule, value, callback) {
                if (!isUUID(value)) callback("Currency should be an UUID");
              },
            },
          ]}
        >
          <Select {...currencySelectProps} />
        </Form.Item>
        <Form.Item
          label="Rating"
          name={["rating"]}
          rules={[
            {
              required: true,
              min: 1,
              max: 5,
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
                required: true,
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
