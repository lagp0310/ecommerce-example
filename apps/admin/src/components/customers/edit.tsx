"use client";

import React from "react";
import { Edit, SaveButton, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";
import { useUpdate } from "@refinedev/core";

export const CustomerEdit = () => {
  const {
    formProps,
    saveButtonProps,
    redirect,
    query,
    form: { getFieldsValue, setFieldValue, validateFields },
  } = useForm({
    queryMeta: { select: "*, emails(email), phone_numbers(phone_number)" },
  });

  const customersData = React.useMemo(
    () => query?.data?.data,
    [query?.data?.data]
  );
  React.useEffect(() => {
    if (!!customersData) {
      setFieldValue("email", customersData?.emails?.at(0)?.email);
      setFieldValue(
        "phone_number",
        customersData?.phone_numbers?.at(0)?.phone_number
      );
    }
  }, [customersData, setFieldValue]);

  const { mutate: mutateCustomer } = useUpdate({
    resource: "customers",
  });

  const updateCustomer = React.useCallback(async () => {
    try {
      const { errorFields } = await validateFields();

      if (Array.isArray(errorFields) && errorFields.length > 0)
        throw new Error("Form is invalid");

      const { email, phone_number, ...rest } = getFieldsValue();
      mutateCustomer({ values: { ...rest } });

      redirect("list");
    } catch (error) {
      console.error(error);
    }
  }, [getFieldsValue, mutateCustomer, redirect, validateFields]);

  return (
    <Edit footerButtons={[]}>
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
        <div className="flex flex-1 flex-row gap-x-4 w-full">
          <Form.Item
            label="First Name"
            name={["first_name"]}
            rules={[
              {
                required: true,
              },
            ]}
            className="flex-1"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name={["last_name"]}
            rules={[
              {
                required: true,
              },
            ]}
            className="flex-1"
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-1 flex-row gap-x-4 w-full">
          <Form.Item
            label="Email"
            name={["email"]}
            rules={[
              {
                required: true,
              },
            ]}
            className="flex-1"
          >
            <Input disabled readOnly />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name={["phone_number"]}
            rules={[
              {
                required: true,
              },
            ]}
            className="flex-1"
          >
            <Input disabled readOnly />
          </Form.Item>
        </div>
        <Form.Item
          label="Birth Date"
          name={["birth_date"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <div className="flex flex-1 flex-row w-full justify-end">
          <SaveButton {...saveButtonProps} onClick={updateCustomer} />
        </div>
      </Form>
    </Edit>
  );
};
