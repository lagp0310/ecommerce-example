"use client";

import React from "react";
import { Edit, getValueFromEvent, useForm, useSelect } from "@refinedev/antd";
import { DatePicker, Form, Input, Select, Upload } from "antd";
import isUUID from "validator/es/lib/isUUID";
import { NumericFormat } from "react-number-format";
import dayjs from "dayjs";
import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";

export const ProductEdit = () => {
  const { formProps, saveButtonProps, query } = useForm();

  const productsData = query?.data?.data;

  const { selectProps: currencySelectProps } = useSelect({
    resource: "currencies",
    defaultValue: productsData?.currency,
    optionLabel: (item) => `${item.name} (${item.three_letter_code})`,
  });

  const { selectProps: storeSelectProps } = useSelect({
    resource: "stores",
    defaultValue: productsData?.store,
    optionLabel: "name",
  });

  return (
    <Edit
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
              validator(_rule, value, callback) {
                if (value < 0) callback("Price must be positive");
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
          label="Discounted"
          name={["discounted_price"]}
          rules={[
            {
              required: false,
              validator(_rule, value, callback) {
                if (!!value && value < 0) callback("Price must be positive");
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
              validator: (_rule, value, callback) => {
                if (!value) return;

                const isValid = dayjs(value).isValid();
                if (!isValid) callback("Date is not valid");
              },
            },
          ]}
        >
          <DatePicker format="MM-DD-YYYY HH:mm:ss" />
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
    </Edit>
  );
};
