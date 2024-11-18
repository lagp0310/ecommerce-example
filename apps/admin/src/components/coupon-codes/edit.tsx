"use client";

import React from "react";
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

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
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
